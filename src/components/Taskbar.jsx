import React, { useState } from 'react'
import { TaskBar, Modal, List, Button } from '@react95/core';
import { Computer4, Mail, FileText, Person116, Sendmail2001 } from "@react95/icons"
import styled from 'styled-components';

const Link = styled.a`
  text-decoration: none;
`

const ShutDownTextConatiner = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
`;

export default function Taskbar() {
  const [shutDown, toggleShutDown] = useState(false)
  const closeShutDown = () => toggleShutDown(false);
  const handleShutDown = () => {
    return window.close()
  }
  return (
    <>
      {shutDown && (
        <Modal
          icon={<Computer4 varient="32x32_4" />}
          title="Shut Down"
          closeModal={closeShutDown}
          width={300}
          height={200}
          buttons={[
            { value: 'Ok', onClick: handleShutDown },
            { value: 'Cancel', onClick: closeShutDown },
          ]}
        >
          <ShutDownTextConatiner>
            <Computer4 variant="32x32_4" />
            <p>
              Are you sure you want to shut down?
            </p>
          </ShutDownTextConatiner>
        </Modal>
      )}

      <TaskBar
        list={
          <List>
            <List.Item
              icon={<Mail varient="32x32_4" />}
            >
              <List>
                <Link href="https://github.com/IanGelfand" target="_blank" rel="noreferrer" >
                  <List.Item icon={<FileText variant='32x32_4' />} >
                    Github
                  </List.Item>
                </Link>
                <Link href="https://www.linkedin.com/in/gelfandian/" target="_blank" rel="noreferrer" >
                  <List.Item icon={<Person116 variant='16x16_4' />} >
                    Linkedin
                  </List.Item>
                </Link>
                <List.Item icon={<Sendmail2001 variant='16x16_4' />}>
                  <List>
                    <List.Item 
                      onClick={() => {
                        navigator.clipboard.writeText("gelfandian@gmail.com")
                        alert("Email copied to clipboard")
                      }}
                    >
                      gelfandian@gmail.com
                    </List.Item>
                  </List>
                  Contact
                </List.Item>
              </List>
              Socials
            </List.Item>
            <List.Divider />
            <List.Item 
              icon={<Computer4 variant="32x32_4" />} 
              onClick={() => toggleShutDown(true)}
              >
              Shut Down...
            </List.Item>
          </List>
        }
      />
    </>
  )
}
