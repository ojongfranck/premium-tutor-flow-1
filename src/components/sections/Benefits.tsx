import { motion } from 'framer-motion';
import { 
  Users, 
  Settings, 
  Map, 
  Layout, 
  Globe, 
  Rocket, 
  Zap, 
  Shield 
} from 'lucide-react';

const benefits = [
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Beginner-Friendly Guidance',
    description: 'How to become an online tutor',
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: 'Tutoring Account Setup Support',
    description: 'The requirements to get started',
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: 'Profile Optimization',
    description: 'How to create a professional tutor profile',
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Remote Income Opportunities',
    description: 'How to attract international students',
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: 'Community Access',
    description: 'How to retain students and grow your income',
  },
  {
    icon: <Map className="w-8 h-8" />,
    title: 'Step-by-Step Roadmap',
    description: 'Common beginner mistakes to avoid',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Ongoing Mentorship',
    description: 'How to get consistent bookings',
  },
  // {
  //   icon: <Shield className="w-8 h-8" />,
  //   title: 'Trust & Safety',
  //   description: 'Learn how to avoid common pitfalls and scams in the online tutoring world.',
  // },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What you will learn
            {/* Why Choose <span className="text-brand-magenta">FSL Education Hub</span>? */}
          </h2>
          {/* <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide everything you need to start your online tutoring business with confidence and clarity.
          </p> */}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 20px 40px rgba(138, 15, 107, 0.1)',
                borderColor: '#8A0F6B'
              }}
              className="p-8 rounded-[2rem] border border-gray-100 bg-white shadow-sm transition-all duration-300"
            >
              {/* <div className="w-16 h-16 bg-brand-magenta/5 text-brand-magenta rounded-2xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div> */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
