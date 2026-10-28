import { getCollection } from 'astro:content';

const byDateDesc = (a: Date, b: Date) => b.valueOf() - a.valueOf();

const dateFmt = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});
const monthFmt = new Intl.DateTimeFormat('en-GB', { month: 'short', timeZone: 'UTC' });

export const formatDate = (d: Date) => dateFmt.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);
export const dayOf = (d: Date) => d.getUTCDate();
export const monthOf = (d: Date) => monthFmt.format(d);

export function formatRange(start: Date, end?: Date) {
  if (!end || isoDate(start) === isoDate(end)) return formatDate(start);
  return `${dayOf(start)}–${formatDate(end)}`;
}

export async function getNews() {
  const all = await getCollection('news', ({ data }) => !data.draft);
  return all.sort((a, b) => byDateDesc(a.data.date, b.data.date));
}

/** Split events into upcoming (soonest first) and past (latest first), at build time. */
export async function getEvents() {
  const all = await getCollection('events');
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const isUpcoming = (e: (typeof all)[number]) => (e.data.end ?? e.data.start) >= today;

  return {
    upcoming: all.filter(isUpcoming).sort((a, b) => a.data.start.valueOf() - b.data.start.valueOf()),
    past: all.filter((e) => !isUpcoming(e)).sort((a, b) => byDateDesc(a.data.start, b.data.start)),
  };
}

export async function getStories() {
  const all = await getCollection('stories');
  return all.sort((a, b) => Number(b.data.featured) - Number(a.data.featured) || byDateDesc(a.data.date, b.data.date));
}

export async function getUpdates(kind: 'member-activity' | 'representation') {
  const all = await getCollection('updates', ({ data }) => data.kind === kind);
  return all.sort((a, b) => byDateDesc(a.data.date, b.data.date));
}

export async function getMembers() {
  return (await getCollection('members')).sort((a, b) => a.data.order - b.data.order);
}

export async function getCollaborations() {
  return (await getCollection('collaborations')).sort((a, b) => a.data.order - b.data.order);
}
