import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as renderSlot } from './astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import { $ as $$Default } from './default_BWtDFl0P.mjs';

const $$Page = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Default, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="page"> ${renderSlot($$result2, $$slots["default"])} </section> ` })}`;
}, "/Users/nickharb/code/projects/nh-astro/src/layouts/page.astro", void 0);

export { $$Page as $ };
