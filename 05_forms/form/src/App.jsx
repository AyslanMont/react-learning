import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <MyForm user={{name: "ayslan", email: "ayslan@gmail.com", bio: "Desenvolvedro FullStack", role: "admin"}}></MyForm>
    </>
  )
}

export default App
