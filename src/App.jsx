import { Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar/Navbar"
import { Home } from "./Pages/Home"
import { BottomNav } from "./components/Navbar/BottomNav"
import { Women, Men } from "./components/Navbar/NavData"
import { LoginAndRegister } from "./Pages/LogIn/LoginAndRegister"

function App() {

  return (
    <div>
      <Navbar />
      <BottomNav data={Men} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LoginAndRegister />}></Route>
      </Routes>
    </div>
  )
}

export default App