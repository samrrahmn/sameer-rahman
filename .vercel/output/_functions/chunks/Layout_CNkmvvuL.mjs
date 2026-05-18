import { c as createComponent } from './astro-component_DMqWBObH.mjs';
import 'piccolore';
import { r as renderHead, j as renderSlot, b as renderTemplate } from './entrypoint_D3Dmxail.mjs';
import 'clsx';
import { r as renderScript } from './script_CwsAEkva.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title = "Sameer Rahman" } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <div class="container content" data-astro-cid-sckkx6r4> <header data-astro-cid-sckkx6r4> <a href="/" class="logo" data-astro-cid-sckkx6r4>Sameer Rahman</a> <nav data-astro-cid-sckkx6r4> <a href="/post" data-astro-cid-sckkx6r4>Posts</a> <a href="/about" data-astro-cid-sckkx6r4>About</a> <button id="theme-toggle" data-astro-cid-sckkx6r4> <i class="fa-solid fa-circle-half-stroke" data-astro-cid-sckkx6r4></i> </button> </nav> </header> ${renderSlot($$result, $$slots["default"])} </div> <footer class="container" data-astro-cid-sckkx6r4> <p data-astro-cid-sckkx6r4>© 2026 Sameer Rahman</p> <div class="socials" data-astro-cid-sckkx6r4> <a href="https://twitter.com/iamsameerrahman" target="_blank" data-astro-cid-sckkx6r4> <i class="fa-brands fa-twitter" data-astro-cid-sckkx6r4></i> </a> <a href="https://github.com/rahmansameer" target="_blank" data-astro-cid-sckkx6r4> <i class="fa-brands fa-github" data-astro-cid-sckkx6r4></i> </a> <a href="https://linkedin.com/in/rahmansameer" target="_blank" data-astro-cid-sckkx6r4> <i class="fa-brands fa-linkedin" data-astro-cid-sckkx6r4></i> </a> <a href="https://facebook.com/iamsameerrahman" target="_blank" data-astro-cid-sckkx6r4> <i class="fa-brands fa-facebook" data-astro-cid-sckkx6r4></i> </a> </div> </footer> ${renderScript($$result, "/Users/sameer/Developer/sameer-rahman/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/sameer/Developer/sameer-rahman/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
