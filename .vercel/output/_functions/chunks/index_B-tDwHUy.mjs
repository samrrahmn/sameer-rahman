import { c as createComponent } from './astro-component_DMqWBObH.mjs';
import 'piccolore';
import { c as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from './entrypoint_D3Dmxail.mjs';
import { $ as $$Layout } from './Layout_CNkmvvuL.mjs';
import { g as getCollection } from './_astro_content_DZX2Y4RJ.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Posts", "data-astro-cid-qpkimemv": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="posts" data-astro-cid-qpkimemv> <h1 data-astro-cid-qpkimemv>Posts</h1> ${posts.map((post) => renderTemplate`<div class="post" data-astro-cid-qpkimemv> <a${addAttribute(`/post/${post.id}`, "href")} data-astro-cid-qpkimemv> <h3 data-astro-cid-qpkimemv>${post.data.title}</h3> <p data-astro-cid-qpkimemv>${post.data.date}</p> <p data-astro-cid-qpkimemv> ${post.body?.replace(/[#>*_\-]/g, "").slice(0, 120)}...
</p> </a> </div>`)} </section> ` })}`;
}, "/Users/sameer/Developer/sameer-rahman/src/pages/post/index.astro", void 0);

const $$file = "/Users/sameer/Developer/sameer-rahman/src/pages/post/index.astro";
const $$url = "/post";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
