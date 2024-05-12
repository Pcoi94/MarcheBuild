/* empty css                           */import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, s as spreadAttributes, h as renderSlot, i as renderComponent } from '../astro_d2281fd3.mjs';
import 'clsx';
import { a as $$Container, $ as $$Layout } from './404_ce96dbec.mjs';
import { $ as $$Icon } from './contact_87c5e6ae.mjs';
import { a as $$Picture } from './about_3682faa7.mjs';

const $$Astro$4 = createAstro("https://astroship.web3templates.com");
const $$Link = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const {
    href,
    block,
    size = "lg",
    style = "primary",
    class: className,
    ...rest
  } = Astro2.props;
  const sizes = {
    lg: "px-5 py-2.5",
    md: "px-4 py-2"
  };
  const styles = {
    outline: "bg-white border-2 border-black hover:bg-gray-100 text-black ",
    primary: "bg-black text-white hover:bg-gray-800  border-2 border-transparent",
    inverted: "bg-white text-black   border-2 border-transparent",
    muted: "bg-gray-100 hover:bg-gray-200   border-2 border-transparent"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${spreadAttributes(rest)}${addAttribute([
    "rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-gray-200",
    block && "w-full",
    sizes[size],
    styles[style],
    className
  ], "class:list")}>${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/carra/Desktop/Astro/MarcheBuild/src/components/ui/link.astro", void 0);

const $$Astro$3 = createAstro("https://astroship.web3templates.com");
const $$Cta = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Cta;
  return renderTemplate`${maybeRenderHead()}<div class="bg-black p-8 md:px-20 md:py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center"> <h2 class="text-white text-4xl md:text-6xl tracking-tight">
Rejoint Marché Build !
</h2> <p class="text-slate-400 mt-4 text-lg md:text-xl">
Rejoint le serveur qui t'aideras à créer ton futur jeu.
</p> <div class="flex mt-5"> ${renderComponent($$result, "Link", $$Link, { "href": "https://dsc.gg/marche-build", "target": "_blank", "style": "inverted" }, { "default": ($$result2) => renderTemplate`Get Started` })} </div> </div>`;
}, "C:/Users/carra/Desktop/Astro/MarcheBuild/src/components/cta.astro", void 0);

const $$Astro$2 = createAstro("https://astroship.web3templates.com");
const $$Features = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Features;
  const features = [
    {
      title: "Devient Vendeur",
      description: "Vends des produits que tu choisis et gagne des robuxs",
      icon: "bx:bxs-briefcase"
    },
    {
      title: "Des commissions",
      description: "Tu peux trouver des personnes qui de font ce que tu as besoin.",
      icon: "bx:bxs-data"
    },
    {
      title: "Automatis\xE9",
      description: "Un jeu est a la disposition des vendeurs pour directement achet\xE9 le produit.",
      icon: "bx:bxs-bot"
    },
    {
      title: "Plein d'Article",
      description: "Plein d'article a ta disposition dans des cat\xE9gories !",
      icon: "bx:bxs-file-find"
    },
    {
      title: "Communaut\xE9",
      description: "Une communaut\xE9 toujours plus innovante.",
      icon: "bx:bxs-user"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 md:mt-0" id="features"> <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
Marché Build te permettra de créer ton jeu de rêve !
</h2> <p class="text-lg mt-4 text-slate-600">
Marché Build vend beaucoup de produits qui te seront pratiquent.
</p> </div> <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16"> ${features.map((item) => renderTemplate`<div class="flex gap-4 items-start"> <div class="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0"> ${renderComponent($$result, "Icon", $$Icon, { "class": "text-white", "name": item.icon })} </div> <div> <h3 class="font-semibold text-lg">${item.title}</h3>${" "} <p class="text-slate-500 mt-2 leading-relaxed">${item.description}</p> </div> </div>`)} </div>`;
}, "C:/Users/carra/Desktop/Astro/MarcheBuild/src/components/features.astro", void 0);

const heroImage = new Proxy({"src":"/_astro/hero.777cd7fc.png","width":1024,"height":1024,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://astroship.web3templates.com");
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24"> <div class="py-6 md:order-1 hidden md:block"> ${renderComponent($$result, "Picture", $$Picture, { "src": heroImage, "alt": "March\xE9 Build", "width": "340", "height": "340", "sizes": "(max-width: 500px) 100vw, 400px", "loading": "eager", "format": "avif" })} </div> <div> <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
Marché Build
</h1> <p class="text-lg mt-4 text-slate-600 max-w-xl">
Depuis octobre 2020, Marché Build de France a su attirer l'attention de 1700+ membres avides de découvrir ses offres uniques.
</p> <div class="mt-6 flex flex-col sm:flex-row gap-3"> ${renderComponent($$result, "Link", $$Link, { "href": "https://dsc.gg/marche-build", "target": "_blank", "class": "flex gap-1 items-center justify-center", "rel": "noopener" }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"> <path fill="white" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12"></path> </svg>
Rejoindre la Communauté
` })} ${renderComponent($$result, "Link", $$Link, { "size": "lg", "style": "outline", "rel": "noopener", "href": "#features", "target": "_self", "class": "flex gap-1 items-center justify-center" }, { "default": ($$result2) => renderTemplate`
En savoir plus
` })} </div> </div> </main>`;
}, "C:/Users/carra/Desktop/Astro/MarcheBuild/src/components/hero.astro", void 0);

const $$Astro = createAstro("https://astroship.web3templates.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Features", $$Features, {})} ${renderComponent($$result3, "Cta", $$Cta, {})} ` })} ` })}`;
}, "C:/Users/carra/Desktop/Astro/MarcheBuild/src/pages/index.astro", void 0);

const $$file = "C:/Users/carra/Desktop/Astro/MarcheBuild/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Link as $, index as i };
