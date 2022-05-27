import React, { useState } from "react";
import { Modal, Frame } from "@react95/core";
import { FileText } from "@react95/icons";
import { Icon, Text } from "../Desktop";
import styled from "styled-components";

const Body = styled.div`
	height: 100%;
	margin: 1rem;
`;

const Title = styled.h1`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	margin-top: 1rem;
	font-size: 2rem;
`;

const Link = styled.a`
	font-size: 1.5rem;
	color: black;
	&:visited {
		color: black;
	}
`;

export default function Resume() {
	const [showModal, toggleShowModal] = useState(false);
	const handleOpenModal = () => toggleShowModal(true);
	const handleCloseModal = () => toggleShowModal(false);
	return (
		<>
			<Icon onDoubleClick={handleOpenModal}>
				<FileText variant="32x32_4" />
				<Text>Resume</Text>
			</Icon>
			{showModal && (
				<Modal
					width={600}
					height="100%"
					icon={<FileText variant="32x32_4" />}
					title="Resume"
					defaultPosition={{
						x: window.innerWidth / 2 - 250,
						y: window.innerHeight / 2 - 450,
					}}
					closeModal={handleCloseModal}
				>
					<Frame width="100%" height="100%" padding="0px 5px">
						<Body>
							<Title>Experience</Title>
							<hr />
							<h1>Dathic</h1>
							<h3>Software Engineer Intern</h3>
							<ul>
								<li>
									Collaborated with product management to define and implement
									innovative solutions for the product direction, visuals and
									experience.
								</li>
								<li>
									ptimized React components for maximum performance across a
									vast array of web-capable devices and browsers.
								</li>
								<li>
									Designed a modern highly responsive web-based user interface
								</li>
								<li>Technologies: React, Redux, React-Vis, Mapbox, Figma</li>
							</ul>

							<h1>WorkoutBoost</h1>
							<h3>Freelance Software Engineer</h3>
							<ul>
								<li>
									Built out key components improving user experience, such as
									user chat, user search, and code optimization for faster load
									times. Assisted in bringing the web version to mobile.
								</li>
								<li>
									Worked mainly Javascript, using React as the frontend library,
									and firebase for database, and backend management
								</li>
								<li>
									Technologies: React, Firebase, Google Cloud, Javascript, Css,
									React Native
								</li>
							</ul>
							<hr />
							<Title>Education</Title>
							<h4>Fullstack Academy</h4>
							<p style={{ textIndent: "10px" }}>
								A 17-week immersive web development bootcamp specializing in the
								NERD stack
							</p>
						</Body>
					</Frame>
				</Modal>
			)}
		</>
	);
}
