import { ActionTypes } from "../constants/index";

export const deleteNotes = (note) => {
	return {
		type: ActionTypes.DELETE_NOTES,
		payload: note,
	};
};

export const addNotes = (note) => {
	return {
		type: ActionTypes.ADD_NOTES,
		payload: note,
	};
};
export const colorNotes = (note, color) => {
	return {
		type: ActionTypes.COLOR_NOTES,
		payload: { note, color },
	};
};
