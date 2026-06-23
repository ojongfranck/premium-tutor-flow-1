import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';


// const questions = [

//   { 
//     id: 1,
//     field: "tried", 
//     question: "What made you interested in online tutoring right now?", 
//     options: ["I want extra income", "I want to work from home", "I'm tired of my current situation", "Poverty has sat me down"] 

//   },

//   { 
//     id: 2,
//     field: "why", 
//     question: "How much would you love to make monthly from online tutoring?", 
//     options: ["$100-$300", "$300-$500", "$700-$1500", "$1500-$3000"] 
//   },

//   { 
//     id: 3,
//     field: "willing", 
//     question: "If you could start earnig from home, what will motivate you the most?", 
//     options: ["Financial freedom", "Supporting my family", "Leaving my job", "Paying school fees or bills", "Others"] 
//   },

//   { 
//     id: 4,
//     field: "struggle", 
//     question: "If this masterclass gives you a clear road map to start tutoring online, would you be able to take action immediatly?", 
//     options: ["Yes, absolutely", "Maybe, depending on the process", "I need more information first", "Not sure yet"] 
//   },
// ];

const questions = [
    { 
    id: 1,
    field: "tried", 
    question: "What made you interested in online tutoring right now?", 
    options: ["I want extra income", "I want to work from home", "I'm tired of my current situation", "Poverty has sat me down"] 

  },

  { 
    id: 2,
    field: "why", 
    question: "How much would you love to make monthly from online tutoring?", 
    options: ["$100-$300", "$300-$500", "$700-$1500", "$1500-$3000"] 
  },

  { 
    id: 3,
    field: "willing", 
    question: "If you could start earnig from home, what will motivate you the most?", 
    options: ["Financial freedom", "Supporting my family", "Leaving my job", "Paying school fees or bills", "Others"] 
  },

  { 
    id: 4,
    field: "struggle", 
    question: "If this masterclass gives you a clear road map to start tutoring online, would you be able to take action immediatly?", 
    options: ["Yes, absolutely", "Maybe, depending on the process", "I need more information first", "Not sure yet"] 
  },
  
  // {
  //   id: 5,
  //   question: "Are you serious about starting within the next 30 days?",
  //   options: ["Yes", "Just exploring"],
  //   field: "isSerious",
  // },
];

export function ApplyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    tried: "",
    why: "",
    willing: "",
    struggle: "",
    // isSerious: "",
    fullName: "",
    email: "",
    whatsapp: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const progress = (step / 6) * 100;

  const handleOptionSelect = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setTimeout(() => setStep(step + 1), 300);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.whatsapp) {
      toast.error("Please fill in all contact details");
      return;
    }

    setIsSubmitting(true);
    
    // Simulating Notion API call
    try {
      // In a real app, this would be: await fetch('/api/notion', { method: 'POST', body: JSON.stringify(formData) })
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Form Data Submitted to Notion:", formData);
      toast.success("Application submitted successfully!");
      navigate('/thanks');
    } catch (error) {
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="mb-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-brand-magenta rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              FSL Tutor Academy
            </span>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mentorship Application</h1>
          <p className="text-gray-500">Step {step} of 6</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <Progress value={progress} className="h-2 bg-gray-200" />
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100 min-h-[400px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {step <= 4 ? (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-tight">
                  {questions[step - 1].question}
                </h2>
                <div className="grid gap-4">
                  {questions[step - 1].options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleOptionSelect(questions[step - 1].field, option)}
                      className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between group ${
                        formData[questions[step - 1].field as keyof typeof formData] === option
                          ? 'border-brand-magenta bg-brand-magenta/5 text-brand-magenta shadow-md'
                          : 'border-gray-100 hover:border-brand-magenta/30 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="text-lg font-semibold">{option}</span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                        formData[questions[step - 1].field as keyof typeof formData] === option
                          ? 'bg-brand-magenta border-brand-magenta text-white'
                          : 'border-gray-200 group-hover:border-brand-magenta/30'
                      }`}>
                        {formData[questions[step - 1].field as keyof typeof formData] === option && <Check size={14} />}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 bg-brand-gold/20 text-brand-magenta px-4 py-2 rounded-full text-sm font-bold mb-4">
                    <Sparkles size={16} />
                    Almost there!
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Final Step</h2>
                  <p className="text-gray-500">Provide your contact details so we can review your application.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="rounded-xl py-6 border-gray-100 focus:border-brand-magenta/50 focus:ring-brand-magenta/20 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="rounded-xl py-6 border-gray-100 focus:border-brand-magenta/50 focus:ring-brand-magenta/20 transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">WhatsApp Number</label>
                    <Input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="+123 456 7890"
                      className="rounded-xl py-6 border-gray-100 focus:border-brand-magenta/50 focus:ring-brand-magenta/20 transition-all"
                      required
                    />
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-magenta hover:bg-brand-fuchsia text-white rounded-full py-8 text-xl font-bold shadow-xl shadow-brand-magenta/20"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="animate-spin" /> Submitting...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          Complete Application <ArrowRight size={20} />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-gray-100">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="flex items-center gap-2 text-gray-500 hover:text-brand-magenta font-bold transition-colors"
              >
                <ArrowLeft size={18} /> Back
              </button>
            ) : (
              <div />
            )}
            <p className="text-xs text-gray-400 max-w-[250px] text-right italic">
              Applications are reviewed to maintain a serious and supportive community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
