import React, { useState } from 'react'
import { Modal, Frame } from '@react95/core'
import { Computer } from '@react95/icons'
import { Icon, Text } from '../Desktop'
import styled from 'styled-components'

const Body = styled.div`
  height: 100%;
  margin: 1rem;
`
export default function Skills() {
  const [showModal, toggleShowModal] = useState(false)
  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  return (
    <>
      <Icon onDoubleClick={handleOpenModal}>
        <Computer
          variant="32x32_4"
        />
        <Text>
          Skills 
        </Text> 
      </Icon>
      {showModal && (
        <Modal
        width={600}
        height="100%"
        icon={<Computer variant="32x32_4" />}
        title="Skills"
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
              <h3>Frontend: <span style={{fontWeight: "normal"}}>React, Remix, Redux, React Native, Html, Css, Tailwindcss</span></h3>
              <h3>Backend: <span style={{fontWeight: "normal"}}>Nodejs, Express, Mongoose, Sequelize</span></h3>
              <h3>Database: <span style={{fontWeight: "normal"}}>Postgres, MongoDB, Prisma, Firebase</span></h3>
              <h3>Other: <span style={{fontWeight: "normal"}}>Jest, Mocha, Chai, Npm, Git, Heroku, Netlify</span></h3>
              <h3>Languages: <span style={{fontWeight: "normal"}}>Javascript, Typescript</span></h3>
            </Body>
          </Frame>
        </Modal>
      )}
    </>
  )
}
