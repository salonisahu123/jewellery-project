import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRouter from './routes/AppRouter.jsx'
import { BrowserRouter } from 'react-router-dom'
import Footer from './pages/Footer.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppRouter />
        <Footer/>
    </BrowserRouter>
)
