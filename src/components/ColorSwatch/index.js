import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { colorNotes } from "../../actions/notesAction";

export default function ColorSwatch({ item, note }) {
	const dispatch = useDispatch();
	return (
		<Container className="inline-block">
			<Swatch
				style={{ backgroundColor: item }}
				className="cursor-pointer"
				onClick={() => {
					dispatch(colorNotes(note, item));
					// console.log(note);
				}}></Swatch>
		</Container>
	);
}

const Container = styled.div`
	border-radius: 50%;
	height: 24px;
	width: 24px;
	margin-right: 2px;
	margin-left: 2px;
	margin-top: 12px;
	margin-bottom: 0px;
	display: "inline-block";
	justify-content: center;
	align-items: center;
`;
const Swatch = styled.div`
	border-radius: 50%;
	border-color: gray;
	border-width: 1px;
	height: 14px;
	width: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
