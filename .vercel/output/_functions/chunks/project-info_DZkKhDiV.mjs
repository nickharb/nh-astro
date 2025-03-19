import { c as createComponent, d as createAstro, m as maybeRenderHead, a as renderTemplate } from './astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ProjectInfo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectInfo;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h2 class="project-description">${frontmatter.description}</h2> <table class="project-info"> <tbody> ${frontmatter.client && renderTemplate`<tr> <td><strong>Client</strong></td> <td>${frontmatter.client}</td> </tr>`} ${frontmatter.role && renderTemplate`<tr> <td><strong>Role</strong></td> <td>${frontmatter.role}</td> </tr>`} ${frontmatter.skills && renderTemplate`<tr> <td><strong>Skills</strong></td> <td>${frontmatter.skills}</td> </tr>`} ${frontmatter.stack && renderTemplate`<tr> <td><strong>Tech Stack</strong></td> <td>${frontmatter.stack}</td> </tr>`} </tbody> </table>`;
}, "/Users/nickharb/code/projects/nh-astro/src/components/project-info.astro", void 0);

export { $$ProjectInfo as $ };
