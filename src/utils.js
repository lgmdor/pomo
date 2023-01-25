export const formatTime = (time) => {
	const date = new Date(0);

	date.setMilliseconds(time);

	return date.toISOString().substring(14, 19);
};

export const STATE_NAMES = {
	focus: "Focus",
	breakShort: "Short Break",
	breakLong: "Long Break"
};

export const UNIT = 1000;

export const DEFAULT_SETTINGS = {
	time: {
		focus: 0.1 * UNIT * 60,
		breakShort: 0.1 * UNIT * 60,
		breakLong: 0.1 * UNIT * 60,
		rounds: 4,
		min: 2.5,
		max: 45,
		step: 2.5
	}
};

export const DB_NAMES = {
	time: "settingsTime"
};
