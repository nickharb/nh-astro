import { c as createComponent, d as createAstro, e as addAttribute, f as renderHead, b as renderSlot, a as renderTemplate } from './astro/server_C0Oazwys.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Default = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Default;
  const navItems = [
    {
      path: "/work",
      label: "Work",
      rel: "work"
    },
    // {
    //   path: "/blog",
    //   label: "Blog",
    //   rel: "blog",
    // },
    {
      path: "/about",
      label: "About",
      rel: "about"
    },
    {
      path: "/resume",
      label: "CV",
      rel: "resume"
    }
  ];
  return renderTemplate`<html lang="en" data-astro-cid-5z7xtygo> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap" rel="stylesheet"><link rel="stylesheet" href="/src/styles/variables.css"><link rel="stylesheet" href="/src/styles/reset.css"><link rel="stylesheet" href="/src/styles/core.css"><link rel="stylesheet" href="/src/styles/typography.css"><link rel="stylesheet" href="/src/styles/content.css"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Nick Harbaugh</title>${renderHead()}</head> <body data-astro-cid-5z7xtygo> <header class="site-header" data-astro-cid-5z7xtygo> <a href="/" rel="home" class="logo" data-astro-cid-5z7xtygo> <img src="/src/assets/site/nh-logo-sm.png" alt="A pixellated eclipse" data-astro-cid-5z7xtygo> <span data-astro-cid-5z7xtygo>Nick Harbaugh</span> </a> <nav class="main-nav" data-astro-cid-5z7xtygo> <ul data-astro-cid-5z7xtygo> ${navItems.map((item) => {
    return renderTemplate`<li data-astro-cid-5z7xtygo><a${addAttribute(item.path, "href")}${addAttribute(item.rel, "rel")} data-astro-cid-5z7xtygo>${item.label}</a></li>`;
  })} </ul> </nav> </header> <main class="container" data-astro-cid-5z7xtygo> ${renderSlot($$result, $$slots["default"])} </main> <footer class="site-footer" data-astro-cid-5z7xtygo> <hr data-astro-cid-5z7xtygo> <p data-astro-cid-5z7xtygo>
Copyright © ${(/* @__PURE__ */ new Date()).getFullYear()} Nick Harbaugh<span data-astro-cid-5z7xtygo>&nbsp;| All Rights Reserved</span> </p> <p data-astro-cid-5z7xtygo>📧 <a href="mailto:njharb@gmail.com" data-astro-cid-5z7xtygo>njharb@gmail.com</a></p> </footer> </body></html>`;
}, "/Users/nickharb/code/projects/nh-astro/src/layouts/default.astro", void 0);

export { $$Default as $ };
