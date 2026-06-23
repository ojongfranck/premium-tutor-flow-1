// import { useLayoutEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { TrendingUp, DollarSign, Award, CheckCircle } from 'lucide-react';

// gsap.registerPlugin(ScrollTrigger);

// const results = [
//   {
//     title: 'Monthly Earnings Milestone',
//     description: 'Students achieving $1,500+ monthly through optimized profiles.',
//     image: 'https://storage.googleapis.com/Tutor Academy-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/earnings-dashboard-e80c6f4b-1781401768689.webp',
//     stat: '$1,500/mo',
//     icon: <DollarSign className="w-6 h-6" />,
//   },
//   {
//     title: 'Top Rated Status',
//     description: 'Success stories from students becoming top-rated on major platforms.',
//     image: 'https://storage.googleapis.com/Tutor Academy-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/tutor-setup-84767900-1781401768714.webp',
//     stat: '98% Positive',
//     icon: <Award className="w-6 h-6" />,
//   },
//   {
//     title: 'Platform Consistency',
//     description: 'Learning how to maintain steady student bookings year-round.',
//     image: 'https://storage.googleapis.com/Tutor Academy-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/earnings-dashboard-e80c6f4b-1781401768689.webp',
//     stat: '20+ Active Students',
//     icon: <TrendingUp className="w-6 h-6" />,
//   },
//   {
//     title: 'Remote Freedom',
//     description: 'Real testimonials from tutors working from over 15 countries.',
//     image: 'https://storage.googleapis.com/Tutor Academy-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/tutor-setup-84767900-1781401768714.webp',
//     stat: '100% Remote',
//     icon: <CheckCircle className="w-6 h-6" />,
//   },
// ];

// export function Results() {
//   const sectionRef = useRef<HTMLDivElement>(null);
//   const triggerRef = useRef<HTMLDivElement>(null);

//   useLayoutEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       { translateX: 0 },
//       {
//         translateX: '-300vw',
//         ease: 'none',
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: 'top top',
//           end: '2000 top',
//           scrub: 0.6,
//           pin: true,
//           anticipatePin: 1,
//         },
//       }
//     );
//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <section id="results" className="bg-gray-900 py-24 overflow-hidden">
//       <div ref={triggerRef}>
//         <div className="max-w-7xl mx-auto px-6 mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
//             Proven <span className="text-brand-magenta">Student Results</span>
//           </h2>
//           <p className="text-gray-400 max-w-2xl text-lg">
//             We don't just teach; we deliver results. See what our mentees are achieving on global tutoring platforms.
//           </p>
//         </div>

//         <div ref={sectionRef} className="flex flex-nowrap w-[400vw] h-[70vh] items-center px-[5vw] gap-12">
//           {results.map((result, index) => (
//             <div
//               key={index}
//               className="w-[80vw] lg:w-[45vw] flex-shrink-0 h-full bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-8 border border-white/10 flex flex-col md:flex-row gap-8 items-center"
//             >
//               <div className="w-full md:w-1/2 h-full rounded-2xl overflow-hidden shadow-2xl">
//                 <img src={result.image} alt={result.title} className="w-full h-full object-cover" />
//               </div>
//               <div className="w-full md:w-1/2">
//                 <div className="w-14 h-14 bg-brand-magenta rounded-2xl flex items-center justify-center text-white mb-6">
//                   {result.icon}
//                 </div>
//                 <h3 className="text-3xl font-bold text-white mb-4">{result.title}</h3>
//                 <p className="text-xl text-brand-gold font-bold mb-4">{result.stat}</p>
//                 <p className="text-gray-300 text-lg leading-relaxed">{result.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Star, Quote } from 'lucide-react';
import review1 from '@/assets/review-1.jpg';
import review2 from '@/assets/review-2.jpg';
import review3 from '@/assets/review-3.jpg';
import review4 from '@/assets/review-4.jpg';
import review5 from '@/assets/review-5.jpg';
import review6 from '@/assets/review-6.jpg';

const testimonials = [
  {
    name: 'Blessing A.',
    text: 'I finally understood how tutoring platforms work.',
    location: 'New Tutor',
    review: review1,
  },
  {
    name: 'Koffi D.',
    text: 'The guidance helped me create my tutoring profile confidently.',
    location: 'Beginner',
    review: review2,
  },
  {
    name: 'Sarah M.',
    text: 'I stopped wasting time and finally got clarity.',
    location: 'Mentee',
    review: review3,
  },
  {
    name: 'Emeka O.',
    text: 'Step-by-step support made all the difference for me.',
    location: 'First-time Tutor',
    review: review4,
  },
  {
    name: 'Fatima S.',
    text: 'Within weeks I had my first student lined up.',
    location: 'student',
    review: review5,
  },
  {
    name: 'John K.',
    text: 'Worth every franc. The community alone is gold.',
    location: 'Mentee',
    review: review6,
  },
];

export function Results() {
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
          What My <span className="text-brand-magenta">Students Say</span>
        </h2>
        {/* <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center">
          Join 2+ successful mentorship clients who have transformed their careers with FSL Tutor Academy.
        </p> */}
      </div>

      <div className="flex relative">
        <div ref={scrollRef} className="flex gap-8 whitespace-nowrap">
          {[...testimonials, ...testimonials].map((t, index) => (
            <div
              key={index}
              className="w-[350px] flex-shrink-0 bg-gray-50  rounded-[2rem] border border-gray-100 relative group hover:bg-white hover:shadow-xl transition-all duration-300"
            >
              {/* <div className="absolute top-6 right-8 text-brand-magenta/10 group-hover:text-brand-magenta/20 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div> */}
              
              {/* <div className="flex gap-1 text-brand-gold mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div> */}
              
              {/* <p className="text-gray-700 text-lg leading-relaxed mb-8 whitespace-normal italic">
                "{t.text}"
              </p> */}

              <img 
              src= {t.review}
              alt="" 
              className='w-full h-full rounded-sm'
              
              />
              
              {/* <div className="flex items-center gap-4"> */}
                {/* <div className="w-12 h-12 rounded-full bg-brand-magenta/10 flex items-center justify-center text-brand-magenta font-bold"> */}
                  {/* {t.name[0]} */}
                {/* </div> */}
                {/* <div> */}
                  {/* <p className="font-bold text-gray-900">{t.name}</p> */}
                  {/* <p className="text-sm text-gray-500">{t.location}</p> */}
                {/* </div> */}
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
