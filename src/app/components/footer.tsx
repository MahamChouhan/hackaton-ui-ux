import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us.</h3>
            <p className="text-gray-400 text-sm">
              Corporate clients and leisure travelers hasbeen relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Opening Hours</h4>
              <p className="text-gray-400 text-sm">Mon - Sat: 8:00 - 17:00</p>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">News</a></li>
              <li><a href="#" className="hover:text-white">Partners</a></li>
              <li><a href="#" className="hover:text-white">Team</a></li>
              <li><a href="#" className="hover:text-white">Menu</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Help?</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Term & conditions</a></li>
              <li><a href="#" className="hover:text-white">Reporting</a></li>
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Support Policy</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Recent Post</h3>
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt=""
                    className="w-16 h-16 rounded object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-sm">
                      Is fastfood good for your body?
                    </h4>
                    <p className="text-gray-400 text-xs mt-1">January 03, 2024</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            Copyright © 2024 by Ayeman. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

