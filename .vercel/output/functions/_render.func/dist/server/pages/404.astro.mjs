import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import { $ as $$Page } from '../chunks/page_BegmHTQr.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="not-found" data-astro-cid-zetdm5md> <h1 data-astro-cid-zetdm5md>404</h1> <img src="/src/assets/site/404.gif" alt="John Travolta looking around in Pulp Fiction" data-astro-cid-zetdm5md> <p data-astro-cid-zetdm5md>Looks like the page you requested doesn’t exist.</p> <p data-astro-cid-zetdm5md><a href="/" data-astro-cid-zetdm5md>&larr; back home</a></p> </div> ` })} `;
}, "/Users/nickharb/code/projects/nh-astro/src/pages/404.astro", void 0);

const $$file = "/Users/nickharb/code/projects/nh-astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
