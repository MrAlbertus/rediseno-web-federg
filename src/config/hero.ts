/**
 * HERO MEDIA — the only place to change the hero video and poster.
 *
 * Put your files in /public/media/ and fill in the paths, e.g.:
 *   mp4:    '/media/hero.mp4'   (H.264, < 3 MB, ~10 s loop, no audio)
 *   webm:   '/media/hero.webm'  (optional, VP9/AV1, usually smaller)
 *   poster: '/media/hero.webp'  (first frame, ~1600 px wide, WebP or AVIF)
 *
 * Leave a value empty ('') and the hero falls back gracefully:
 *   - no video  -> poster only
 *   - no poster -> FEDERG brand gradient
 * The video is only loaded on screens wider than 768 px and when the
 * visitor has not asked for reduced motion; everyone else sees the poster.
 */
export const HERO_MEDIA = {
  mp4: '',
  webm: '',
  poster: '',
  /** Crop of the poster used behind the highlighted word (CSS background-position) */
  highlightPosition: '56% 14%',
};

/** Hero copy (English, edit freely). */
export const HERO_COPY = {
  lineOneBefore: 'Uniting',
  highlight: 'patients',
  lineTwo: 'with rare kidney diseases',
  text: 'FEDERG is a European federation of patient associations for rare and genetic kidney diseases, working together so that no patient faces their disease alone.',
  ctaLabel: 'Discover FEDERG',
  ctaHref: '/about',
  markers: ['Patient Associations', 'Research & Care'] as const,
};
