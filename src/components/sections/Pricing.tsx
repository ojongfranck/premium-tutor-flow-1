import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const features = [
  'Tutoring account setup guidance',
  'Beginner roadmap',
  'Mentorship support',
  'Profile optimization',
  'Community access',
  'Step-by-step process',
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Invest in Your <span className="text-brand-magenta">Future</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join our complete beginner tutoring mentorship program and start your journey today.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100 relative"
          >
            <div className="bg-brand-magenta p-10 text-center text-white">
              <p className="text-brand-gold font-bold uppercase tracking-widest text-sm mb-4">Most Popular Program</p>
              <h3 className="text-3xl font-bold mb-6">Complete Beginner Tutoring Mentorship</h3>
              <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
                <div className="text-4xl font-black">50,000 FCFA</div>
                <div className="hidden sm:block w-px h-8 bg-white/20" />
                <div className="text-4xl font-black">₦45,000 Naira</div>
              </div>
            </div>

            <div className="p-10">
              <ul className="space-y-4 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-4 text-gray-700">
                    <div className="w-6 h-6 bg-brand-magenta/10 rounded-full flex items-center justify-center text-brand-magenta flex-shrink-0">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-medium text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <Button
                  asChild
                  className="w-full bg-brand-magenta hover:bg-brand-fuchsia text-white rounded-full py-8 text-xl font-bold shadow-lg shadow-brand-magenta/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Link to="/apply">Apply Now</Link>
                </Button>
                <p className="text-center text-sm text-gray-500 font-medium">
                  This mentorship is designed for serious beginners willing to take action.
                </p>
              </div>
            </div>

            {/* Accent Elements */}
            <div className="absolute top-0 right-0 p-4">
              <div className="bg-brand-gold text-brand-magenta text-[10px] font-black px-2 py-1 rounded-full uppercase tracking-tighter rotate-12">
                LIMITED SLOTS
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
