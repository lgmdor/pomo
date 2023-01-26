export const formatTime = (time) => {
	const date = new Date(0);

	date.setMilliseconds(time);

	return date.toISOString().substring(14, 19);
};

export const NAMES = {
	states: {
		focus: "Focus",
		breakShort: "Short Break",
		breakLong: "Long Break"
	},
	dbs: {
		time: "settingsTime",
		general: "settingsGeneral"
	},
	settings: {
		rounds: "Rounds",
		playSounds: "Play sounds",
		autoStart: "Start timers automatically"
	}
};

export const UNIT = 1000;

export const DEFAULT_SETTINGS = {
	time: {
		focus: 0.1 * UNIT * 60,
		breakShort: 5 * UNIT * 60,
		breakLong: 15 * UNIT * 60,
		rounds: 4,
		min: 2.5,
		max: 45,
		step: 2.5
	},
	general: {
		playSounds: true,
		autoStart: false
	}
};
