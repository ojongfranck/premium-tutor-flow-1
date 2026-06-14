import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight, Award, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const mentors = [
  {
    id: 1,
    name: 'T. Lari Fortune',
    title: 'Founder & Head Mentor',
    intro: 'Expert in online tutoring platforms with over 5 years of experience helping beginners scale their remote careers.',
    fullStory: 'Lari Fortune started from scratch, discovering the potential of online tutoring platforms when the remote work wave began. After successfully navigating the complexities of account creation and profile optimization, Lari decided to create FSL Education Hub to simplify the journey for others. Today, the hub has mentored hundreds of students into successful remote tutors.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/mentor-1-94d5f389-1781401771068.webp',
    resultsImage: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/earnings-dashboard-e80c6f4b-1781401768689.webp',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    title: 'Senior Tutoring Consultant',
    intro: 'Specializes in profile optimization and platform communication strategies for international markets.',
    fullStory: 'Sarah joined FSL after achieving top-rated status on three major tutoring platforms within her first six months. She now leads our consulting division, ensuring every student presents their best self to potential clients. Her strategies have increased student booking rates by an average of 150%.',
    image: 'https://i.pravatar.cc/400?u=sarah',
    resultsImage: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/earnings-dashboard-e80c6f4b-1781401768689.webp',
  },
  {
    id: 3,
    name: 'Michael Chen',
    title: 'Success Manager',
    intro: 'Dedicated to student results and ensuring every mentee hits their first $1000 milestone.',
    fullStory: 'Michael is the backbone of our community support. With a background in educational psychology, he understands the hurdles beginners face. He has personally overseen the onboarding of 300+ successful tutors and maintains our 98% student satisfaction rate.',
    image: 'https://i.pravatar.cc/400?u=michael',
    resultsImage: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/6d647706-cf80-4ac4-bc19-c789ad5e0de5/earnings-dashboard-e80c6f4b-1781401768689.webp',
  },
];

export function About() {
  const [selectedMentor, setSelectedMentor] = useState<typeof mentors[0] | null>(null);

  return (
    <section id="about" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Your <span className="text-brand-magenta">Mentors</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our team of experienced educators and platform experts are here to guide you every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {mentors.map((mentor) => (
            <motion.div
              key={mentor.id}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-6 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col"
            >
              <div className="aspect-square rounded-2xl overflow-hidden mb-6">
                <img src={mentor.image} alt={mentor.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{mentor.name}</h3>
              <p className="text-brand-magenta font-semibold text-sm mb-4">{mentor.title}</p>
              <p className="text-gray-600 mb-8 flex-grow">{mentor.intro}</p>
              <Button
                onClick={() => setSelectedMentor(mentor)}
                variant="ghost"
                className="group text-brand-magenta font-bold flex items-center gap-2 p-0 hover:bg-transparent"
              >
                View Full Profile <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedMentor} onOpenChange={() => setSelectedMentor(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 rounded-3xl overflow-hidden border-none">
          {selectedMentor && (
            <div className="relative">
              <div className="h-64 sm:h-80 overflow-hidden">
                <img src={selectedMentor.image} alt={selectedMentor.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-8">
                  <h3 className="text-3xl font-bold text-white mb-1">{selectedMentor.name}</h3>
                  <p className="text-brand-gold font-semibold">{selectedMentor.title}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
                    <Award size={16} className="text-brand-magenta" />
                    <span>Certified Mentor</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
                    <Briefcase size={16} className="text-brand-magenta" />
                    <span>5+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700">
                    <TrendingUp size={16} className="text-brand-magenta" />
                    <span>98% Success Rate</span>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none mb-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Professional Biography</h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {selectedMentor.fullStory}
                  </p>
                </div>

                <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                    <p className="font-bold text-gray-900 flex items-center gap-2">
                      <TrendingUp size={18} className="text-green-500" />
                      Verified Results Snapshot
                    </p>
                  </div>
                  <img src={selectedMentor.resultsImage} alt="Results" className="w-full h-auto" />
                </div>

                <div className="mt-10 flex justify-end">
                  <Button
                    onClick={() => setSelectedMentor(null)}
                    className="bg-brand-magenta hover:bg-brand-fuchsia text-white rounded-full px-8 py-6"
                  >
                    Back to Team
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
