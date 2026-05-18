import { c as createComponent } from './astro-component_DMqWBObH.mjs';
import 'piccolore';
import { b as renderTemplate, r as renderHead } from './entrypoint_D3Dmxail.mjs';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Newsletter = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-og54zrcn> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Newsletter</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">', '</head> <body data-astro-cid-og54zrcn> <section class="newsletter-section" data-astro-cid-og54zrcn> <div class="newsletter-card" data-astro-cid-og54zrcn> <h1 data-astro-cid-og54zrcn>\nJoin the Newsletter\n</h1> <p class="newsletter-description" data-astro-cid-og54zrcn>\nLearn about AI tools, automation, online business, and modern ways to build useful digital products and internet businesses today.\n</p> <form id="newsletter-form" class="newsletter-form" data-astro-cid-og54zrcn> <input type="email" id="email" placeholder="Email Address" required data-astro-cid-og54zrcn> <button type="submit" data-astro-cid-og54zrcn>\nSubscribe\n</button> </form> <p class="newsletter-footer" data-astro-cid-og54zrcn>\nOne email per week. No spam.\n          Unsubscribe anytime.\n</p> </div> </section> <script>\n      const form =\n        document.getElementById(\n          "newsletter-form"\n        );\n\n      const emailInput =\n        document.getElementById(\n          "email"\n        );\n\n      const button =\n        form.querySelector(\n          "button"\n        );\n\n      form.addEventListener(\n        "submit",\n        async (e) => {\n          e.preventDefault();\n\n          button.disabled = true;\n\n          button.innerText =\n            "Loading...";\n\n          try {\n            const response =\n              await fetch(\n                "/api/subscribe",\n                {\n                  method: "POST",\n                  headers: {\n                    "Content-Type":\n                      "application/json",\n                  },\n                  body: JSON.stringify(\n                    {\n                      email:\n                        emailInput.value,\n                    }\n                  ),\n                }\n              );\n\n            const data =\n              await response.json();\n\n            if (data.success) {\n              button.innerText =\n                "Subscribed";\n\n              form.reset();\n            } else {\n              button.innerText =\n                "Error";\n            }\n          } catch (error) {\n            button.innerText =\n              "Error";\n          }\n\n          setTimeout(() => {\n            button.disabled = false;\n\n            button.innerText =\n              "Subscribe";\n          }, 2500);\n        }\n      );\n    <\/script> </body> </html>'])), renderHead());
}, "/Users/sameer/Developer/sameer-rahman/src/pages/newsletter.astro", void 0);

const $$file = "/Users/sameer/Developer/sameer-rahman/src/pages/newsletter.astro";
const $$url = "/newsletter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Newsletter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
