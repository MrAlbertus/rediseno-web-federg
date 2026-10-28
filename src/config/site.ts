/** Site-wide navigation and links, shared by Nav, NavSheet and Footer. */
export const NAV_LINKS = [
  { label: 'About FEDERG', href: '/about' },
  { label: 'Collaborations', href: '/collaborations' },
  { label: 'News & Events', href: '/news' },
  { label: 'Patient Stories', href: '/patient-stories' },
  { label: 'Contact', href: '/contact' },
];

/** Placeholder social links (training project: they point nowhere). */
export const SOCIALS = [
  {
    label: 'Facebook',
    href: '#',
    path: 'M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8v3h2.4V21h3.1z',
  },
  {
    label: 'X',
    href: '#',
    path: 'M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.77L17.75 3zm-1.08 16.2h1.7L7.4 4.73H5.58l11.09 14.47z',
  },
  {
    label: 'LinkedIn',
    href: '#',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3V9.75zm6.5 0h3.8v1.54h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4V9.75z',
  },
];

export const DISCLAIMER = 'Training project – not the official FEDERG website';
