import cryptoRandomString from "crypto-random-string";
import { ActionTypes } from "../constants";

const initialState = [
	{
		title: "Grossery lists",
		id: "kjfhri",
		bgcolor: "#C4B5FD",
		lists: [
			"Rice - 1kg",
			"Sugar - 500gm",
			"Vegitables - 500gm",
			"Cooking oil - 1L",
		],
	},
	{
		title: "To Learn",
		id: "rherh",
		bgcolor: "#FFFFFF",
		lists: ["HTML", "CSS", "JavaScript", "React"],
	},
	{
		title: "Pending",
		id: "rherhghh",
		bgcolor: "#FEF3C7",
		lists: ["Change color", "Create list", "refetch", "display"],
	},
];

export const NotesReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.DELETE_NOTES:
			console.log(type, payload);
			console.log("delete note");
			const newState = state.filter((item) => item.id !== payload.id);
			return [...newState];
		case ActionTypes.ADD_NOTES:
			console.log(type, payload);
			let newnote = {
				title: payload.title,
				id: cryptoRandomString({ length: 10 }),
				bgcolor: "#FFFFFF",
				lists: payload.note.split(","),
			};
			console.log("add note", newnote);
			state.push(newnote);
			return [...state];
		case ActionTypes.COLOR_NOTES:
			console.log(type, payload);
			let temp = [...state];
			const updatedState = temp.map((item) => {
				if (item.id === payload.note.id) {
					item.bgcolor = payload.color;
				}
				return item;
			});
			return [...updatedState];
		default:
			return state;
	}
};
