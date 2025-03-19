import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C0Oazwys.mjs';
import { $ as $$Image } from './_astro_assets_DvPjuHjD.mjs';
import { g as getCloudinaryImageUrl } from './cloudinary_DxnJs4nU.mjs';
import { $ as $$ProjectInfo } from './project-info_DZkKhDiV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Sonnentag Sustainability Display",
  "date": "2025-03-25T00:00:00.000Z",
  "published": true,
  "client": "University of Wisconsin-Eau Claire",
  "role": "Lead Engineer",
  "skills": "Front-end Development, API, 3D Rendering, Data Visualization",
  "stack": "React.js, Apollo, Three.js, D3.js, Blender",
  "image": "v1742321832/Selects_a7siii.00_02_34_14.Still011_uwuimw.jpg",
  "gravity": "south",
  "description": "Showcasing groundbreaking sustainability with an interactive touchscreen installation\n"
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
          ...getCloudinaryImageUrl("v1742347792/Selects_a7siii.00_02_34_14.Still011_vtbzwb.jpg", 1200, 600, "fill", "center"),
          alt: "TK"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "The Sonnentag Sustainability Display is an interactive touchscreen installation in the lobby of the newly constructed Sonnentag Complex at UW-Eau Claire. Designed to highlight the building’s cutting-edge sustainability features, the display allows visitors to explore an interactive 3D model and view real-time energy and water usage data gathered from the building’s submetering system."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742347654/localhost_5173__8_n6ntuj.png", 1200, 650, "fill", "center"),
          alt: "TK"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "the-challenge",
      children: "The Challenge"
    }), "\n", createVNode(_components.p, {
      children: "The Sonnentag Complex is one of the most energy-efficient buildings in the region, incorporating geothermal heating, solar energy, and advanced automation systems. The client wanted an engaging, interactive way to educate visitors about these often invisible sustainability efforts. The display needed to integrate a highly detailed 3D model, handle real-time data visualization, and run smoothly on a dedicated on-site computer."
    }), "\n", createVNode(_components.h2, {
      id: "my-role",
      children: "My Role"
    }), "\n", createVNode(_components.p, {
      children: "As lead front-end engineer, I developed the technical architecture and collaborated with Lauren Malkani on design and content strategy. We conducted in-depth research on the building’s construction and refined architectural models from the project’s architects to optimize them for web performance."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: [createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742347675/Screenshot_2024-08-26_at_11.00.21_AM_kfo2jw.png", 1200, 600, "fill", "south"),
          alt: "TK"
        })
      }), createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742347667/Screenshot_2024-08-24_at_5.18.46_PM_slt2vj.png", 600, 400, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742347679/279uCyC8_gljl4l.png", 600, 400, "fill"),
          alt: "TK"
        })]
      })]
    }), "\n", createVNode(_components.h2, {
      id: "technical-implementation",
      children: "Technical Implementation"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "React.js & Apollo: Created a scalable front-end with a GraphQL-based real-time data pipeline."
      }), "\n", createVNode(_components.li, {
        children: "Three.js & React-Three-Fiber: Developed an interactive 3D model showcasing the building’s sustainability features."
      }), "\n", createVNode(_components.li, {
        children: "D3.js: Designed a custom dashboard to visualize power, water, and HVAC data from submeters."
      }), "\n", createVNode(_components.li, {
        children: "Blender: Optimized architectural models for seamless rendering in a browser environment."
      }), "\n", createVNode(_components.li, {
        children: "Hardware Integration: Worked with UW’s IT team to select a NUC micro gaming PC capable of handling complex 3D graphics."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The Sonnentag Sustainability Display transforms technical building data into an accessible, visually rich experience, helping visitors understand and appreciate the facility’s commitment to sustainability."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: [createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742347816/Selects_a7siii.00_03_15_00.Still017_jhllzp.jpg", 600, 400, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742347815/Selects_a7siii.00_04_12_11.Still025_kvkzhx.jpg", 600, 400, "fill"),
          alt: "TK"
        })]
      }), createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742347819/Selects_a7siii.00_03_54_21.Still022_q3lrc7.jpg", 600, 400, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742347811/Selects_a7siii.00_03_25_03.Still019_wew3ux.jpg", 600, 400, "fill"),
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

const url = "src/content/work/sonnentag-sustainability.mdx";
const file = "/Users/nickharb/code/projects/nh-astro/src/content/work/sonnentag-sustainability.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickharb/code/projects/nh-astro/src/content/work/sonnentag-sustainability.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
