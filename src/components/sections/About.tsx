// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { X, ChevronRight, Award, Briefcase, TrendingUp } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
// import mentor1 from '@/assets/mentor-1.jpg';
// import mentor2 from '@/assets/mentor-2.jpg';
// import mentor3 from '@/assets/mentor-3.jpg';
// import earning1 from '@/assets/earning-1.jpg';
// import earning2 from '@/assets/earning-2.jpg';
// import earning3 from '@/assets/earning-3.jpg';

// const mentors = [
//   {
//     id: 1,
//     name: 'Lari Fortune',
//     title: 'Online Coach & Tutor',
//     intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
//     fullStory: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
//     image: mentor1,
//     resultsImage: earning1,
//   },
//   {
//     id: 2,
//     name: 'Hon. Shirley Lakeh',
//     title: 'Senior Tutoring Consultant',
//     intro: 'Specializes in profile optimization and platform communication strategies for international markets.',
//     fullStory: 'Sarah joined FSL after achieving top-rated status on three major tutoring platforms within her first six months. She now leads our consulting division, ensuring every student presents their best self to potential clients. Her strategies have increased student booking rates by an average of 150%.',
//     image: mentor2,
//     resultsImage: earning2,
//   },
//   {
//     id: 3,
//     name: 'Franck Ronald',
//     title: 'Success Manager',
//     intro: 'Dedicated to student results and ensuring every mentee hits their first $1000 milestone.',
//     fullStory: 'Michael is the backbone of our community support. With a background in educational psychology, he understands the hurdles beginners face. He has personally overseen the onboarding of 300+ successful tutors and maintains our 98% student satisfaction rate.',
//     image: mentor3,
//     resultsImage: earning3,
//   },
// ];

// export function About() {
//   const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);

//   return (
//     <section id="about" className="py-24 bg-gray-50/50">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Your <span className="text-brand-magenta">Mentors</span></h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Our team of experienced educators and platform experts are here to guide you every step of the way.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {mentors.map((mentor) => (
//             <motion.div
//               key={mentor.id}
//               whileHover={{ y: -10 }}
//               className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col"
//             >
//               <div className="aspect-auto rounded-2xl overflow-hidden mb-6">
//                 <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
//               <p className="text-brand-magenta font-semibold text-sm mb-4">{mentor.title}</p>
//               <p className="text-gray-600 mb-8 flex-grow">{mentor.intro}</p>
//               {/* <img src={mentor.resultsImage} alt={mentor.name} className="w-full h-full object-cover" /> */}
//               <Button
//                 onClick={() => setSelectedMentor(mentor)}
//                 variant="ghost"
//                 className="group text-brand-magenta font-bold flex items-center gap-2 p-0 hover:bg-transparent"
//               >
//                 View Full Profile <ChevronRight className="group-hover:translate-x-1 transition-transform" />
//               </Button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
//         <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl overflow-hidden border-none">
//           {selectedMentor && (
//             <div className="relative">
//               <div className="h-64 sm:h-80 overflow-hidden">
//                 <img src={selectedMentor.image} alt={selectedMentor.name} className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//                 <div className="absolute bottom-6 left-8">
//                   <h3 className="text-3xl font-bold text-white mb-1">{selectedMentor.name}</h3>
//                   <p className="text-brand-gold font-semibold">{selectedMentor.title}</p>
//                 </div>
//               </div>
              
//               <div className="p-8">
//                 <div className="flex flex-wrap gap-4 mb-8">
//                   <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
//                     <Award size={16} className="text-brand-magenta" />
//                     <span>Certified Mentor</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
//                     <Briefcase size={16} className="text-brand-magenta" />
//                     <span>5+ Years Experience</span>
//                   </div>
//                   <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
//                     <TrendingUp size={16} className="text-brand-magenta" />
//                     <span>98% Success Rate</span>
//                   </div>
//                 </div>

//                 <div className="prose prose-gray max-w-none mb-10">
//                   <h4 className="text-xl font-bold text-gray-900 mb-3">Professional Biography</h4>
//                   <p className="text-gray-600 leading-relaxed text-lg">
//                     {selectedMentor.fullStory}
//                   </p>
//                 </div>

//                 <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
//                   <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
//                     <p className="font-bold text-gray-900 flex items-center gap-2">
//                       <TrendingUp size={18} className="text-green-500" />
//                       Verified Results Snapshot
//                     </p>
//                   </div>
//                   <img src={selectedMentor.resultsImage} alt="Results" className="w-full h-auto" />
//                 </div>

//                 <div className="mt-10 flex justify-end">
//                   <Button
//                     onClick={() => setSelectedMentor(null)}
//                     className="bg-brand-magenta hover:bg-brand-fuchsia text-white rounded-full px-8 py-6"
//                   >
//                     Back to Team
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// }

import { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';
import mentor1 from '@/assets/mentor-1.jpg';
import mentor2 from '@/assets/mentor-2.jpg';
import mentor3 from '@/assets/mentor-3.jpg';
import earning1 from '@/assets/earning-1.jpg';
import earning2 from '@/assets/earning-2.jpg';
import earning3 from '@/assets/earning-3.jpg';

const team = [
  {
    id: 1,
    name: 'Lari Fortune',
    role: 'Online Coach & Tutor',
    intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
    story: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
    image: mentor1,
    successImage: earning1,
  },
    {
    id: 2,
    name: 'Hon. Shirley Lakeh',
    role: 'Online Coach & Tutor',
    intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
    story: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
    image: mentor2,
    successImage: earning2,
  },
    {
    id: 3,
    name: 'Franck Ronald',
    role: 'Online Coach & Tutor',
    intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
    story: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
    image: mentor3,
    successImage: earning3,
  },
];

export const About = () => {
  return (
    <section id="team" className="py-24 bg-[#F8F8FA]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our <span className="text-primary">Experts</span></h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The dedicated professionals behind FSL Education Hub, committed to your teaching success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-border group hover:shadow-xl transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                   <div className="text-white">
                      <div className="font-bold text-xl mb-1">{member.name}</div>
                      <div className="text-white/80 text-sm uppercase tracking-widest">{member.role}</div>
                   </div>
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <div className="text-primary font-semibold">{member.role}</div>
                </div>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {member.intro}
                </p>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all">
                      View Success Story
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-[2rem] border-none">
                    <div className="grid md:grid-cols-2 h-full max-h-[90vh] overflow-y-auto lg:overflow-hidden">
                      <div className="h-64 md:h-full relative">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6 bg-primary text-white px-4 py-2 rounded-full font-bold text-sm">
                           Expert Profile
                        </div>
                      </div>
                      <div className="p-8 md:p-12 lg:overflow-y-auto">
                        {/* <div className="flex items-center gap-1 mb-6">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                           ))}
                        </div> */}
                        <DialogHeader className="mb-8">
                          <DialogTitle className="text-3xl md:text-4xl font-bold mb-2">{member.name}</DialogTitle>
                          <div className="text-primary font-bold text-xl uppercase tracking-wider">{member.role}</div>
                        </DialogHeader>
                        
                        <div className="space-y-8">
                          {/* <div> */}
                            {/* <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <span className="w-8 h-[2px] bg-primary"></span>
                              Biography
                            </h4> */}
                            {/* <p className="text-muted-foreground leading-relaxed">
                              {member.bio}
                            </p> */}
                          {/* </div> */}
                          
                          <div>
                            {/* <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                              <span className="w-8 h-[2px] bg-primary"></span>
                              The Success Story
                            </h4> */}
                            <p className="text-muted-foreground leading-relaxed">
                              {member.story}
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t border-border">
                            <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Earnings & Results Preview</h4>
                            <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                              <img 
                                src={member.successImage} 
                                alt="Success Result" 
                                className="w-full h-auto"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
