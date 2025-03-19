import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_BegmHTQr.mjs';
import { g as getCollection } from '../chunks/_astro_content_C9ai_B_j.mjs';
export { renderers } from '../renderers.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const blogPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="blog"> <h1>My Blog</h1> <div class="post-grid"> ${blogPosts.map((post) => {
    return renderTemplate`<div class="post"> <h2> <a${addAttribute(`/blog/${post.id}`, "href")}>${post.data.title}</a> </h2> <p>${post.data.description}</p> </div>`;
  })} </div> </section> ` })}`;
}, "/Users/nickharb/code/projects/nh-astro/src/pages/blog.astro", void 0);

const $$file = "/Users/nickharb/code/projects/nh-astro/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
