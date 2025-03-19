import { g as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_C0Oazwys.mjs';
import { $ as $$Image } from './_astro_assets_DvPjuHjD.mjs';
import { g as getCloudinaryImageUrl } from './cloudinary_DxnJs4nU.mjs';
import { $ as $$ProjectInfo } from './project-info_DZkKhDiV.mjs';
import 'clsx';

/*

Case study content

Header
- Title
- Description - one-line summary of the project
- Client
- My role
- Tech stack
- Project time

Overview
Brief description of the project (What was it? Who was it for? What problem did it solve?)
Your role and responsibilities
Tech stack used

Problem & Challenges
Specific technical or UX challenges encountered
Client or stakeholder expectations and constraints

Solution & Implementation
Key architectural decisions (Why you chose a particular tech stack or approach)
Notable engineering challenges and solutions (e.g., optimizing performance, AI/ML integration, scalability decisions)
Front-end & UI/UX considerations (How design systems, accessibility, or interactivity played a role)
Backend decisions (APIs, database architecture, performance optimization)

Results & Impact
Metrics or qualitative feedback on success
Performance improvements or user experience enhancements
Business impact or client outcomes

Key Takeaways & Learnings
What you learned from this project
How it influenced your technical or strategic decision-making
Future improvements or extensions

Additional
- Tech stack diagrams using Draw.io, Excalidraw, Figma, or Mermaid.js

*/
const frontmatter = {
  "title": "Sonified Topographies",
  "date": "2025-03-20T00:00:00.000Z",
  "published": true,
  "client": "UNESCO",
  "role": "Lead Engineer",
  "skills": "Full-stack Development, Electrical Engineering, Generative Design",
  "stack": "Python, Processing",
  "image": "v1742309446/IMG_8602_ylwmkq.jpg",
  "gravity": "north",
  "description": "A UNESCO art installation traveling the world through music\n"
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
    p: "p",
    strong: "strong",
    ...props.components
  };
  return createVNode(Fragment, {
    children: ["\n", "\n", createVNode($$ProjectInfo, {
      frontmatter: frontmatter
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742309446/IMG_8602_ylwmkq.jpg", 1200, 600, "fill", "north"),
          alt: "a generative visualization of musical audio frequencies"
        })
      })
    }), "\n", createVNode(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", createVNode(_components.p, {
      children: "Sonified Topographies was created for UNESCO’s “Beyond City to City” exhibition at the Central Library in Austin, TX. The installation explores global cultures through music, using a custom-built 12K-LED panel array to transform sound into generative landscapes."
    }), "\n", createVNode(_components.p, {
      children: "The system scrapes the most popular songs in UNESCO Creative Cities and processes the audio through a Processing algorithm, mapping frequencies to evolving 3D visuals. The result is a dynamic display reflecting each city’s unique soundscape."
    }), "\n", createVNode(_components.h2, {
      id: "my-role",
      children: "My Role"
    }), "\n", createVNode(_components.p, {
      children: "As technical lead, I determined the tech stack, designed the LED installation, and developed the data interface. I collaborated with Seven Mile Media on the artistic concept and designed the generative forms that translate sound into visuals."
    }), "\n", createVNode("div", {
      class: "image-layout",
      children: [createVNode("div", {
        class: "image-grid grid-2",
        children: [createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742313300/IMG_7311_sldldr.jpg", 600, 400, "fill"),
          alt: "a partially-assembled LED array art installation"
        }), createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742313493/unesco-1_rafpto.png", 600, 400, "fill"),
          alt: "an LED array art installation"
        })]
      }), createVNode("div", {
        class: "image-full-width",
        children: createVNode($$Image, {
          ...getCloudinaryImageUrl("v1742229640/Screenshot-2023-07-18-at-11.29.14-PM_idgmhx.png", 1200, 600, "fill"),
          alt: "a man walking through an art exhibit"
        })
      })]
    }), "\n", createVNode(_components.h2, {
      id: "technical-implementation",
      children: "Technical Implementation"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Python for Data Scraping:"
      }), " Used Python’s BeautifulSoup and Selenium to extract real-time music data efficiently."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Sentiment Analysis & Color Mapping:"
      }), " Analyzed lyrics with NLTK and VADER to determine emotional tone and adjust the color palette."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Generative Visuals in Processing:"
      }), " Mapped audio channels to 3D landscapes, with peaks and valleys shifting dynamically with the music."]
    }), "\n", createVNode(_components.p, {
      children: "The project transforms music into a real-time visual experience, offering an immersive exploration of global soundscapes and reinforcing the universal power of music and its connection to place and culture."
    }), "\n", createVNode("div", {
      class: "video-container",
      children: createVNode("iframe", {
        src: "https://www.youtube.com/embed/2SqLdy0x8DA",
        frameborder: "0",
        allowfullscreen: true
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

const url = "src/content/work/sonified-topographies.mdx";
const file = "/Users/nickharb/code/projects/nh-astro/src/content/work/sonified-topographies.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/nickharb/code/projects/nh-astro/src/content/work/sonified-topographies.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
