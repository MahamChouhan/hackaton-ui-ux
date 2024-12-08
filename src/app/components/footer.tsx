import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are passionate about delivering the best dining experience to our customers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500">About</Link></li>
              <li><Link href="/menu" className="text-gray-400 hover:text-orange-500">Menu</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-orange-500">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Help?</h3>
            <ul className="space-y-2">
              <li><Link href="/faq" className="text-gray-400 hover:text-orange-500">FAQ</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-orange-500">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="text-gray-400 hover:text-orange-500">Privacy Policy</Link></li>
              <li><Link href="/support" className="text-gray-400 hover:text-orange-500">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 mb-2">123 Restaurant Street, City, Country</p>
            <p className="text-gray-400 mb-2">Phone: +1 234 567 890</p>
            <p className="text-gray-400 mb-4">Email: info@restaurant.com</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Restaurant Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

