import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, DollarSign, Award, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const results = [
  {
    title: 'Monthly Earnings Milestone',
    description: 'Students achieving $1,500+ monthly through optimized profiles.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/earnings-dashboard-e80c6f4b-1781401768689.webp',
    stat: '$1,500/mo',
    icon: <DollarSign className="w-6 h-6" />,
  },
  {
    title: 'Top Rated Status',
    description: 'Success stories from students becoming top-rated on major platforms.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/tutor-setup-84767900-1781401768714.webp',
    stat: '98% Positive',
    icon: <Award className="w-6 h-6" />,
  },
  {
    title: 'Platform Consistency',
    description: 'Learning how to maintain steady student bookings year-round.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/earnings-dashboard-e80c6f4b-1781401768689.webp',
    stat: '20+ Active Students',
    icon: <TrendingUp className="w-6 h-6" />,
  },
  {
    title: 'Remote Freedom',
    description: 'Real testimonials from tutors working from over 15 countries.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/tutor-setup-84767900-1781401768714.webp',
    stat: '100% Remote',
    icon: <CheckCircle className="w-6 h-6" />,
  },
];

export function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      { translateX: 0 },
      {
        translateX: '-300vw',
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '2000 top',
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section id="results" className="bg-gray-900 py-24 overflow-hidden">
      <div ref={triggerRef}>
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Proven <span className="text-brand-magenta">Student Results</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            We don't just teach; we deliver results. See what our mentees are achieving on global tutoring platforms.
          </p>
        </div>

        <div ref={sectionRef} className="flex flex-nowrap w-[400vw] h-[70vh] items-center px-[5vw] gap-12">
          {results.map((result, index) => (
            <div
              key={index}
              className="w-[80vw] lg:w-[45vw] flex-shrink-0 h-full bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/10 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-1/2 h-full rounded-2xl overflow-hidden shadow-2xl">
                <img src={result.image} alt={result.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <div className="w-14 h-14 bg-brand-magenta rounded-2xl flex items-center justify-center text-white mb-6">
                  {result.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{result.title}</h3>
                <p className="text-xl text-brand-gold font-bold mb-4">{result.stat}</p>
                <p className="text-gray-300 text-lg leading-relaxed">{result.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
