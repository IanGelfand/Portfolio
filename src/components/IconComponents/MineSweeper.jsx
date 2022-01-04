import React, { useState } from 'react'
import { Winmine1 } from "@react95/icons"
import { Icon, Text } from '../Desktop'
import { Modal } from '@react95/core'
import Minesweeper from '../../../node_modules/react-minesweeper/lib/dist/Minesweeper'
import "react-minesweeper/lib/minesweeper.css";

export default function MineSweeper() {
  const [showModal, toggleShowModal] = useState(false)
  const [minesweeperKey, setMinesweeperKey] = useState(0)
  const [gameStatus, setGameStatus] = useState(true)
  const restartMinesweeper = () => {
    setMinesweeperKey(prevState => {
      return prevState + 1
    })
    setGameStatus(true)
  }
  const handleOpenModal = () => toggleShowModal(true);
  const handleCloseModal = () => toggleShowModal(false);
  return (
    <>
      <Icon onDoubleClick={handleOpenModal}>
        <Winmine1
          variant="32x32_4"
        />
        <Text>
          Mine Sweeper 
        </Text> 
      </Icon>
      {showModal && (
        <Modal
          width={400}
          height={400}
          icon={<Winmine1 variant="32x32_4" />}
          title="Minesweeper"
          defaultPosition={{
            x: window.innerWidth / 2 - 150,
            y: window.innerHeight / 2 - 150,
          }}
          closeModal={handleCloseModal}
        >
          <button className="minesweeper__restart" onClick={restartMinesweeper}>{gameStatus ? '🙂' :  '😵'}</button>
          <Minesweeper
            key={minesweeperKey}
            onWin={() => alert("GAME WON")}
            onLose={() => {
              setGameStatus(false)
              alert("GAME LOST")
            }}
            bombChance={0.15} // 15% chance that a field will contain a bomb
            width={10} // amount of fields horizontally
            height={10} // amount of fields vertically
          />
        </Modal>
      )}
    </>
  )
}
