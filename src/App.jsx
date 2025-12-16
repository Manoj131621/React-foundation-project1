import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import UserCard from './components/UserCard'

function App() {
  const users = [
    { name: "Manoj", role:"Frontend Developer"},
    { name: "Madhu", role:"Manager"},
    { name: "Seeta", role:"Scrum Master"},
    { name: "Praveen", role:"Frontend Developer"},
    { name: "Krishna", role:"Manager"},
    { name: "Satish", role:"Scrum Master"},
    { name: "Anil", role:"Frontend Developer"},
    { name: "Raju", role:"Manager"},
    { name: "Saidulu", role:"Scrum Master"}
  ]
  return (
    <>
      <Header/>
      <div className='card-container'>
        {
          users.map((user,index) => (
            <UserCard key={index} name={user.name} role={user.role}/>
          ))
        }
      </div>
      <Footer/>
    </>
  )
}

export default App
