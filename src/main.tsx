import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import { App } from './App'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './layouts/Login'
import { Panel } from './layouts/Panel'
import { Products } from './routers/Products'
import { UseProtection } from './hooks/useProtection'
import { ProviderUser } from './context/usersContext'
import { ProductProvider } from './context/productContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProductProvider>
      <BrowserRouter >
        <Routes>
          <Route index element={<App />} />
          <Route path='/' element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/panel' element={
            <ProviderUser>
              <UseProtection>
                <Panel />
              </UseProtection>
            </ProviderUser>
          }>
            <Route index element={<Navigate to="productos" replace />} />
            <Route index path='productos' element={<Products />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  </StrictMode>,
)
