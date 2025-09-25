import { Route, Routes } from "react-router-dom"
import IntroPage from "./pages/IntroPage"

function App() {

  return (
    <Routes>
      <Route>
        <Route path="/" element={<IntroPage />} />
        {/* <Route />
        <Route />
        <Route /> */}
      </Route>
    </Routes>
  )
}

export default App
