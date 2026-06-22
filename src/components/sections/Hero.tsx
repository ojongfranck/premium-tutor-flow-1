import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { GraduationCap, Star, ShieldCheck, Users } from 'lucide-react';
import flyer from '@/assets/flyer.jpg'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-brand-fuchsia/10 to-transparent rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-brand-magenta/10 to-transparent rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 bg-brand-magenta/5 border border-brand-magenta/10 px-4 py-2 rounded-full mb-6">
            <GraduationCap className="text-brand-magenta w-5 h-5" />
            <span className="text-brand-magenta font-semibold text-sm tracking-wide uppercase">
              🎓 FREE ONLINE TUTORING MASTERCLASS
            </span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Become A Highly Booked <span className="text-brand-magenta">Online Tutor</span> In 30 Days
          </h1>

          {/* <p className="text-xl text-gray-600 mb-8 max-w-xl">
            Learn how beginners are creating tutoring accounts, understanding tutoring platforms, and starting remotely with proper guidance.
          </p> */}

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button
              asChild
              className="bg-brand-magenta hover:bg-brand-fuchsia text-white rounded-full px-8 py-7 text-lg shadow-xl shadow-brand-magenta/20 transition-all hover:scale-105 active:scale-95"
            >
              <Link to="/apply">Start Application</Link>
            </Button>
            {/* <Button
              variant="outline"
              asChild
              className="border-2 border-brand-magenta text-brand-magenta hover:bg-brand-magenta/5 rounded-full px-8 py-7 text-lg transition-all hover:scale-105 active:scale-95"
            >
              <a href="#masterclass">Watch Free Masterclass</a>
            </Button> */}
          </div>

          <div className="flex items-center gap-8">
            {/* <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" className="w-full h-full object-cover" />
                </div>
              ))}
            </div> */}
            <div className="text-sm text-gray-500">
              <div className="flex items-center gap-1 text-brand-gold mb-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p>Trusted by <span className="font-bold text-gray-900">500+ aspiring tutors</span></p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-magenta/20 border border-white/20">
            <img
              src= {flyer}
              alt="Online Tutoring Setup"
              className="w-full h-auto"
            />
            {/* Trust Indicator Floating Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Platform Verified</p>
                  <p className="text-xs text-gray-500">Helping you start with confidence</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative floating shapes */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-magenta/20 rounded-full blur-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
