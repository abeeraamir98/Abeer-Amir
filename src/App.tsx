import { useEffect, useState } from 'react'
import { useAuthStore } from './store/authStore'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Cart from './pages/Cart'
import Admin from './pages/Admin'
import Checkout from './pages/Checkout'

export type PageType = 'home' | 'cart' | 'auth' | 'admin' | 'checkout'

export default function App() {
  const { user, loading, checkAuth } = useAuthStore()
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  useEffect(() => {
    const handlePageChange = (event: Event) => {
      if (event instanceof CustomEvent) {
        setCurrentPage(event.detail)
      }
    }
    window.addEventListener('pageChange', handlePageChange)
    return () => window.removeEventListener('pageChange', handlePageChange)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  const handleSetPage = (page: PageType) => {
    setCurrentPage(page)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onNavigate={handleSetPage} currentPage={currentPage} />
      <main className="flex-1">
        {!user && currentPage === 'admin' ? (
          <Auth onAuth={() => handleSetPage('home')} />
        ) : !user && currentPage === 'checkout' ? (
          <Auth onAuth={() => handleSetPage('checkout')} />
        ) : currentPage === 'admin' ? (
          <Admin />
        ) : currentPage === 'cart' ? (
          <Cart onCheckout={() => handleSetPage('checkout')} />
        ) : currentPage === 'checkout' ? (
          <Checkout onSuccess={() => handleSetPage('home')} />
        ) : currentPage === 'auth' ? (
          <Auth onAuth={() => handleSetPage('home')} />
        ) : (
          <Home onAddToCart={() => {}} />
        )}
      </main>
      <Footer />
    </div>
  )
}
