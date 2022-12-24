import { useEffect, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import Experience from './components/Experience'
import Footer from './partials/Footer'
import Header from './partials/Header'


function App() {

  const mode = 'light'
  const name = 'Charles'
  const age = 20
  const title = 'Hello Title'

  //* Use of useState
  const [counter, setCounter] = useState(0);

  //* useEffect
  useEffect(() => {
    //* logica cada vez que se actualize (el valor dentro de los corchetes)
    if(counter>30) {
      // var refreshIntervalId = setInterval(() => {
      //  

      // }, 1000);
      alert('Superaste los 30')
    }
  
    return () => {
      //* Sirve para TERMINAR procesos que sean continuos y SIGNIFIQUEN PÉRDIDA DE MEMORIA
      // clearInterval(refreshIntervalId);
      console.log('TERMINO')

    }
  }, [counter])




  return (
    <div className="App">
      {/* React props */}



      <Header mode={mode} name={name} />
      {/* <Header mode={mode} name={name} age={age}  /> */}

      <div className="menu">
          <ul>
            {/*//*  ANGULAR: routerLink */}

            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/experience">Messages</Link> </li>
          </ul>
      </div>

        {/*//*  ANGULAR: router-outlet */}
      <Routes>
          <Route path="/" element={<Counter counter={counter} setCounter={setCounter} />}/>
          <Route path="/experience" 
          element={
              <Experience title={title} counter={counter} >
                  This is a counter inside children
        
              </Experience>
          }/>
      </Routes>

      {/* <hr />
      <h1>Hello from React App Vite</h1>

      <h3>Counter afuera del componente(Counter): {counter}</h3>
      <hr />
      <Counter counter={counter} setCounter={setCounter} />
      
      <hr />
        
      {
        counter<20 && 
        <Experience title={title} counter={counter} >
          This is a counter inside children
        
        </Experience>
      }

      <hr /> */}


      <Footer />

    </div>
  )
}

export default App
