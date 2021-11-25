import React, { useState } from "react";
import styled from "styled-components";
import ColorSwatch from "../ColorSwatch";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { deleteNotes } from "../../actions/notesAction";

function Card({ note }) {
	const dispatch = useDispatch();

	const [modal, setmodal] = useState(false);
	const colorPalette = ["#F9FAFB", "#C4B5FD", "#93C5FD", "#FDE68A", "#F9A8D4"];
	return (
		<div
			className={`max-w-sm rounded overflow-hidden shadow-xl shadow-outline `}
			style={{ backgroundColor: `${note.bgcolor}` }}>
			<div className="px-4 py-4">
				<div className="flex w-full justify-between">
					<div className="font-normal text-l mb-2 ml-0 font-medium">
						{note.title}
					</div>
					<OutsideClickHandler
						onOutsideClick={() => {
							setmodal(false);
						}}>
						<div
							className="text-gray-500"
							onClick={() => {
								setmodal(!modal);
							}}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-6 cursor-pointer"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
								/>
							</svg>

							{modal && (
								<StyledMenu>
									<div className="px-2">
										<div>Change Background</div>

										{colorPalette.map((item, index) => (
											<ColorSwatch item={item} key={index} note={note} />
										))}
										<hr></hr>
										<div
											className="cursor-pointer hover:underline"
											onClick={() => {
												dispatch(deleteNotes(note));
											}}>
											Delete
										</div>
									</div>
								</StyledMenu>
							)}
						</div>
					</OutsideClickHandler>
				</div>
				{note.lists.map((item, index) => (
					<p className="text-gray-700 text-left" key={index}>
						{item}
					</p>
				))}
			</div>
		</div>
	);
}
const StyledMenu = styled.div`
	position: absolute;
	z-index: 500;
	width: 175px;
	height: auto;
	padding: 8px;
	padding-right: 0;
	/* left: -1000; */
	background: #ffffff;
	box-shadow: 0px 4px 16px rgba(226, 225, 234, 0.8);
	border-radius: 4px;
	padding-left: 0px;

	hr {
		margin: 8px 0;
	}

	.menu-item {
		display: flex;
		align-items: center;
		padding: 5px 8px;
		/* margin-bottom: 16px; */

		&:hover {
			background: ${({ theme }) => theme?.colors?.neutral?.light?.secondary};
		}
	}
`;
export default Card;
