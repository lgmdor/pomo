import { c as create_ssr_component, b as spread, e as escape_object, d as subscribe, v as validate_component } from "../../chunks/index2.js";
import { s as showingSettings } from "../../chunks/stores.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM2 12.032a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM3 17.064a1 1 0 1 0 0 2h18a1 1 0 0 0 0-2H3Z"}" fill="${"currentColor"}"></path></svg>`;
});
const Arrow_left = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M20.328 11v2H7.5l3.243 3.243-1.415 1.414L3.672 12l5.656-5.657 1.415 1.414L7.5 11h12.828Z"}" fill="${"currentColor"}"></path></svg>`;
});
const PomoHeader_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-hcv7s8{padding:0.6em;display:flex;justify-content:flex-start;width:100%;border-bottom:1px solid #25262B}header.svelte-hcv7s8 svg{cursor:pointer;border-radius:4px;transition:all 60ms linear;color:#909296}header.svelte-hcv7s8 svg:hover{color:#f1f3f5}",
  map: null
};
const PomoHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showingSettings, $$unsubscribe_showingSettings;
  $$unsubscribe_showingSettings = subscribe(showingSettings, (value) => $showingSettings = value);
  $$result.css.add(css$1);
  $$unsubscribe_showingSettings();
  return `

<header class="${"svelte-hcv7s8"}">${!$showingSettings ? `<div class="${"wrap"}" aria-hidden="${"true"}">${validate_component(Menu, "IconMenu").$$render($$result, {}, {}, {})}</div>` : `<div class="${"wrap"}" aria-hidden="${"true"}">${validate_component(Arrow_left, "IconArrowLeft").$$render($$result, {}, {}, {})}</div>`}
	</header>

`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: '*{margin:0;padding:0;box-sizing:border-box}body{display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:"Inter";background:#141517;color:#adb5bd;height:100vh}body .tippy-box{background:#2C2E33;font-size:12px;font-family:"Inter";color:#f1f3f5}svg{display:block;user-select:none;transition:color 60ms linear}.wrap.svelte-1ml20ie{position:relative;width:20rem;height:24rem;display:flex;align-items:center;flex-direction:column;background:#1A1B1E;border-radius:4px;overflow:hidden;border:1px solid #25262B}',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrap svelte-1ml20ie"}">${validate_component(PomoHeader, "PomoHeader").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
