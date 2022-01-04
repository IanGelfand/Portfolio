import { Desktop, Taskbar } from "./components";
import { ThemeProvider, GlobalStyle } from "@react95/core";

export default function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Desktop />
      <Taskbar />
    </ThemeProvider>
  )
}
