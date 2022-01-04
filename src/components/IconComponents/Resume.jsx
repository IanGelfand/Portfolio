import React, { useState } from 'react'
import { Modal, Frame } from '@react95/core'
import { FileText } from '@react95/icons'
import { Icon, Text } from '../Desktop'
import styled from 'styled-components'

const Body = styled.div`
  height: 100%;
  margin: 1rem;
`

const Title = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 1rem;
  font-size: 2rem;
`

const Link = styled.a`
  font-size: 1.5rem;
  color: black;
  &:visited {
    color: black;
  }
`

export default function Resume() {
  const [showModal, toggleShowModal] = useState(false)
  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  return (
    <>
      <Icon onDoubleClick={handleOpenModal}>
        <FileText
          variant="32x32_4"
        />
        <Text>
          Resume 
        </Text> 
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
          <Frame 
            width="100%"
            height="100%"
            padding="0px 5px"
          >
            <Body>
              <Title>Experience</Title>
              <hr />
              <Link>WorkoutBoost</Link>
              <h4>Freelance Web Developer</h4>
              <ul>
                <li>
                Built key features for users to use such as post management, user search, and code optimization.
                </li>
                <li>
                  Designed, implemented and monitored web pages, plugins and functionality for continuous
                  improvement.
                </li>
                <li>
                  Conducted testing and review of website design for responsiveness, clarity and effectiveness.
                </li>
              </ul>
              <hr />
              <Title>Education</Title>
              <h4>Fullstack Academy</h4>
              <p style={{textIndent: "10px"}}>
                A 17-week immersive web development bootcamp specializing in the NERD stack
              </p>
            </Body>
          </Frame>
        </Modal>
      )}
    </>
  )
}
