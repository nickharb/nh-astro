import { c as createComponent, r as renderComponent, a as renderTemplate, u as unescapeHTML } from '../chunks/astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import { $ as $$AboutCv } from '../chunks/about-cv_BfZdwDM-.mjs';
export { renderers } from '../renderers.mjs';

const html = () => "<h1 id=\"about-nick-harbaugh\">About Nick Harbaugh</h1>\n<p>I’m a full-stack engineer with a front-end focus, blending technical precision with design-driven problem-solving. With over 15 years of experience, I’ve worked across industries with companies around the world, building data-driven applications, leading creative and technical teams, and shaping digital experiences that prioritize usability, accessibility, and impact.</p>\n<p>My journey started in journalism at The New York Times and Associated Press, where I developed interactive news features and data visualizations under high-pressure newsroom deadlines. This early experience gave me a deep appreciation for narrative structure, real-time data integration, and audience engagement—principles that continue to shape my work today.</p>\n<p>I originally studied UI/UX design, which gives me a unique ability to bridge the gap between design and engineering teams. I understand the nuances of both disciplines, ensuring that aesthetic intent and technical feasibility align seamlessly. Whether I’m architecting scalable front-end systems, optimizing user interfaces for accessibility, or developing interactive installations, I prioritize solutions that are intuitive, performant, and engaging.</p>\n<p>Over the years, I’ve held leadership roles at agencies and startups, including serving as Director of Technology at Periscopic and Sr. Data Visualization Engineer at Graphicacy. I also co-founded Seven Mile Media, where I led the development of interactive experiences for clients like Nike, The New Yorker, the World Wildlife Fund, and major research institutions. My technical toolkit includes React, Next.js, Three.js, D3.js, Node.js, and various CMS platforms, but at my core, I’m a problem solver—driven by curiosity, creativity, and a deep understanding of how technology can elevate storytelling.</p>\n<p>Check out my portfolio: <a href=\"/work\">Work</a> |\nYou can reach me at: <a href=\"mailto:nick@nickharb.com\">nick@nickharb.com</a></p>";

				const frontmatter = {"layout":"../layouts/about-cv.astro"};
				const file = "/Users/nickharb/code/projects/nh-astro/src/pages/about.md";
				const url = "/about";
				function rawContent() {
					return "   \n                                   \n   \n\n# About Nick Harbaugh\n\nI’m a full-stack engineer with a front-end focus, blending technical precision with design-driven problem-solving. With over 15 years of experience, I’ve worked across industries with companies around the world, building data-driven applications, leading creative and technical teams, and shaping digital experiences that prioritize usability, accessibility, and impact.\n\nMy journey started in journalism at The New York Times and Associated Press, where I developed interactive news features and data visualizations under high-pressure newsroom deadlines. This early experience gave me a deep appreciation for narrative structure, real-time data integration, and audience engagement—principles that continue to shape my work today.\n\nI originally studied UI/UX design, which gives me a unique ability to bridge the gap between design and engineering teams. I understand the nuances of both disciplines, ensuring that aesthetic intent and technical feasibility align seamlessly. Whether I’m architecting scalable front-end systems, optimizing user interfaces for accessibility, or developing interactive installations, I prioritize solutions that are intuitive, performant, and engaging.\n\nOver the years, I’ve held leadership roles at agencies and startups, including serving as Director of Technology at Periscopic and Sr. Data Visualization Engineer at Graphicacy. I also co-founded Seven Mile Media, where I led the development of interactive experiences for clients like Nike, The New Yorker, the World Wildlife Fund, and major research institutions. My technical toolkit includes React, Next.js, Three.js, D3.js, Node.js, and various CMS platforms, but at my core, I’m a problem solver—driven by curiosity, creativity, and a deep understanding of how technology can elevate storytelling.\n\nCheck out my portfolio: [Work](/work) | \nYou can reach me at: [nick@nickharb.com](mailto:nick@nickharb.com)\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"about-nick-harbaugh","text":"About Nick Harbaugh"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$AboutCv, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html())}`
							})}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
