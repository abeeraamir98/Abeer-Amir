import { ShoppingCart, LogOut, User, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useAuthStore } from '../store/authStore'
import { useCartStore } from '../store/cartStore'
import type { PageType } from '../App'

interface HeaderProps {
  onNavigate: (page: PageType) => void
  currentPage: PageType
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const { user, signOut } = useAuthStore()
  const cartItems = useCartStore(state => state.items)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    onNavigate('home')
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button onClick={() => onNavigate('home')} className="text-2xl font-bold text-blue-600">
            Abeer Amir
          </button>

          <nav className="hidden md:flex gap-6 items-center">
            <button
              onClick={() => onNavigate('home')}
              className={`font-medium transition ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Shop
            </button>
            {user && (
              <button
                onClick={() => onNavigate('admin')}
                className={`font-medium transition ${
                  currentPage === 'admin' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Admin
              </button>
            )}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onNavigate('cart')}
              className="relative text-gray-700 hover:text-blue-600 transition"
            >
              <ShoppingCart size={24} />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </button>

            {user ? (
              <div className="hidden md:flex items-center gap-2">
                <User size={20} className="text-gray-700" />
                <button
                  onClick={handleSignOut}
                  className="text-gray-700 hover:text-blue-600 transition flex items-center gap-1"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => onNavigate('auth')}
                className="hidden md:block button-primary text-sm"
              >
                Sign In
              </button>
            )}

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200">
            <button
              onClick={() => {
                onNavigate('home')
                setMobileMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
            >
              Shop
            </button>
            {user && (
              <button
                onClick={() => {
                  onNavigate('admin')
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50"
              >
                Admin
              </button>
            )}
            {!user && (
              <button
                onClick={() => {
                  onNavigate('auth')
                  setMobileMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-blue-600 font-medium"
              >
                Sign In
              </button>
            )}
            {user && (
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 text-red-600 font-medium"
              >
                Sign Out
              </button>
            )}
          </nav>
        )}
      </div>
    </header>
  )
}
