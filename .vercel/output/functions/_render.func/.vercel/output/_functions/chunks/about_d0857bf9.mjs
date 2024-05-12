export { renderers } from '../renderers.mjs';
export { onRequest } from '../_empty-middleware.mjs';

const page = () => import('./pages/about_3682faa7.mjs').then(n => n.c);

export { page };
