import { c as createComponent } from './astro-component_DMqWBObH.mjs';
import 'piccolore';
import { c as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from './entrypoint_D3Dmxail.mjs';
import { $ as $$Layout } from './Layout_CNkmvvuL.mjs';
import { g as getCollection } from './_astro_content_DZX2Y4RJ.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).sort((a, b) => {
    const dateA = new Date(a.data.date).getTime();
    const dateB = new Date(b.data.date).getTime();
    return dateB - dateA;
  }).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <img src="/sameer-rahman.jpg" alt="profile" data-astro-cid-j7pv25f6> <div data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Sameer Rahman</h1> <p data-astro-cid-j7pv25f6>
AI-powered SaaS products from idea to launch. Everything I build ships, improves over time, and evolves in public.
</p> <div class="socials" data-astro-cid-j7pv25f6> <a href="https://twitter.com/iamsameerrahman" target="_blank" data-astro-cid-j7pv25f6><i class="fa-brands fa-twitter" data-astro-cid-j7pv25f6></i></a> <a href="https://github.com/rahmansameer" target="_blank" data-astro-cid-j7pv25f6><i class="fa-brands fa-github" data-astro-cid-j7pv25f6></i></a> <a href="https://linkedin.com/in/rahmansameer" target="_blank" data-astro-cid-j7pv25f6><i class="fa-brands fa-linkedin" data-astro-cid-j7pv25f6></i></a> <a href="https://facebook.com/iamsameerrahman" target="_blank" data-astro-cid-j7pv25f6><i class="fa-brands fa-facebook" data-astro-cid-j7pv25f6></i></a> </div> </div> </section> <section class="projects" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Projects</h2> <div class="project" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6> <a href="https://github.com/rahmansameer/polar-desk" target="_blank" data-astro-cid-j7pv25f6>
Polar Desk
</a> </h3> <p data-astro-cid-j7pv25f6>
A client portal built for service teams to manage projects, streamline communication, and keep everything organized in one workspace.
</p> <div class="stack" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Next.js</span> <span data-astro-cid-j7pv25f6>React</span> <span data-astro-cid-j7pv25f6>Supabase</span> <span data-astro-cid-j7pv25f6>Tailwind</span> <span data-astro-cid-j7pv25f6>Stripe</span> </div> </div> <div class="project" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6> <a href="https://github.com/rahmansameer/appbase" target="_blank" data-astro-cid-j7pv25f6>
Appbase
</a> </h3> <p data-astro-cid-j7pv25f6>
An AI-powered platform to discover, evaluate, and compare software with structured insights and intelligent recommendations.
</p> <div class="stack" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Next.js</span> <span data-astro-cid-j7pv25f6>React</span> <span data-astro-cid-j7pv25f6>Supabase</span> <span data-astro-cid-j7pv25f6>Tailwind</span> <span data-astro-cid-j7pv25f6>AI APIs</span> </div> </div> </section> <section class="posts" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Recent Posts</h2> ${posts.map((post) => renderTemplate`<div class="post" data-astro-cid-j7pv25f6> <a${addAttribute(`/post/${post.id}`, "href")} data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>${post.data.title}</h3> <p data-astro-cid-j7pv25f6>${post.data.date}</p> <p data-astro-cid-j7pv25f6> ${post.body?.replace(/[#>*_\-]/g, "").slice(0, 120)}...
</p> </a> </div>`)} <a href="/post" class="all-posts" data-astro-cid-j7pv25f6>
All Posts <i class="fa-solid fa-arrow-right" data-astro-cid-j7pv25f6></i> </a> </section> ` })}`;
}, "/Users/sameer/Developer/sameer-rahman/src/pages/index.astro", void 0);

const $$file = "/Users/sameer/Developer/sameer-rahman/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
