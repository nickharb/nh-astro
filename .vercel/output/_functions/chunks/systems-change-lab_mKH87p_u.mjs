import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C0Oazwys.mjs';
import { $ as $$Image } from './_astro_assets_DvPjuHjD.mjs';
import { g as getCloudinaryImageUrl } from './cloudinary_DxnJs4nU.mjs';
import { $ as $$ProjectInfo } from './project-info_DZkKhDiV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Systems Change Lab",
  "date": "2025-03-19T00:00:00.000Z",
  "published": true,
  "client": "World Resources Institute",
  "role": "Lead Engineer, Technical Project Manager",
  "skills": "Front-end Development, CMS Development, Data Visualization",
  "stack": "Drupal, Pantheon, React.js, D3.js, SVG",
  "url": "https://systemschangelab.org/",
  "image": "v1742334669/Screenshot_2025-03-18_at_4.35.30_PM_xp0g0w.png",
  "gravity": "center",
  "description": "Tracking global transformations for a sustainable future\n"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
  }, {
    "depth": 2,
    "slug": "the-challenge",
    "text": "The Challenge"
  }, {
    "depth": 2,
    "slug": "my-role",
    "text": "My Role"
  }, {
    "depth": 2,
    "slug": "technical-implementation",
    "text": "Technical Implementation"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h2: "h2",
    li: "li",
    p: "p",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode($$ProjectInfo, {
      frontmatter: frontmatter
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334666/Screenshot_2025-03-18_at_4.36.05_PM_nj8pxl.png", 1200, 600, "fill", "center"),
          alt: "TK"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "The Systems Change Lab, an initiative led by the World Resources Institute (WRI), is a data-driven platform designed to monitor and accelerate the 70+ critical shifts needed to combat climate change, biodiversity loss, and economic injustice. By tracking key progress indicators, the platform helps policymakers, researchers, and advocates understand the current state of global systems and the barriers to transformative change."
    }), "\n", createVNode(_components.h2, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "This was a long-running project previously managed by another agency (Outright) and needed a seamless transition to Graphicacy while maintaining a biweekly feature release schedule. I had to quickly learn the Drupal architecture, onboard a new front-end engineering team, and manage ongoing feature requests from WRI—all while ensuring stability during the transition."
    }), "\n", createVNode(_components.h2, {
      id: "my-role",
      children: "My Role"
    }), "\n", createVNode(_components.p, {
      children: "As lead engineer and technical project manager:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Led a team of four: two in-house front-end engineers and two external Drupal engineers."
      }), "\n", createVNode(_components.li, {
        children: "Coordinated with WRI to ensure smooth feature rollouts and deployments."
      }), "\n", createVNode(_components.li, {
        children: "Worked closely with Outright to transfer project ownership without disrupting the development pipeline."
      }), "\n", createVNode(_components.li, {
        children: "Managed client relations, mentored a junior developer, and ensured technical roadmap alignment."
      }), "\n"]
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334658/Screenshot_2025-03-18_at_4.36.32_PM_oqjox8.png", 1200, 600, "fill", "north"),
          alt: "TK"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "technical-implementation",
      children: "Technical Implementation"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Drupal & Pantheon: Managed the CMS infrastructure and deployments."
      }), "\n", createVNode(_components.li, {
        children: "React.js & D3.js: Developed and optimized interactive visualizations."
      }), "\n", createVNode(_components.li, {
        children: "SVG-based graphics: Ensured scalable, high-performance data representations."
      }), "\n", createVNode(_components.li, {
        children: "Lando (local dev environment): Streamlined development workflows for engineers."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Systems Change Lab continues to be a powerful tool in tracking global sustainability efforts, providing stakeholders with real-time insights to drive action at the scale and speed needed to protect people and the planet."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334662/Screenshot_2025-03-18_at_4.38.00_PM_p3ytoy.png", 600, 600, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334673/Screenshot_2025-03-18_at_4.38.12_PM_gkzqiq.png", 600, 600, "fill"),
          alt: "TK"
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/work/systems-change-lab.mdx";
const file = "/Users/nickharb/code/projects/nh-astro/src/content/work/systems-change-lab.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickharb/code/projects/nh-astro/src/content/work/systems-change-lab.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
