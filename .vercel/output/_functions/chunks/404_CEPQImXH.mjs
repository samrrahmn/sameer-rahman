import { c as createComponent } from './astro-component_DMqWBObH.mjs';
import 'piccolore';
import { r as renderHead, b as renderTemplate } from './entrypoint_D3Dmxail.mjs';
import 'clsx';
import { r as renderScript } from './script_CwsAEkva.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><title>Redirecting...</title>${renderHead()}</head> <body> ${renderScript($$result, "/Users/sameer/Developer/sameer-rahman/src/pages/404.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/sameer/Developer/sameer-rahman/src/pages/404.astro", void 0);

const $$file = "/Users/sameer/Developer/sameer-rahman/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
