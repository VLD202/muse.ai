import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './pages/Layout'
import Dashboard from './pages/Dashboard'
import WriteArticle from './pages/WriteArticle'
import BlogTitles from './pages/BlogTitles'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="write-article" element={<WriteArticle />} />
          <Route path="blog-titles" element={<BlogTitles />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="Generate-Image" element={<div>Generate Image</div>} />
          <Route path="Remove-Background" element={<div>Remove Background</div>} />
          <Route path="ReviewArticle" element={<div>Review Article</div>} />
          <Route path ="ReviewResume" element={<div>Review Resume</div>} />
          <Route path="Community" element={<div>Community</div>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
