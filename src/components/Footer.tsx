import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Abeer Amir</h3>
            <p className="text-gray-400">Premium apparel for everyday comfort and style.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Shop</a></li>
              <li><a href="#" className="hover:text-white transition">About</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <a href="tel:+923006190087" className="hover:text-white transition">+92 300 6190087</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <a href="mailto:abeeramirenterprises@gmail.com" className="hover:text-white transition">abeeramirenterprises@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Abeer Amir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
