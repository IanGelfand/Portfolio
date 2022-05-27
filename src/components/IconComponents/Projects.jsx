import React, { useState } from "react";
import { Modal, Frame } from "@react95/core";
import { Folder } from "@react95/icons";
import { Icon, Text } from "../Desktop";
import styled from "styled-components";

const Body = styled.div`
	height: 100%;
	margin: 1rem;
`;

const Title = styled.h1`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	margin-top: 2rem;
	font-size: 2rem;
`;

const Link = styled.a`
	font-size: 1.5rem;
	color: black;
	&:visited {
		color: black;
	}
`;

export default function Projects() {
	const [showModal, toggleShowModal] = useState(false);
	const handleOpenModal = () => toggleShowModal(true);
	const handleCloseModal = () => toggleShowModal(false);
	return (
		<>
			<Icon onDoubleClick={handleOpenModal}>
				<Folder variant="32x32_4" />
				<Text>Projects</Text>
			</Icon>
			{showModal && (
				<Modal
					width={600}
					height="100%"
					icon={<Folder variant="32x32_4" />}
					title="Projects"
					defaultPosition={{
						x: window.innerWidth / 2 - 250,
						y: window.innerHeight / 2 - 450,
					}}
					closeModal={handleCloseModal}
				>
					<Frame width="100%" height="100%" padding="0px 5px">
						<Body>
							<Title>Projects</Title>
							<Link
								href="https://gist.github.com/IanGelfand/e8dae1ec4d8622a2c794da10f5ee31bd"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dathic
							</Link>
							<ul>
								<li>
									Create initial concepts and wireframes in Figma to create a
									new, modern, and user friendly user interface for data
									visualization.
								</li>
								<li>
									Develop wireframes and prototypes around customer needs.
								</li>
								<li>
									Define the right interaction model and evaluate its success
								</li>
							</ul>
							<hr />
							<Link
								href="https://github.com/IanGelfand/Profinance"
								target="_blank"
								rel="noopener noreferrer"
							>
								Profinance
							</Link>
							<ul>
								<li>
									The goal of Profinance was to explore the Plaid api so that
									users would be able to log into their banks and explore their
									data through visualizations.
								</li>
								<li>
									User data is dynamically displayed through graphs, charts, and
									tables where they can view their current balances, and
									transactions.
								</li>
								<li>
									Users can also sort through their transactions by account and
									category.
								</li>
							</ul>
							<hr />
							<Link
								href="https://github.com/IanGelfand/Spacetagram"
								target="_blank"
								rel="noopener noreferrer"
							>
								Spacetagram
							</Link>
							<ul>
								<li>
									Uses NASA's astronomy picture of the day api, using React, to
									display the most recent release from NASA. Users are able to
									scroll through the picture and like them.
								</li>
								<li>
									Uses local storage to save liked photos to the browser so if a
									user closes the page the liked photos are saved for later.
								</li>
							</ul>
						</Body>
					</Frame>
				</Modal>
			)}
		</>
	);
}
