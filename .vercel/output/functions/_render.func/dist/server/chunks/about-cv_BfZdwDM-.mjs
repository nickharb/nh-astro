import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderSlot } from './astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import { $ as $$Default } from './default_BWtDFl0P.mjs';

const $$AboutCv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, { "data-astro-cid-o7dsgjhc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="about-cv" data-astro-cid-o7dsgjhc> ${renderSlot($$result2, $$slots["default"])} </section> ` })} `;
}, "/Users/nickharb/code/projects/nh-astro/src/layouts/about-cv.astro", void 0);

export { $$AboutCv as $ };
