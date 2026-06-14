import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users, Gift, PlayCircle } from 'lucide-react';

export function Masterclass() {
  return (
    <section id="masterclass" className="py-24 bg-brand-magenta relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,215,0,0.1),transparent)] z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Free Beginner <span className="text-brand-gold">Online Tutoring</span> Masterclass
              </h2>
              <p className="text-white/80 text-xl mb-10 max-w-xl leading-relaxed">
                Discover how beginners are starting online tutoring remotely and understanding tutoring platforms properly. No hidden costs, just pure value.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {[
                  { icon: <Users />, label: 'Host', value: 'T. Lari Fortune' },
                  { icon: <Calendar />, label: 'Date', value: 'July 5th' },
                  { icon: <Clock />, label: 'Time', value: '8 PM' },
                  { icon: <MapPin />, label: 'Location', value: 'YouTube Live' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/10">
                    <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-brand-magenta">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/60 text-xs font-bold uppercase tracking-wider">{item.label}</p>
                      <p className="text-white font-bold">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-brand-gold/20 text-brand-gold px-4 py-2 rounded-full border border-brand-gold/30">
                  <Users size={16} />
                  <span className="font-bold">Capacity: 100 Participants</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl relative z-10">
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-brand-gold rounded-full flex items-center justify-center text-brand-magenta rotate-12 shadow-lg animate-bounce">
                <Gift size={40} />
              </div>
              
              <div className="text-center mb-8">
                <div className="inline-block bg-brand-magenta/5 text-brand-magenta px-4 py-1 rounded-full text-sm font-bold mb-4">
                  🎁 BONUS GIVEAWAY
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Win $100 Cash!</h3>
                <p className="text-gray-600">
                  One lucky participant who stays until the end of the masterclass will receive $100.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                    <PlayCircle size={14} fill="currentColor" />
                  </div>
                  <p className="text-gray-700">Step-by-step account setup walkthrough</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                    <PlayCircle size={14} fill="currentColor" />
                  </div>
                  <p className="text-gray-700">Hidden platform hacks for beginners</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0 mt-1">
                    <PlayCircle size={14} fill="currentColor" />
                  </div>
                  <p className="text-gray-700">Live Q&A session with T. Lari Fortune</p>
                </div>
              </div>

              <Button
                className="w-full bg-brand-magenta hover:bg-brand-fuchsia text-white rounded-full py-8 text-xl font-bold shadow-xl shadow-brand-magenta/20"
              >
                Access Free Masterclass
              </Button>
            </div>
            
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-brand-gold/20 rounded-[3.5rem] blur-xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
