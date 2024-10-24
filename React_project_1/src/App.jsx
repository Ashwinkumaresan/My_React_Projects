// import { LearnComponents } from "./Components/LearnComponents"
import { Student } from "./Components/Student"
import "./css/Main.css"

// import { Header } from "./Components/Header"

function App() {


  return (
    <>
      {/* <div>
        <LearnComponents />
      </div> */}

      {/* <Header /> */}
      <Student name="Demo 1"age={18} isMarried={false}/>
      <Student name="Demo 2"age={45} isMarried={true}/>
      <Student name="Demo 3"age={78} isMarried={true}/>
      default props
      <Test />

    </>
  )
}

export default App
