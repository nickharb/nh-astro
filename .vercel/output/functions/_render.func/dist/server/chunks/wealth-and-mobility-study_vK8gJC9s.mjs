import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C0Oazwys.mjs';
import { $ as $$Image } from './_astro_assets_DvPjuHjD.mjs';
import { g as getCloudinaryImageUrl } from './cloudinary_DxnJs4nU.mjs';
import { $ as $$ProjectInfo } from './project-info_DZkKhDiV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Wealth and Mobility Study",
  "date": "2025-03-10T00:00:00.000Z",
  "published": true,
  "client": "University of Michigan",
  "role": "Sr. Front-end Engineer",
  "skills": "Front-end Development, Data Engineering, Data Visualization, Geospatial",
  "stack": "TypeScript, Next.js, Mapbox, Pixi.js, D3.js, MUI, Deno",
  "image": "v1742334560/Screenshot_2025-03-18_at_4.27.11_PM_sp3d0u.png",
  "gravity": "south",
  "description": "Mapping inequality and opportunity in the U.S.\n"
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
          ...getCloudinaryImageUrl("v1742334560/Screenshot_2025-03-18_at_4.27.11_PM_sp3d0u.png", 1200, 600, "fill", "center"),
          alt: "TK"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "The Wealth and Mobility Study, developed for the University of Michigan’s Stone Center for Inequality Dynamics (CID), is an interactive data visualization platform that explores wealth inequality and social mobility across the United States. The tool enables users to analyze income and wealth distribution at multiple geographic levels, from states to census tracts, through an intuitive and highly interactive experience."
    }), "\n", createVNode(_components.h2, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "The project required handling vast amounts of raw data, transforming it into an efficient, structured format that could be seamlessly integrated with Mapbox for geospatial visualization. The application also needed to support dynamic filtering, comparisons, and deep-dive analytics, making performance and usability key priorities."
    }), "\n", createVNode(_components.h2, {
      id: "my-role",
      children: "My Role"
    }), "\n", createVNode(_components.p, {
      children: "As one of two senior front-end engineers, I was responsible for:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Developing interactive Mapbox components that allow users to explore income and wealth data across four geographic levels (state, CBSA, county, and census tract)."
      }), "\n", createVNode(_components.li, {
        children: "Implementing dynamic visualizations with Pixi.js and D3.js, providing detailed insights into wealth and mobility trends."
      }), "\n", createVNode(_components.li, {
        children: "Optimizing data processing pipelines using Deno, structuring large datasets into a nested JSON format for fast rendering and smooth user interactions."
      }), "\n"]
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334566/Screenshot_2025-03-18_at_4.29.52_PM_zdruo1.png", 1200, 600, "fill", "north"),
          alt: "TK"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "technical-implementation",
      children: "Technical Implementation"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Next.js & TypeScript: Built a modern, scalable architecture."
      }), "\n", createVNode(_components.li, {
        children: "Mapbox: Created an interactive mapping interface for geographic wealth analysis."
      }), "\n", createVNode(_components.li, {
        children: "Pixi.js & D3.js: Developed custom high-performance visualizations for deep-dive analytics."
      }), "\n", createVNode(_components.li, {
        children: "MUI: Designed a polished UI for data exploration and user navigation."
      }), "\n", createVNode(_components.li, {
        children: "Deno: Preprocessed raw data into an optimized format for real-time queries and rendering."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The Wealth and Mobility Study equips researchers, policymakers, and the public with a powerful tool to better understand the dynamics of inequality, fostering informed discussions about wealth mobility and economic justice in the U.S."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: [createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334557/Screenshot_2025-03-18_at_4.32.15_PM_tlyoin.png", 600, 600, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334556/Screenshot_2025-03-18_at_4.33.18_PM_msecdo.png", 600, 600, "fill"),
          alt: "TK"
        })]
      }), createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742334563/Screenshot_2025-03-18_at_4.33.10_PM_c3zhn7.png", 1200, 600, "fill", "center"),
          alt: "TK"
        })
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

const url = "src/content/work/wealth-and-mobility-study.mdx";
const file = "/Users/nickharb/code/projects/nh-astro/src/content/work/wealth-and-mobility-study.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickharb/code/projects/nh-astro/src/content/work/wealth-and-mobility-study.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
