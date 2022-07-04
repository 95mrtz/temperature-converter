import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { useState } from "react"


const App = () => {

  const [ theme , setTheme ] = useState("dark")
  return(
    <div className="w-full h-full bg-gradient-to-t from-gray-700 via-gray-900 to-black text-slate-200">
        <Header />
        <Main />
        <Footer />
    </div>
  )
}

export default App;
