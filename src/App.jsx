
import './App.css'
import Header from './Header'
import Nav from './Nav'
import Leftbar from './Leftbar'
import Chatplace from './Chatplace'
import Login from './Login'
import Messagebox from './Messagebox'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from './api/posts'



function App() { 


    const [validname, setvalidname] = useState('')
    const [vaalidnumber, setvalidNumber] = useState('')


  return (
      <>
      <Routes>
        <Route path='/' element={<Login
        setvalidname = {setvalidname}
        setvalidNumber = {setvalidNumber}
        /> }/>
      </Routes>
        
      <Routes>
        <Route path='/e' element={<div className='app'>
        <div className='head'></div>
          <Header title={'Gokul ChatApp'}/>
          <Nav />
          <div className='chatplace'>
            <Leftbar />
            <div className="chat-screen">
              <Link to="/messages">View Messages</Link>
                <Chatplace validname={validname}
                            vaalidnumber={vaalidnumber}/>
            </div> 
        </div>
      </div>}/>
      </Routes>
      </>
  )
}

export default App
