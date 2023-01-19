import Dexie from "dexie";
import { STATE_NAMES, DEFAULT_SETTINGS, DB_NAMES } from "$src/utils.js";

export const db = new Dexie("dbPomo");

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
