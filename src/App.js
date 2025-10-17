import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Team from './components/Team/Team'
import TeamDetails from './components/TeamDetails/TeamDetails'
import LikedUsers from './components/LikedUsers'
import NotFound from './pages/NotFound'
import './styles/general.css';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='team' element={<Team />} />
        <Route path='team/:id' element={<TeamDetails />} />
        <Route path='liked-users' element={<LikedUsers />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
