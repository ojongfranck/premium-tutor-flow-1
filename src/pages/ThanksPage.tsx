import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, MessageCircle, Calendar, Clock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

export function ThanksPage() {
  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl w-full text-center"
      >
        <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100/50">
          <CheckCircle size={48} strokeWidth={2.5} />
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">You Qualify! 🎉</h1>
        <p className="text-xl text-gray-600 mb-12">
          Your application was successfully submitted. Our team will review your profile and get back to you shortly.
        </p>

        <div className="bg-brand-magenta/5 rounded-[2.5rem] p-8 border border-brand-magenta/10 mb-12">
          <h2 className="text-brand-magenta font-bold uppercase tracking-widest text-sm mb-6 flex items-center justify-center gap-2">
            <Calendar size={16} /> Masterclass Reminder
          </h2>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <p className="text-gray-400 text-xs font-bold uppercase mb-1">Date</p>
              <p className="text-gray-900 font-bold">July 5th</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <p className="text-gray-400 text-xs font-bold uppercase mb-1">Time</p>
              <p className="text-gray-900 font-bold">8 PM</p>
            </div>
            <div className="col-span-2 bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-xs font-bold uppercase mb-1 text-left">Location</p>
                <p className="text-gray-900 font-bold">YouTube Live</p>
              </div>
              <Play className="text-red-600" size={32} />
            </div>
          </div>

          <Button
            asChild
            className="w-full bg-brand-magenta hover:bg-brand-fuchsia text-white rounded-full py-8 text-xl font-bold shadow-xl shadow-brand-magenta/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <a href="https://wa.link/8zkyp6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              <MessageCircle size={24} /> Continue To WhatsApp
            </a>
          </Button>
          <p className="mt-4 text-sm text-gray-500 font-medium">
            Join our private WhatsApp group for live updates and pre-masterclass tips.
          </p>
        </div>

        <Button
          variant="ghost"
          asChild
          className="text-gray-500 hover:text-brand-magenta font-bold"
        >
          <a href="/" className="flex items-center gap-2">
            Back to Homepage <ArrowRight size={18} />
          </a>
        </Button>
      </motion.div>
    </div>
  );
}
