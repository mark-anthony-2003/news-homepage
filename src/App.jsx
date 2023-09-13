import Main from "./layouts/Main";
import Navbar from "./layouts/Navbar";

const App = () => {
  return (
    <div className="bg-[#fffdfa] mx-4 flex justify-center items-center">
      <div className="w-10/12 py-10">
        <Navbar />
        <Main />
      </div>
    </div>
  )
}

export default App
