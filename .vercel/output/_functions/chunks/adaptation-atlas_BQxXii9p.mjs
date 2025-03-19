import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C0Oazwys.mjs';
import { $ as $$Image } from './_astro_assets_DvPjuHjD.mjs';
import { g as getCloudinaryImageUrl } from './cloudinary_DxnJs4nU.mjs';
import { $ as $$ProjectInfo } from './project-info_DZkKhDiV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Adaptation Atlas",
  "date": "2025-03-18T00:00:00.000Z",
  "published": true,
  "client": "Alliance Bioversity & CIAT",
  "role": "Lead Engineer",
  "skills": "Front-end Development, CMS Development, Geospatial",
  "stack": "TypeScript, Next.js, Sanity, Mapbox, D3.js, GraphQL",
  "url": "https://adaptationatlas.cgiar.org/",
  "image": "v1742332319/Screenshot_2025-03-18_at_3.42.14_PM_htvtxq.png",
  "gravity": "south",
  "description": "An application to help African adaptation to climate change\n"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "overview",
    "text": "Overview"
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
          ...getCloudinaryImageUrl("v1742332320/Screenshot_2025-03-18_at_3.43.11_PM_fa51zz.png", 1200, 600, "fill", "north"),
          alt: "TK"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "The Africa Agriculture Adaptation Atlas is an interactive platform designed to visualize the landscape of climate adaptation efforts across the continent. With over 1,300 partner organizations, the project helps stakeholders explore networks, identify collaboration opportunities, and access critical climate data."
    }), "\n", createVNode(_components.p, {
      children: "The client needed an interactive map-based visualization to showcase the connections between organizations working on climate adaptation. Additionally, a CMS was required to manage content efficiently, while ensuring seamless integration with a scalable web framework."
    }), "\n", createVNode(_components.h2, {
      id: "my-role",
      children: "My Role"
    }), "\n", createVNode(_components.p, {
      children: "As tech lead, I defined the technology stack, ensuring it met the project’s requirements. I worked closely with Periscopic’s data engineering team, who structured raw data into a SQLite database, and collaborated with their design team to create effective data visualizations within budget constraints."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742332318/Screenshot_2025-03-18_at_3.44.51_PM_dskuqj.png", 600, 400, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742332323/Screenshot_2025-03-18_at_3.46.58_PM_cfcht4.png", 600, 400, "fill"),
          alt: "TK"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "technical-implementation",
      children: "Technical Implementation"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Next.js & Sanity CMS: Chosen for a fast, server-rendered frontend with a flexible, headless CMS for easy content management."
      }), "\n", createVNode(_components.li, {
        children: "GraphQL API: Designed a schema to enable efficient querying of partner organizations and their connections."
      }), "\n", createVNode(_components.li, {
        children: "Vercel Deployment: Ensured high performance, automatic scaling, and a global CDN for fast load times."
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The result is a powerful, data-driven platform that enhances collaboration and decision-making for climate adaptation in Africa."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: [createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742330233/Screenshot_2025-03-18_at_3.25.12_PM_hmcmfs.png", 1200, 600, "fill", "north"),
          alt: "TK"
        })
      }), createVNode("div", {
        class: "image-grid grid-3",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742332235/Screenshot_2025-03-18_at_4.05.56_PM_nes6v5.png", 400, 400, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742332236/Screenshot_2025-03-18_at_4.05.41_PM_i3gdza.png", 400, 400, "fill"),
          alt: "TK"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742332238/Screenshot_2025-03-18_at_4.06.19_PM_s3zzm9.png", 400, 400, "fill"),
          alt: "TK"
        })]
      }), createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742332314/Screenshot_2025-03-18_at_3.56.28_PM_cx3coy.png", 1200, 600, "fill", "north"),
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

const url = "src/content/work/adaptation-atlas.mdx";
const file = "/Users/nickharb/code/projects/nh-astro/src/content/work/adaptation-atlas.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickharb/code/projects/nh-astro/src/content/work/adaptation-atlas.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
