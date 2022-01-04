import React, { useState } from 'react'
import { Modal, Frame } from '@react95/core'
import { Folder } from '@react95/icons'
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
  margin-top: 2rem;
  font-size: 2rem;
`

const Link = styled.a`
  font-size: 1.5rem;
  color: black;
  &:visited {
    color: black;
  }
`

export default function Projects() {
  const [showModal, toggleShowModal] = useState(false)
  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  return (
    <>
    <Icon onDoubleClick={handleOpenModal}>
      <Folder
        variant="32x32_4"
      />
      <Text>
        Projects
      </Text>
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
        <Frame 
          width="100%"
          height="100%"
          padding="0px 5px"
        >
          <Body>
            <Title>Projects</Title>
            <Link href="https://github.com/IanGelfand/Profinance" target="_blank" rel="noopener noreferrer">
              Profinance
            </Link>
            <ul>
              <li>
                A financial application that allows users to log into their bank account and view their finances
              </li>
              <li>
                Displays user transactions allowing them to be sorted by account.
              </li>
              <li>
                Technologies: React, Redux, Express, Nodejs, and MongoDB.
              </li>
            </ul>
            <hr />
            <Link href="https://github.com/IanGelfand/Shops" target="_blank" rel="noopener noreferrer">
              Shops
            </Link>
            <ul>
              <li>
                Uses Remix a React framework based on server side rendering with integrated routing.
              </li>
              <li>
                Allows users to browse and shop through products and add them to their cart. Users can also register and login to their accounts to checkout and purchase products.
              </li>
              <li>
                Features an admin page where the admin is able to add, edit, and delete products.
              </li>
              <li>
                Technologies: Remix, Prisma, PostgreSQL.
              </li>
            </ul>
            <hr />
            <Link href="https://github.com/IanGelfand/pog-hackathon" 
              target="_blank" rel="noopener noreferrer">
              Pog-Hackathon
            </Link>
            <ul>
              <li>
                A web application developed during a 48-hour hackathon.
              </li>
              <li>
                Users are able to chat with other users on the platform, as well as play trivia to earn coins and use
                them in the chat to play games.
              </li>
              <li>
                The chat also features a bot with commands where users can play games and see outcomes of
                other users as well.
              </li>
              <li>
                Technologies: React, Firebase, OpenTDB.
              </li>
            </ul>
          </Body>
        </Frame>
      </Modal>
    )}
  </>
  )
}
