import { c as create_ssr_component, g as getContext, d as subscribe, h as add_attribute, v as validate_component, f as escape, b as spread, e as escape_object, s as setContext } from "../../chunks/index2.js";
import { setInterval, clearInterval } from "worker-timers";
import Dexie from "dexie";
import { w as writable } from "../../chunks/index.js";
import { s as showingSettings } from "../../chunks/stores.js";
const formatTime = (time) => {
  const date = new Date(0);
  date.setMilliseconds(time);
  return date.toISOString().substring(14, 19);
};
const STATE_NAMES = {
  focus: "Focus",
  breakShort: "Short Break",
  breakLong: "Long Break"
};
const UNIT = 1e3;
const DEFAULT_SETTINGS = {
  time: {
    focus: 25 * UNIT * 60,
    breakShort: 5 * UNIT * 60,
    breakLong: 15 * UNIT * 60,
    rounds: 4,
    min: 2.5,
    max: 45,
    step: 2.5
  }
};
const DB_NAMES = {
  time: "settingsTime"
};
const TimerProgress_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "svg.svelte-1sdgj6q.svelte-1sdgj6q{position:absolute;inset:0;transform:rotate(270deg)}svg.svelte-1sdgj6q .total.svelte-1sdgj6q,svg.svelte-1sdgj6q .progress.svelte-1sdgj6q{fill:none;transition:all 60ms linear}svg.svelte-1sdgj6q .progress.svelte-1sdgj6q{stroke-dasharray:100 100;stroke-dashoffset:100;z-index:1;stroke-width:2.6%;stroke:#25262B}svg.svelte-1sdgj6q .total.svelte-1sdgj6q{stroke-width:1.6%}svg.svelte-1sdgj6q .total.focus.svelte-1sdgj6q{stroke:#d6336c}svg.svelte-1sdgj6q .total.break-short.svelte-1sdgj6q{stroke:#0ca678}svg.svelte-1sdgj6q .total.break-long.svelte-1sdgj6q{stroke:#1c7ed6}",
  map: null
};
const TimerProgress = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_timeTotal;
  let $$unsubscribe_time;
  let { state } = $$props;
  const { time, timeTotal } = getContext("pomo_timer");
  $$unsubscribe_time = subscribe(time, (value) => value);
  $$unsubscribe_timeTotal = subscribe(timeTotal, (value) => value);
  let progressElement;
  if ($$props.state === void 0 && $$bindings.state && state !== void 0)
    $$bindings.state(state);
  $$result.css.add(css$9);
  $$unsubscribe_timeTotal();
  $$unsubscribe_time();
  return `
<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 32 32"}" class="${"svelte-1sdgj6q"}"><circle cx="${"16"}" cy="${"16"}" r="${"15.5"}" class="${[
    "total svelte-1sdgj6q",
    (state == STATE_NAMES.focus ? "focus" : "") + " " + (state == STATE_NAMES.breakShort ? "break-short" : "") + " " + (state == STATE_NAMES.breakLong ? "break-long" : "")
  ].join(" ").trim()}"></circle><circle cx="${"16"}" cy="${"16"}" r="${"15.5"}" class="${"progress svelte-1sdgj6q"}"${add_attribute("this", progressElement, 0)}></circle></svg>

`;
});
const TimerDisplay_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: '.timer.svelte-1oqiui7.svelte-1oqiui7{height:12rem;width:12rem;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;margin:1.6em 0}.timer.svelte-1oqiui7 .round.svelte-1oqiui7,.timer.svelte-1oqiui7 .time.svelte-1oqiui7{font-family:"Inconsolata"}.timer.svelte-1oqiui7 .round.svelte-1oqiui7{color:#909296;letter-spacing:0.25px}.timer.svelte-1oqiui7 .time.svelte-1oqiui7{font-size:42px;letter-spacing:0.25px;color:#f1f3f5;line-height:calc(1em + 1ex)}.timer.svelte-1oqiui7 .text.svelte-1oqiui7{text-transform:uppercase;letter-spacing:1.25px;font-size:14px;font-weight:500}',
  map: null
};
const TimerDisplay = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $time, $$unsubscribe_time;
  let $state, $$unsubscribe_state;
  let $round, $$unsubscribe_round;
  let $rounds, $$unsubscribe_rounds;
  const { state, time, round, rounds } = getContext("pomo_timer");
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$unsubscribe_time = subscribe(time, (value) => $time = value);
  $$unsubscribe_round = subscribe(round, (value) => $round = value);
  $$unsubscribe_rounds = subscribe(rounds, (value) => $rounds = value);
  $$result.css.add(css$8);
  $$unsubscribe_time();
  $$unsubscribe_state();
  $$unsubscribe_round();
  $$unsubscribe_rounds();
  return `

<div class="${"timer svelte-1oqiui7"}">${$time >= 0 ? `${validate_component(TimerProgress, "TimerProgress").$$render($$result, { state: $state }, {}, {})}
		<div class="${"text svelte-1oqiui7"}">${escape($state)}</div>
		<div class="${"time svelte-1oqiui7"}">${escape(formatTime($time))}</div>
		<div class="${"round svelte-1oqiui7"}">${escape(`${$round} / ${$rounds}`)}</div>` : ``}</div>

`;
});
const Skip = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m6 17 8-5-8-5v10ZM18 7h-3v10h3V7Z"}" fill="${"currentColor"}"></path></svg>`;
});
const Reset = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m13.146 11.05-.174-1.992 2.374-.208a5 5 0 1 0 .82 6.173l2.002.5a7 7 0 1 1-1.315-7.996l-.245-2.803L18.6 4.55l.523 5.977-5.977.523Z"}" fill="${"currentColor"}"></path></svg>`;
});
const Button_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: 'button.svelte-bep5j3.svelte-bep5j3{font-family:"Inter";border:none;padding:0 16px;height:32px;font-weight:600;font-size:14px;letter-spacing:0.25px;border-radius:4px;line-height:1;user-select:none;cursor:pointer;transition:all 60ms linear;min-width:6rem;display:flex;align-items:center;justify-content:center}button.svelte-bep5j3.svelte-bep5j3:active{transform:translateY(1px)}button.full-width.svelte-bep5j3.svelte-bep5j3{width:100%}button.variant-default.svelte-bep5j3.svelte-bep5j3{background:#25262B;color:#A6A7AB;border:1px solid #373A40}button.variant-default.svelte-bep5j3.svelte-bep5j3:hover{background:#2a2b30}button.variant-filled.svelte-bep5j3.svelte-bep5j3{background:#5c7cfa;color:#fff}button.variant-filled.svelte-bep5j3.svelte-bep5j3:hover{background:#486cf9}button.variant-outline.svelte-bep5j3.svelte-bep5j3{background:transparent;color:#5c7cfa;border:1px solid currentColor}button.variant-outline.svelte-bep5j3.svelte-bep5j3:hover{background:rgba(92, 124, 250, 0.06)}button.svelte-bep5j3 .icon.svelte-bep5j3 svg{height:14px;width:14px;margin-right:6px;stroke-width:2;stroke:currentcolor}',
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text = "Click" } = $$props;
  let { variant = "default" } = $$props;
  let { fullWidth = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.fullWidth === void 0 && $$bindings.fullWidth && fullWidth !== void 0)
    $$bindings.fullWidth(fullWidth);
  $$result.css.add(css$7);
  return `<button class="${[
    "svelte-bep5j3",
    (fullWidth ? "full-width" : "") + " " + (variant === "default" ? "variant-default" : "") + " " + (variant === "filled" ? "variant-filled" : "") + " " + (variant === "outline" ? "variant-outline" : "")
  ].join(" ").trim()}"><div class="${"icon svelte-bep5j3"}">${slots.default ? slots.default({}) : ``}</div>
	<span>${escape(text)}</span></button>`;
});
const TimerControls_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: '.wrap.svelte-vm8khu.svelte-vm8khu{display:flex;align-items:center;justify-content:center}.wrap.svelte-vm8khu .tippy-box{background:#2C2E33;font-size:12px;font-family:"Inter";color:#f1f3f5}.wrap.svelte-vm8khu .wrap-btn.svelte-vm8khu{margin:0 1em}.wrap.svelte-vm8khu .wrap-btn.focus.svelte-vm8khu button:not(.variant-default){color:#d6336c}.wrap.svelte-vm8khu .wrap-btn.focus.svelte-vm8khu button:hover:not(.variant-default){background:rgba(214, 51, 108, 0.06)}.wrap.svelte-vm8khu .wrap-btn.break-short.svelte-vm8khu button:not(.variant-default){color:#0ca678}.wrap.svelte-vm8khu .wrap-btn.break-short.svelte-vm8khu button:hover:not(.variant-default){background:rgba(12, 166, 120, 0.06)}.wrap.svelte-vm8khu .wrap-btn.break-long.svelte-vm8khu button:not(.variant-default){color:#1c7ed6}.wrap.svelte-vm8khu .wrap-btn.break-long.svelte-vm8khu button:hover:not(.variant-default){background:rgba(28, 126, 214, 0.06)}.wrap.svelte-vm8khu .wrap-icon.svelte-vm8khu{height:2rem;width:2rem;display:flex;align-items:center;justify-content:center;border-radius:4px;border:1px solid #373A40;background:#25262B;cursor:pointer;transition:all 60ms linear}.wrap.svelte-vm8khu .wrap-icon.svelte-vm8khu:hover{background:#2a2b30}.wrap.svelte-vm8khu .wrap-icon.svelte-vm8khu:active{transform:translateY(1px)}',
  map: null
};
const TimerControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $timer, $$unsubscribe_timer;
  let $state, $$unsubscribe_state;
  const ctx = getContext("pomo_timer");
  const { timer, state } = ctx;
  $$unsubscribe_timer = subscribe(timer, (value) => $timer = value);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  $$result.css.add(css$6);
  $$unsubscribe_timer();
  $$unsubscribe_state();
  return `

<div class="${"wrap svelte-vm8khu"}"><div class="${"wrap-icon svelte-vm8khu"}" aria-hidden="${"true"}">${validate_component(Reset, "IconReset").$$render($$result, {}, {}, {})}</div>
	<div class="${[
    "wrap-btn svelte-vm8khu",
    ($state === STATE_NAMES.focus ? "focus" : "") + " " + ($state === STATE_NAMES.breakShort ? "break-short" : "") + " " + ($state === STATE_NAMES.breakLong ? "break-long" : "")
  ].join(" ").trim()}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      variant: !$timer ? "outline" : "default",
      text: !$timer ? "Start" : "Pause"
    },
    {},
    {}
  )}</div>
	<div class="${"wrap-icon svelte-vm8khu"}" aria-hidden="${"true"}">${validate_component(Skip, "IconSkip").$$render($$result, {}, {}, {})}</div></div>

${$$result.head += `<!-- HEAD_svelte-v0p9q1_START --><link rel="${"stylesheet"}" href="${"https://unpkg.com/tippy.js@6.3.2/dist/tippy.css"}"><!-- HEAD_svelte-v0p9q1_END -->`, ""}

`;
});
const db = new Dexie("dbPomo");
db.version(1).stores({
  [DB_NAMES.time]: "name, value"
});
db.on("populate", () => {
  db[DB_NAMES.time].bulkAdd([
    {
      name: STATE_NAMES.focus,
      value: DEFAULT_SETTINGS.time.focus
    },
    {
      name: STATE_NAMES.breakShort,
      value: DEFAULT_SETTINGS.time.breakShort
    },
    {
      name: STATE_NAMES.breakLong,
      value: DEFAULT_SETTINGS.time.breakLong
    },
    {
      name: "Rounds",
      value: DEFAULT_SETTINGS.time.rounds
    }
  ]);
});
const Timer_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".wrap.svelte-znu6wp{display:flex;flex-direction:column;align-items:center;justify-content:center}",
  map: null
};
const Timer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $time, $$unsubscribe_time;
  let $state, $$unsubscribe_state;
  let $rounds, $$unsubscribe_rounds;
  let $round, $$unsubscribe_round;
  let $timer, $$unsubscribe_timer;
  let $settings;
  const rounds = writable(0);
  $$unsubscribe_rounds = subscribe(rounds, (value) => $rounds = value);
  const state = writable(STATE_NAMES.focus);
  $$unsubscribe_state = subscribe(state, (value) => $state = value);
  const time = writable(0);
  $$unsubscribe_time = subscribe(time, (value) => $time = value);
  const timeTotal = writable(0);
  const timer = writable(null);
  $$unsubscribe_timer = subscribe(timer, (value) => $timer = value);
  const round = writable(1);
  $$unsubscribe_round = subscribe(round, (value) => $round = value);
  const updateTime = () => {
    time.update((time2) => $settings.find((setting) => setting.name === $state).value);
    timeTotal.update((timeTotal2) => $time);
  };
  const ctx = {
    state,
    time,
    timeTotal,
    timer,
    round,
    rounds,
    startTimer() {
      timer.update((timer2) => setInterval(everySecond, UNIT));
    },
    stopTimer() {
      clearInterval($timer);
      timer.update((timer2) => null);
    },
    resetTimer() {
      if ($timer != null) {
        this.stopTimer();
      }
      updateTime();
    },
    skipRound() {
      if ($round >= $rounds) {
        if ($state === STATE_NAMES.breakLong) {
          round.update((round2) => 1);
          state.update((state2) => STATE_NAMES.focus);
        } else {
          state.update((state2) => STATE_NAMES.breakLong);
        }
      } else {
        if ($state === STATE_NAMES.focus) {
          state.update((state2) => STATE_NAMES.breakShort);
        } else {
          state.update((state2) => STATE_NAMES.focus);
          round.update(($round2) => $round2 += 1);
        }
      }
      this.resetTimer();
    }
  };
  setContext("pomo_timer", ctx);
  const everySecond = () => {
    if ($time > 0) {
      time.update(($time2) => $time2 - UNIT);
    } else {
      ctx.skipRound();
      ctx.stopTimer();
      updateTime();
    }
  };
  $$result.css.add(css$5);
  $$unsubscribe_time();
  $$unsubscribe_state();
  $$unsubscribe_rounds();
  $$unsubscribe_round();
  $$unsubscribe_timer();
  return `

<div class="${"wrap svelte-znu6wp"}">${validate_component(TimerDisplay, "TimerDisplay").$$render($$result, {}, {}, {})}
	${validate_component(TimerControls, "TimerControls").$$render($$result, {}, {}, {})}</div>

`;
});
const InputRange_svelte_svelte_type_style_lang = "";
const SettingsTimeItem_svelte_svelte_type_style_lang = "";
const SettingsTime_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".wrap.svelte-1whksjp{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:0.38em;height:100%;width:100%}",
  map: null
};
const SettingsTime = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currTab, $$unsubscribe_currTab;
  let { tab } = $$props;
  const { currTab } = getContext("pomo_settings");
  $$unsubscribe_currTab = subscribe(currTab, (value) => $currTab = value);
  if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0)
    $$bindings.tab(tab);
  $$result.css.add(css$4);
  $$unsubscribe_currTab();
  return `

${$currTab == tab ? `<div class="${"wrap svelte-1whksjp"}">${``}</div>` : ``}

`;
});
const SettingsMenuItem_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".option.svelte-1qgq44a{display:flex;align-items:center;justify-content:center;flex-direction:column;user-select:none;transition:all 60ms linear;cursor:pointer;color:#909296}.option.svelte-1qgq44a:hover{background:#1f2023}.option.isActive.svelte-1qgq44a{color:#f1f3f5}.option.svelte-1qgq44a svg{transform:scale(0.75)}",
  map: null
};
const SettingsMenuItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currTab, $$unsubscribe_currTab;
  let { tab } = $$props;
  let { name = "Typography" } = $$props;
  const { changeTab, currTab, tippys } = getContext("pomo_settings");
  $$unsubscribe_currTab = subscribe(currTab, (value) => $currTab = value);
  if ($$props.tab === void 0 && $$bindings.tab && tab !== void 0)
    $$bindings.tab(tab);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$3);
  $$unsubscribe_currTab();
  return `

<div class="${["option svelte-1qgq44a", $currTab == tab ? "isActive" : ""].join(" ").trim()}" aria-hidden="${"true"}"><div class="${"wrap"}">${slots.default ? slots.default({}) : ``}</div></div>

${$$result.head += `<!-- HEAD_svelte-v0p9q1_START --><link rel="${"stylesheet"}" href="${"https://unpkg.com/tippy.js@6.3.2/dist/tippy.css"}"><!-- HEAD_svelte-v0p9q1_END -->`, ""}

`;
});
const Time = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M9 7h2v5h5v2H9V7Z"}" fill="${"currentColor"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"}" fill="${"currentColor"}"></path></svg>`;
});
const Settings$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M4 4h4v4H4V4ZM4 10h4v4H4v-4ZM8 16H4v4h4v-4ZM10 4h4v4h-4V4ZM14 10h-4v4h4v-4ZM10 16h4v4h-4v-4ZM20 4h-4v4h4V4ZM16 10h4v4h-4v-4ZM20 16h-4v4h4v-4Z"}" fill="${"currentColor"}"></path></svg>`;
});
const Color = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M8.203 2.004c1.261 0 2.304 1.103 2.476 2.538l8.483 8.484-7.778 7.778a3 3 0 0 1-4.243 0L2.9 16.562a3 3 0 0 1 0-4.243l2.804-2.805V4.961c0-1.633 1.12-2.957 2.5-2.957Zm.5 2.957v1.553l-1 1V4.961c0-.327.224-.591.5-.591.277 0 .5.264.5.591Zm0 5.914V9.342l-4.39 4.391a1 1 0 0 0 0 1.414l4.243 4.243a1 1 0 0 0 1.414 0l6.364-6.364-5.63-5.63v3.48l-.003.128h-2.01a.698.698 0 0 0 .012-.129Z"}" fill="${"currentColor"}"></path><path d="${"M16.859 16.875a3 3 0 1 0 4.242 0l-2.121-2.121-2.121 2.12Z"}" fill="${"currentColor"}"></path></svg>`;
});
const Info = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { width: "24" },
      { height: "24" },
      { fill: "none" },
      { xmlns: "http://www.w3.org/2000/svg" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M11 10.98a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0v-6ZM12 6.051a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}" fill="${"currentColor"}"></path><path fill-rule="${"evenodd"}" clip-rule="${"evenodd"}" d="${"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2ZM4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0Z"}" fill="${"currentColor"}"></path></svg>`;
});
const SettingsMenu_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".menu.svelte-t2xi3{position:absolute;bottom:0;left:0;right:0;display:grid;grid-auto-columns:1fr;grid-auto-flow:column;height:2rem;width:100%;border-top:1px solid #25262B}",
  map: null
};
const SettingsMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `
<div class="${"menu svelte-t2xi3"}">${validate_component(SettingsMenuItem, "SettingsMenuItem").$$render($$result, { tab: 0, name: "Time" }, {}, {
    default: () => {
      return `${validate_component(Time, "IconTime").$$render($$result, {}, {}, {})}`;
    }
  })}
	${validate_component(SettingsMenuItem, "SettingsMenuItem").$$render($$result, { tab: 1, name: "Settings" }, {}, {
    default: () => {
      return `${validate_component(Settings$1, "IconSettings").$$render($$result, {}, {}, {})}`;
    }
  })}
	${validate_component(SettingsMenuItem, "SettingsMenuItem").$$render($$result, { tab: 2, name: "Themes" }, {}, {
    default: () => {
      return `${validate_component(Color, "IconColor").$$render($$result, {}, {}, {})}`;
    }
  })}
	${validate_component(SettingsMenuItem, "SettingsMenuItem").$$render($$result, { tab: 3, name: "About" }, {}, {
    default: () => {
      return `${validate_component(Info, "IconInfo").$$render($$result, {}, {}, {})}`;
    }
  })}</div>

`;
});
const Settings_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".settings.svelte-sysjy8.svelte-sysjy8{position:relative;width:100%;height:100%}.settings.svelte-sysjy8 .tabs.svelte-sysjy8{height:100%;padding-bottom:2rem}",
  map: null
};
const Settings = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_tippys;
  const currTab = writable(0);
  const tippys = writable([]);
  $$unsubscribe_tippys = subscribe(tippys, (value) => value);
  setContext("pomo_settings", {
    currTab,
    tippys,
    changeTab: (tab) => currTab.update((x) => tab)
  });
  $$result.css.add(css$1);
  $$unsubscribe_tippys();
  return `

<div class="${"settings svelte-sysjy8"}"><div class="${"tabs svelte-sysjy8"}">${validate_component(SettingsTime, "SettingsTime").$$render($$result, { slot: "setting", tab: 0 }, {}, {})}</div>
	${validate_component(SettingsMenu, "SettingsMenu").$$render($$result, {}, {}, {})}</div>

`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1v92ok3{height:100%;width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $showingSettings, $$unsubscribe_showingSettings;
  $$unsubscribe_showingSettings = subscribe(showingSettings, (value) => $showingSettings = value);
  $$result.css.add(css);
  $$unsubscribe_showingSettings();
  return `

<div ${$showingSettings ? "hidden" : ""} class="${"svelte-1v92ok3"}">${validate_component(Timer, "Timer").$$render($$result, {}, {}, {})}</div>
<div ${!$showingSettings ? "hidden" : ""} class="${"svelte-1v92ok3"}">${validate_component(Settings, "Settings").$$render($$result, {}, {}, {})}</div>

`;
});
export {
  Page as default
};
