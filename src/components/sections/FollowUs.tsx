import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

const socials = [
  { name: 'TikTok', icon: <MessageCircle />, href: '#', color: 'bg-black' },
  { name: 'Instagram', icon: <Instagram />, href: '#', color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500' },
  { name: 'Facebook', icon: <Facebook />, href: '#', color: 'bg-blue-600' },
];

export function FollowUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Connect With Our <span className="text-brand-magenta">Community</span></h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              whileHover={{ y: -5, scale: 1.1 }}
              className="group flex flex-col items-center gap-4"
            >
              <div className={`w-20 h-20 rounded-3xl flex items-center justify-center text-white shadow-xl transition-all duration-300 group-hover:shadow-brand-magenta/30 ${social.color}`}>
                {social.icon}
              </div>
              <span className="font-bold text-gray-600 group-hover:text-brand-magenta transition-colors">{social.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-magenta rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <span className="font-bold text-lg text-gray-900 tracking-tight">
            FSL Education <span className="text-brand-magenta">Hub</span>
          </span>
        </div>

        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} FSL Tutor Academy. All rights reserved.
        </p>

        {/* <div className="flex gap-6 text-sm font-medium text-gray-500">
          <a href="#" className="hover:text-brand-magenta transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-magenta transition-colors">Terms of Service</a>
        </div> */}
      </div>
    </footer>
  );
}
