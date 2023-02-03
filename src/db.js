import Dexie from "dexie";
import { DEFAULT_SETTINGS, NAMES } from "$src/utils.js";

export const db = new Dexie("dbPomo");

db.version(1).stores({
	[NAMES.dbs.time]: "name, value",
	[NAMES.dbs.general]: "name, value"
});

db.on("populate", () => {
	db[NAMES.dbs.time].bulkAdd([
		{
			name: NAMES.states.focus,
			value: DEFAULT_SETTINGS.time.focus
		},
		{
			name: NAMES.states.breakShort,
			value: DEFAULT_SETTINGS.time.breakShort
		},
		{
			name: NAMES.states.breakLong,
			value: DEFAULT_SETTINGS.time.breakLong
		},
		{
			name: NAMES.settings.rounds,
			value: DEFAULT_SETTINGS.time.rounds
		}
	]);

	db[NAMES.dbs.general].bulkAdd([
		{
			name: NAMES.settings.playSounds,
			value: DEFAULT_SETTINGS.general.playSounds
		},
		{
			name: NAMES.settings.autoStart,
			value: DEFAULT_SETTINGS.general.autoStart
		},
		{
			name: NAMES.settings.volume,
			value: DEFAULT_SETTINGS.general.volume
		}
	]);
});
