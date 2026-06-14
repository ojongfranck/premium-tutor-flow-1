import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Blessing A.',
    text: 'I finally understood how tutoring platforms work. FSL Hub made it so simple!',
    location: 'Lagos, Nigeria',
  },
  {
    name: 'Koffi D.',
    text: 'The guidance helped me create my tutoring profile confidently. I got my first student in 2 weeks!',
    location: 'Abidjan, Ivory Coast',
  },
  {
    name: 'Sarah M.',
    text: 'I stopped wasting time and finally got clarity. The community support is amazing.',
    location: 'Nairobi, Kenya',
  },
  {
    name: 'Emeka O.',
    text: 'Best investment I have made this year. The step-by-step roadmap is a game changer.',
    location: 'Abuja, Nigeria',
  },
  {
    name: 'Fatima S.',
    text: 'Highly recommend FSL for any beginner. They really care about your success.',
    location: 'Dakar, Senegal',
  },
  {
    name: 'John K.',
    text: 'The profile optimization tips are pure gold. My profile views skyrocketed!',
    location: 'Accra, Ghana',
  },
  {
    name: 'Marie L.',
    text: 'I was skeptical at first, but the results speak for themselves. I am now tutoring full-time.',
    location: 'Paris, France',
  },
  {
    name: 'David W.',
    text: 'Professional, trustworthy, and effective. The masterclass was eye-opening.',
    location: 'London, UK',
  },
];

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const windowWidth = window.innerWidth;
    
    const animation = gsap.to(scrollRef.current, {
      x: `-${scrollWidth / 2}`,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 text-center">
          What Our <span className="text-brand-magenta">Students Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
          Join 20+ successful mentorship clients who have transformed their careers with FSL Education Hub.
        </p>
      </div>

      <div className="flex relative">
        <div ref={scrollRef} className="flex gap-8 whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 bg-gray-50 p-8 rounded-[2rem] border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-6 right-8 text-brand-magenta/10 group-hover:text-brand-magenta/20 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>
              
              <div className="flex gap-1 text-brand-gold mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-normal italic">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-magenta/10 flex items-center justify-center text-brand-magenta font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
