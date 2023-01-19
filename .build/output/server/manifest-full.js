export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","icons/add.svg","icons/alert.svg","icons/arrow_left.svg","icons/bookmark.svg","icons/cancel.svg","icons/checkmark.svg","icons/color.svg","icons/dots.svg","icons/info.svg","icons/load.svg","icons/menu.svg","icons/notification.svg","icons/pause.svg","icons/play.svg","icons/reset.svg","icons/search.svg","icons/settings.svg","icons/skip.svg","icons/time.svg","icons/volume.svg","logo.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-0e787219.js","imports":["_app/immutable/start-0e787219.js","_app/immutable/chunks/index-74f31064.js","_app/immutable/chunks/singletons-9dac55dc.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
