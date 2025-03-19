import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_BegmHTQr.mjs';
import { g as getCollection } from '../chunks/_astro_content_C9ai_B_j.mjs';
import { g as getCloudinaryImageUrl } from '../chunks/cloudinary_DxnJs4nU.mjs';
export { renderers } from '../renderers.mjs';

const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const projects = (await getCollection("work")).filter((post) => post.data.published === true).sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "data-astro-cid-jljc7dey": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="work" data-astro-cid-jljc7dey> <h1 data-astro-cid-jljc7dey>Selected Work</h1> <div class="post-grid" data-astro-cid-jljc7dey> ${projects.map((post) => {
    const imageUrl = post.data.image ? getCloudinaryImageUrl(
      post.data.image,
      600,
      300,
      "fill",
      post.data.gravity
    ).src : getCloudinaryImageUrl(
      "v1742315484/placeholder-image_h6bsvs.webp",
      600,
      400,
      "fill"
    ).src;
    return renderTemplate`<div class="project" data-astro-cid-jljc7dey> <a${addAttribute(`/work/${post.id}`, "href")} class="project-link" data-astro-cid-jljc7dey> <img${addAttribute(imageUrl, "src")}${addAttribute(post.data.title, "alt")} class="featured-image" data-astro-cid-jljc7dey> <h3 data-astro-cid-jljc7dey>${post.data.title}</h3> </a> <p data-astro-cid-jljc7dey>${post.data.description}</p> </div>`;
  })} </div> </section> ` })} `;
}, "/Users/nickharb/code/projects/nh-astro/src/pages/work.astro", void 0);

const $$file = "/Users/nickharb/code/projects/nh-astro/src/pages/work.astro";
const $$url = "/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Work,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
