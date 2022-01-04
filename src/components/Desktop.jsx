import styled from "styled-components"
import { Skills, About, Projects, MineSweeper, Resume } from './IconComponents'

const IconContainer = styled.div`
  width: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Icon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0.5rem;
  margin-left: 0;
  width: 100%;
  padding: 0.5rem;
  &:active {
    background-color: #070091;
    transform: translateY(4px);
    transform: scale(0.9);
  }
`

const Text = styled.p`
  text-align: center;
  margin: 0;
  margin-top: 0.5rem;
  color: #fff;
`

export default function Desktop() {
  return (
    <IconContainer>
      <Projects />
      <Resume />
      <About />
      <Skills />
      <MineSweeper />
    </IconContainer>
  )
}

export { Icon, Text }