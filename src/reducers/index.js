import { combineReducers } from "redux";
import { NotesReducer } from "./notesReducer";

const reducers = combineReducers({
	notesData: NotesReducer,
});

export default reducers;
