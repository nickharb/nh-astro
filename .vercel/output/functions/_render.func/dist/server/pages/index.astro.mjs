import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import { $ as $$AboutCv } from '../chunks/about-cv_BfZdwDM-.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$AboutCv, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="hero" data-astro-cid-j7pv25f6> <div class="cta" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Hello, World!</h1> <p class="lede" data-astro-cid-j7pv25f6>
Full-stack engineer with a front-end focus, specializing in data-driven
        applications and immersive experiences.
</p> <a href="/work" class="button-lg" data-astro-cid-j7pv25f6>See My Work</a> </div> </section> ` })} `;
}, "/Users/nickharb/code/projects/nh-astro/src/pages/index.astro", void 0);

const $$file = "/Users/nickharb/code/projects/nh-astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
