import { create } from 'zustand'

export interface CartItem {
  id: string
  product_id: string
  name: string
  price: number
  image_url: string
  quantity: number
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clear: () => void
  total: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item) => {
    const items = get().items
    const existingItem = items.find(i => i.product_id === item.product_id)
    if (existingItem) {
      set({
        items: items.map(i =>
          i.product_id === item.product_id
            ? { ...i, quantity: i.quantity + item.quantity }
            : i
        )
      })
    } else {
      set({ items: [...items, item] })
    }
  },
  removeItem: (id) => set({ items: get().items.filter(i => i.product_id !== id) }),
  updateQuantity: (id, quantity) => {
    if (quantity <= 0) {
      set({ items: get().items.filter(i => i.product_id !== id) })
    } else {
      set({
        items: get().items.map(i =>
          i.product_id === id ? { ...i, quantity } : i
        )
      })
    }
  },
  clear: () => set({ items: [] }),
  total: () => {
    return get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  }
}))
