import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C0Oazwys.mjs';
import { $ as $$Image } from './_astro_assets_DvPjuHjD.mjs';
import { g as getCloudinaryImageUrl } from './cloudinary_DxnJs4nU.mjs';
import { $ as $$ProjectInfo } from './project-info_DZkKhDiV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Dartmouth Impact Explorer",
  "date": "2025-03-12T00:00:00.000Z",
  "published": true,
  "client": "Dartmouth College",
  "role": "Lead Front-end Engineer",
  "skills": "Front-end Development, 3D Rendering, Data Visualization",
  "stack": "TypeScript, React.js, Vite, Three.js, GraphQL, SQLite",
  "image": "v1742334688/screencapture-clients-periscopic-dartmouth-ctl-dartmouth-ctl-client-dev-now-explore-annual-fund-annual-funds-support-overall-2025-03-18-16_22_42_hwirbn.png",
  "gravity": "north",
  "description": "Visualizing a multibillion-dollar fundraising campaign\n"
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
          ...getCloudinaryImageUrl("v1742334688/screencapture-clients-periscopic-dartmouth-ctl-dartmouth-ctl-client-dev-now-explore-annual-fund-annual-funds-support-overall-2025-03-18-16_22_42_hwirbn.png", 1200, 600, "fill", "north"),
          alt: "TK"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "The Dartmouth Impact Explorer is an interactive tool designed to showcase the data behind Dartmouth’s Call to Lead campaign, which raised over $3.5 billion to support students, faculty, and institutional initiatives. The client needed a visually impressive platform to explore donor data dynamically, engaging users with compelling, data-driven storytelling."
    }), "\n", createVNode(_components.h2, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "The client wanted an interactive, visually striking experience that could filter and represent donor demographics through dynamic visualizations. The tool needed to integrate real-time data queries, run smoothly in the browser, and maintain high performance despite rendering complex animations and 3D elements."
    }), "\n", createVNode(_components.h2, {
      id: "my-role",
      children: "My Role"
    }), "\n", createVNode(_components.p, {
      children: "As tech lead, I determined the tech stack and architectural approach. I collaborated with Periscopic’s data engineering team to design the data schema and worked closely with the design team to balance aesthetics with performance constraints.\nTechnical Implementation"
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334679/Screenshot_2025-03-18_at_4.18.48_PM_wsosus.png", 600, 400, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334686/Screenshot_2025-03-18_at_4.18.53_PM_kpc3ar.png", 600, 400, "fill"),
          alt: "TK"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "technical-implementation",
      children: "Technical Implementation"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "React.js, Vite & TypeScript: Chosen for a modern, fast development environment with optimized build performance."
      }), "\n", createVNode(_components.li, {
        children: "Three.js & React-Three-Fiber: Built a custom particle system to represent donor data dynamically, reacting to user-selected demographic filters."
      }), "\n", createVNode(_components.li, {
        children: "GSAP Animations: Created smooth motion transitions to enhance interactivity."
      }), "\n", createVNode(_components.li, {
        children: "GraphQL & SQLite: Optimized queries for real-time data-driven visualizations."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The final product is a visually engaging, interactive platform that transforms complex fundraising data into a compelling digital experience."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: [createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334689/Screenshot_2025-03-18_at_4.19.36_PM_kv4h29.png", 1200, 600, "fill", "north"),
          alt: "TK"
        })
      }), createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334684/screencapture-clients-periscopic-dartmouth-ctl-dartmouth-ctl-client-dev-now-explore-annual-fund-annual-funds-support-overall-2025-03-18-16_23_21_qv3xav.png", 600, 600, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334687/screencapture-clients-periscopic-dartmouth-ctl-dartmouth-ctl-client-dev-now-explore-annual-fund-annual-funds-support-overall-2025-03-18-16_25_07_m2ev6f.png", 600, 600, "fill"),
          alt: "TK"
        })]
      })]
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

const url = "src/content/work/dartmouth-impact-explorer.mdx";
const file = "/Users/nickharb/code/projects/nh-astro/src/content/work/dartmouth-impact-explorer.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickharb/code/projects/nh-astro/src/content/work/dartmouth-impact-explorer.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
