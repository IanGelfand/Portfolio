import React, { useState } from 'react'
import { Modal, Frame } from '@react95/core'
import { Access227 } from '@react95/icons'
import { Icon, Text } from '../Desktop'
import styled from 'styled-components'

const Body = styled.div`
  height: 100%;
  margin: 1rem;
  font-size: 1rem;
`

export default function About() {
  const [showModal, toggleShowModal] = useState(false)
  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  return (
    <>
      <Icon onDoubleClick={handleOpenModal}>
        <Access227
          variant="32x32_4"
        />
        <Text>
          About 
        </Text> 
      </Icon>
      {showModal && (
        <Modal
        width={600}
        height="100%"
        icon={<Access227 variant="32x32_4" />}
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
              <p>
                Resourceful, energetic and innovative Fullstack Web developer with extensive expertise in JavaScript, React, Express, Nodejs, PostgreSQL and Agile methodologies. Skilled in conceptualizing, designing development and deploying software, containing logical solutions to business problems. Demonstrated communication and relationship building skills to achieve company's goals and targets. Strong work ethic and commitment for compliance with professional codes, regulations and company's policies.
              </p>
            </Body>
          </Frame>
        </Modal>
      )}
    </>
  )
}
