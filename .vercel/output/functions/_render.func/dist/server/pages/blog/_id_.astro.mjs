import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../../chunks/page_BegmHTQr.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_C9ai_B_j.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="post"> <h1>${post.data.title}</h1> ${renderComponent($$result2, "Content", Content, {})} </section> ` })}`;
}, "/Users/nickharb/code/projects/nh-astro/src/pages/blog/[id].astro", void 0);

const $$file = "/Users/nickharb/code/projects/nh-astro/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
