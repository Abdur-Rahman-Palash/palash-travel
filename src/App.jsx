import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Hajj from './pages/Hajj'
import Umrah from './pages/Umrah'
import Tours from './pages/Tours'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hajj" element={<Hajj />} />
        <Route path="/umrah" element={<Umrah />} />
        <Route path="/umrah2025" element={<Umrah />} />
        <Route path="/umrah2026" element={<Umrah />} />
        <Route path="/tours" element={<Tours />} />
      </Routes>
    </Layout>
  )
}
