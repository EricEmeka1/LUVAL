import Community from "./Components/Community"
import CreateSell from "./Components/CreateSell"
import Creator from "./Components/Creator"
import Drops from "./Components/Drops"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Miss from "./Components/Miss"
import Nav from "./Components/Nav"

const App = () => {
  return (
    <div className="">
      <Nav />  
      <div className="flex flex-col">
        <div className="h-screen w-screen flex items-center justify-center lg:pb-20 bgnft">
          <Hero />
        </div>
        <div className="flex flex-col gap-28 md:gap-32">
          <Drops />
          <Miss />
          <CreateSell />
          <Creator />
          <Community />
          <Footer />
        </div>
      </div>
     
    </div>
  )
}

export default App