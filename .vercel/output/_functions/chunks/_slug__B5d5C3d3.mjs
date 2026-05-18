import { c as createComponent } from './astro-component_DMqWBObH.mjs';
import 'piccolore';
import { c as renderComponent, b as renderTemplate, m as maybeRenderHead } from './entrypoint_D3Dmxail.mjs';
import { $ as $$Layout } from './Layout_CNkmvvuL.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_DZX2Y4RJ.mjs';

async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="post-container"> <a href="/" class="back"> <i class="fa-solid fa-arrow-left"></i>
Back
</a> <h1 class="title">${post.data.title}</h1> <div class="date">${post.data.date}</div> <article class="post-content"> ${renderComponent($$result2, "Content", Content, {})} </article> </div> ` })}`;
}, "/Users/sameer/Developer/sameer-rahman/src/pages/post/[slug].astro", void 0);

const $$file = "/Users/sameer/Developer/sameer-rahman/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
