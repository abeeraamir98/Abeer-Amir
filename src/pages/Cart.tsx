import { Trash2, Plus, Minus } from 'lucide-react'
import { useCartStore } from '../store/cartStore'
import type { PageType } from '../App'

interface CartProps {
  onCheckout: () => void
}

export default function Cart({ onCheckout }: CartProps) {
  const { items, removeItem, updateQuantity, total, clear } = useCartStore()

  if (items.length === 0) {
    return (
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Start shopping to add items to your cart</p>
          <a href="#" onClick={() => window.dispatchEvent(new CustomEvent('pageChange', { detail: 'home' }))} className="button-primary inline-block">
            Continue Shopping
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.product_id} className="card p-4 flex gap-4">
                <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 overflow-hidden">
                  {item.image_url ? (
                    <img src={item.image_url} alt={item.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-300" />
                  )}
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-lg">{item.name}</h3>
                  <p className="text-blue-600 font-semibold">PKR {item.price}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.product_id, item.quantity - 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus size={18} />
                    </button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.product_id, item.quantity + 1)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus size={18} />
                    </button>
                    <span className="ml-auto font-semibold text-lg">
                      PKR {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => removeItem(item.product_id)}
                  className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6 h-fit">
          <h2 className="text-xl font-bold mb-6">Order Summary</h2>

          <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">PKR {total().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-semibold text-green-600">Free</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span className="font-semibold">PKR 0</span>
            </div>
          </div>

          <div className="flex justify-between text-lg font-bold mb-6">
            <span>Total</span>
            <span className="text-blue-600">PKR {total().toFixed(2)}</span>
          </div>

          <button
            onClick={onCheckout}
            className="w-full button-primary py-3 rounded-lg font-semibold mb-3"
          >
            Proceed to Checkout
          </button>

          <button
            onClick={() => clear()}
            className="w-full button-secondary py-3 rounded-lg font-semibold"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  )
}
