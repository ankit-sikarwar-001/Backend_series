import axios from "axios"
import { useEffect, useState } from "react"
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get("/api/jokes")
    .then((response)=>{
    // console.log(response)
     setJokes(response.data)
    //  console.log(response.data)
  })
  .catch((error)=>{
      console.log(error)
  })
  },[])
  

  return (
    <>
      <div>
        <h3>chai aur code || Ankit Singh</h3>
        <h4>jokes : {jokes.length}</h4>
      </div>
      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.title}</h3>
            <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
