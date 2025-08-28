import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-deep-blue text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full gradient-accent flex items-center justify-center">
                <span className="text-white font-montserrat font-bold text-xl">PS</span>
              </div>
              <div>
                <h3 className="font-montserrat font-bold text-xl">Prashant Sapkota</h3>
                <p className="text-gray-300">Certified Financial Advisor</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Helping individuals and families achieve their financial goals through personalized
              advisory services, strategic planning, and trusted expertise.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-emerald-custom transition-colors duration-300">
                <Linkedin size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-emerald-custom transition-colors duration-300">
                <Facebook size={24} />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-emerald-custom transition-colors duration-300">
                <Twitter size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">              <li>
              <Link href="/services" className="text-gray-300 hover:text-emerald-custom transition-colors duration-300">
                Services
              </Link>
            </li>

              <li>
                <Link href="/testimonials" className="text-gray-300 hover:text-emerald-custom transition-colors duration-300">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-custom transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-300 hover:text-emerald-custom transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-300 hover:text-emerald-custom transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-montserrat font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-emerald-custom mt-1 flex-shrink-0" />
                <span className="text-gray-300">+1 2269751978</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-emerald-custom mt-1 flex-shrink-0" />
                <span className="text-gray-300">saprashant123@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-emerald-custom mt-1 flex-shrink-0" />
                                

                <span className="text-gray-300">7420 Airport Rd, Mississauga, Ontario</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2025 Prashant Sapkota. All rights reserved. |
            <Link href="/privacy-policy" className="hover:text-emerald-custom transition-colors duration-300 ml-1">
              Privacy Policy
            </Link> |
            <Link href="/terms-of-service" className="hover:text-emerald-custom transition-colors duration-300 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}