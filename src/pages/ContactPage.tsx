import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionHeading } from '../components/shared/SectionHeading';
import { Button } from '../components/ui/button';
import Calendar from 'react-calendar';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';
import {
  Lock,
  Mail,
  MessageSquare,
  Shield,
  ChevronDown,
  Calendar as CalendarIcon,
  Clock,
  Check,
  ArrowRight,
  Phone,
  MapPin,
  Globe,
  Zap,
  Send,
  X
} from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

// Custom calendar styles override - Full Dark Theme
const calendarStyles = `
  .react-calendar {
    background: transparent;
    border: none;
    font-family: inherit;
    width: 100%;
    color: #e8e8ea;
  }
  .react-calendar__navigation {
    background: rgba(17, 17, 21, 0.8);
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid rgba(42, 42, 46, 0.5);
  }
  .react-calendar__navigation button {
    color: #e8e8ea;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 0.375rem;
    transition: all 0.2s;
    background: transparent;
    min-width: 44px;
  }
  .react-calendar__navigation button:hover {
    background: rgba(192, 57, 43, 0.2);
    color: #c0392b;
  }
  .react-calendar__navigation button:disabled {
    color: #4a4a52;
    background: transparent;
  }
  .react-calendar__navigation__label {
    font-size: 1rem !important;
    color: #e8e8ea !important;
  }
  .react-calendar__month-view__weekdays {
    color: #4a4a52;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }
  .react-calendar__month-view__weekdays abbr {
    text-decoration: none;
  }
  /* Dark theme for all tiles */
  .react-calendar__tile {
    color: #e8e8ea;
    padding: 0.75rem 0.5rem;
    border-radius: 0.5rem;
    font-size: 0.875rem;
    transition: all 0.2s;
    position: relative;
    background: rgba(17, 17, 21, 0.3);
    border: 1px solid transparent;
  }
  .react-calendar__tile:hover {
    background: rgba(192, 57, 43, 0.2);
    border-color: rgba(192, 57, 43, 0.3);
  }
  .react-calendar__tile--now {
    background: rgba(192, 57, 43, 0.15);
    color: #c0392b;
    font-weight: 600;
    border: 1px solid rgba(192, 57, 43, 0.3);
  }
  .react-calendar__tile--active {
    background: #c0392b !important;
    color: white !important;
    font-weight: 600;
    border-color: #c0392b;
  }
  .react-calendar__tile--active:hover {
    background: #a93226 !important;
  }
  .react-calendar__tile--disabled {
    color: #3a3a42;
    background: rgba(17, 17, 21, 0.1);
    cursor: not-allowed;
  }
  .react-calendar__tile--disabled:hover {
    background: rgba(17, 17, 21, 0.1);
    border-color: transparent;
  }
  /* Neighboring month days (prev/next month) */
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #2a2a32 !important;
    background: transparent;
  }
  .react-calendar__month-view__days__day--neighboringMonth:hover {
    background: rgba(17, 17, 21, 0.2);
  }
  /* Weekend styling */
  .react-calendar__month-view__days__day--weekend {
    color: #4a4a52;
  }
  .react-calendar__month-view__days__day--weekend.react-calendar__tile--active {
    color: white !important;
  }
  /* Available dates indicator */
  .calendar-available::after {
    content: '';
    position: absolute;
    bottom: 4px;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 4px;
    background: #22c55e;
    border-radius: 50%;
  }
  /* Year/Decade view styling */
  .react-calendar__year-view__months__month,
  .react-calendar__decade-view__years__year {
    color: #e8e8ea;
    padding: 0.75rem;
    border-radius: 0.5rem;
    background: rgba(17, 17, 21, 0.3);
  }
  .react-calendar__year-view__months__month:hover,
  .react-calendar__decade-view__years__year:hover {
    background: rgba(192, 57, 43, 0.2);
  }
  .react-calendar__year-view__months__month--disabled,
  .react-calendar__decade-view__years__year--disabled {
    color: #3a3a42;
  }
`;
const faqs = [
{
  q: "What's the typical response time?",
  a: 'We aim to respond to all inquiries within 24 hours during business days. For emergency incident response, existing clients have access to our 24/7 hotline.'
},
{
  q: 'Do you offer emergency assessments?',
  a: 'Yes, we can expedite assessments for critical situations (e.g., post-breach validation or urgent compliance needs), subject to availability and an expediting fee.'
},
{
  q: 'How do we share sensitive information securely?',
  a: 'We use PGP for email communications and offer secure, self-hosted file sharing platforms. We can also communicate via Signal or Wire for sensitive operational details.'
},
{
  q: "What's the onboarding process?",
  a: 'After initial contact, we sign an NDA, conduct a scoping call, provide a formal proposal and Statement of Work (SOW), and then schedule the engagement kickoff.'
},
{
  q: 'Can we start with a small engagement?',
  a: 'Absolutely. We often start with targeted assessments (e.g., a single web application or external network perimeter) to demonstrate our value before moving to larger scopes.'
},
{
  q: 'Do you sign NDAs?',
  a: 'Yes, we require a mutually agreed Non-Disclosure Agreement before discussing any specific details about your environment or security posture.'
},
{
  q: 'What time zones do you operate in?',
  a: 'We are a remote-first, global team. We can accommodate testing schedules in any time zone, including off-hours testing to minimize potential disruption.'
},
{
  q: 'How do we receive deliverables?',
  a: 'Reports are delivered via our secure client portal or encrypted email, depending on your preference. We also schedule a debrief call to walk your team through the findings.'
}];

const timeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
  '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
];

// Generate available dates (next 12 months, excluding weekends)
const getAvailableDates = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 365; i++) {
    const date = addDays(today, i);
    const day = date.getDay();
    if (day !== 0 && day !== 6) { // Exclude weekends
      dates.push(date);
    }
  }
  return dates;
};

export function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [bookingStep, setBookingStep] = useState<'date' | 'time' | 'details' | 'success'>('date');
  const [formData, setFormData] = useState({ name: '', email: '', company: '', notes: '' });
  const availableDates = getAvailableDates();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setBookingStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setBookingStep('details');
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const RECIPIENT_EMAIL = '0xff0day@gmail.com';

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare email content
    const subject = encodeURIComponent(`VXRT Booking Request - ${format(selectedDate!, 'MMM do')} at ${selectedTime}`);
    const body = encodeURIComponent(
      `New Booking Request\n\n` +
      `Date: ${format(selectedDate!, 'EEEE, MMMM do, yyyy')}\n` +
      `Time: ${selectedTime}\n\n` +
      `Contact Information:\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'Not provided'}\n\n` +
      `Notes: ${formData.notes || 'No additional notes'}\n\n` +
      `---\nSent from VXRT Contact Page`
    );

    // Open email client with pre-filled data
    const mailtoLink = `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');

    // Simulate API call delay for UX
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setBookingStep('success');
  };

  const tileClassName = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const isAvailable = availableDates.some(d => isSameDay(d, date));
      if (isAvailable) return 'calendar-available';
    }
    return null;
  };

  const tileDisabled = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      return !availableDates.some(d => isSameDay(d, date));
    }
    return false;
  };

  return (
    <div className="w-full bg-void-black min-h-screen pt-24 pb-20">
      <style>{calendarStyles}</style>
      <div className="container mx-auto px-6">
        {/* Section 1: Hero with enhanced animations */}
        <section className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-exploit-red/10 border border-exploit-red/30 rounded-full"
          >
            <Zap className="w-4 h-4 text-exploit-red" />
            <span className="text-sm font-semibold text-exploit-red">24/7 Response Available</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-ghost-white mb-6"
          >
            Get in <span className="text-exploit-red">touch</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-text"
          >
            Ready to strengthen your security posture? Reach out for a free
            consultation with our offensive security experts.
          </motion.p>

          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10"
          >
            {[
              { icon: Mail, label: 'Email', value: 'contact@vxrt.io', color: 'text-blue-400' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'text-green-400' },
              { icon: MapPin, label: 'Location', value: 'Global / Remote', color: 'text-purple-400' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-dark-base/50 border border-border rounded-xl p-4 text-center hover:border-exploit-red/50 transition-all cursor-pointer group"
              >
                <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-[#111115] flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-muted-text uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-semibold text-ghost-white">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Section 2: Contact Form */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 bg-dark-base border border-steel-gray rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-ghost-white mb-6">
                Send us a message
              </h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-ghost-white">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors"
                      placeholder="John Doe" />
                    
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-ghost-white">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors"
                      placeholder="john@company.com" />
                    
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-ghost-white">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors"
                      placeholder="Company Inc." />
                    
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-ghost-white">
                      Service Interest
                    </label>
                    <select className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors appearance-none">
                      <option>Penetration Testing</option>
                      <option>Red Teaming</option>
                      <option>Vulnerability Assessment</option>
                      <option>Cloud Penetration Testing</option>
                      <option>Exploit Development</option>
                      <option>Purple Teaming</option>
                      <option>Web Application Testing</option>
                      <option>Mobile App Testing</option>
                      <option>Incident Response</option>
                      <option>Security Audit</option>
                      <option>Infrastructure Services</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-ghost-white">
                    Budget Range
                  </label>
                  <select className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors appearance-none">
                    <option>&lt;$10K</option>
                    <option>$10-25K</option>
                    <option>$25-50K</option>
                    <option>$50-100K</option>
                    <option>$100K+</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-ghost-white">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-void-black border border-steel-gray rounded-lg px-4 py-3 text-ghost-white focus:outline-none focus:border-exploit-red transition-colors resize-none"
                    placeholder="Tell us about your security needs...">
                  </textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-exploit-red hover:bg-red-700 text-ghost-white font-bold rounded-lg transition-colors">
                  
                  Send Message →
                </button>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-dark-base border border-steel-gray rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-void-black rounded-lg flex items-center justify-center text-exploit-red">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ghost-white">Email Us</h3>
                    <p className="text-sm text-muted-text">contact@vxrt.io</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-void-black rounded-lg flex items-center justify-center text-exploit-red">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ghost-white">
                      Response Time
                    </h3>
                    <p className="text-sm text-muted-text">&lt; 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-void-black rounded-lg flex items-center justify-center text-exploit-red">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-ghost-white">Secure Comms</h3>
                    <p className="text-sm text-muted-text">
                      Signal / Wire available
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#111115] border border-steel-gray rounded-xl p-6">
                <h3 className="font-bold text-ghost-white mb-2 flex items-center gap-2">
                  <Lock size={16} className="text-exploit-red" /> PGP
                  Fingerprint
                </h3>
                <p className="text-xs font-mono text-muted-text break-all bg-void-black p-3 rounded border border-steel-gray">
                  4A9C 8B2E 1F7D 563A 90B1
                  <br />
                  C4E2 7D8F 3A1B 5C9E 2F4A
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Real Booking Calendar */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-dark-base via-[#111115] to-void-black border border-border rounded-2xl p-8 max-w-4xl mx-auto text-center overflow-hidden relative"
          >
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-exploit-red/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-exploit-red/5 rounded-full blur-3xl" />

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-16 h-16 mx-auto bg-exploit-red/20 border border-exploit-red/30 rounded-full flex items-center justify-center text-exploit-red mb-6"
              >
                <CalendarIcon className="w-8 h-8" />
              </motion.div>

              <h2 className="text-3xl font-heading font-bold text-ghost-white mb-4">
                Schedule a <span className="text-exploit-red">Consultation</span>
              </h2>
              <p className="text-muted-text mb-8 max-w-lg mx-auto">
                Book a 30-minute consultation with our offensive security experts. 
                Available Monday through Friday, 9 AM - 5 PM EST.
              </p>

              {/* Real Calendar */}
              <div className="max-w-md mx-auto bg-[#111115]/50 border border-border rounded-xl p-6 mb-8">
                <Calendar
                  onChange={(value) => handleDateSelect(value as Date)}
                  value={selectedDate}
                  tileClassName={tileClassName}
                  tileDisabled={tileDisabled}
                  minDate={new Date()}
                  maxDate={addDays(new Date(), 365)}
                  className="mx-auto"
                />

                {/* Selected Date Info */}
                <AnimatePresence>
                  {selectedDate && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 pt-4 border-t border-border"
                    >
                      <p className="text-sm text-muted-text mb-2">Selected Date</p>
                      <p className="text-lg font-semibold text-ghost-white">
                        {format(selectedDate, 'EEEE, MMMM do, yyyy')}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button
                onClick={() => setShowBookingModal(true)}
                className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white px-8 py-6 text-base font-semibold"
              >
                <Clock className="w-5 h-5 mr-2" />
                Book Your Session
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-muted-text">
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-green-500" /> Free consultation
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-green-500" /> No commitment
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-3 h-3 text-green-500" /> NDA included
                </span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Booking Modal */}
        <AnimatePresence>
          {showBookingModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowBookingModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-dark-base border border-border rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-dark-base border-b border-border p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-ghost-white">
                      {bookingStep === 'success' ? 'Booking Confirmed!' : 'Book Consultation'}
                    </h3>
                    <p className="text-sm text-muted-text">
                      {bookingStep === 'date' && 'Select a date'}
                      {bookingStep === 'time' && 'Choose a time slot'}
                      {bookingStep === 'details' && 'Enter your details'}
                    </p>
                  </div>
                  <button
                    onClick={() => setShowBookingModal(false)}
                    className="text-muted-text hover:text-ghost-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Step Indicator */}
                <div className="px-6 py-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    {['date', 'time', 'details'].map((step, idx) => (
                      <div key={step} className="flex items-center">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                            bookingStep === step || (bookingStep === 'success' && idx < 2)
                              ? 'bg-exploit-red text-white'
                              : 'bg-[#111115] text-muted-text border border-border'
                          }`}
                        >
                          {bookingStep === step || (bookingStep === 'success' && idx < 2) ? (
                            <Check className="w-4 h-4" />
                          ) : (
                            idx + 1
                          )}
                        </div>
                        {idx < 2 && (
                          <div className={`w-12 h-0.5 mx-2 ${
                            bookingStep === 'details' || (bookingStep === 'success' && idx === 0)
                              ? 'bg-exploit-red'
                              : 'bg-border'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  {bookingStep === 'date' && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-text mb-4">Select your preferred date:</p>
                      <Calendar
                        onChange={(value) => handleDateSelect(value as Date)}
                        value={selectedDate}
                        tileClassName={tileClassName}
                        tileDisabled={tileDisabled}
                        minDate={new Date()}
                        maxDate={addDays(new Date(), 365)}
                      />
                    </div>
                  )}

                  {bookingStep === 'time' && selectedDate && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-text mb-4">
                        Available times for {format(selectedDate, 'MMMM do')}:
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {timeSlots.map((time) => (
                          <motion.button
                            key={time}
                            onClick={() => handleTimeSelect(time)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="p-3 bg-[#111115] border border-border rounded-lg text-ghost-white hover:border-exploit-red hover:bg-exploit-red/10 transition-all text-sm font-medium"
                          >
                            {time}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}

                  {bookingStep === 'details' && selectedDate && selectedTime && (
                    <form onSubmit={handleBookingSubmit} className="space-y-4">
                      <div className="bg-exploit-red/10 border border-exploit-red/30 rounded-lg p-4 mb-6">
                        <p className="text-sm text-muted-text">Booking for</p>
                        <p className="font-semibold text-ghost-white">
                          {format(selectedDate, 'EEEE, MMMM do')} at {selectedTime}
                        </p>
                      </div>

                      <div>
                        <label className="text-sm font-medium text-ghost-white mb-1 block">Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 text-ghost-white focus:border-exploit-red focus:outline-none transition-colors"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-ghost-white mb-1 block">Email</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 text-ghost-white focus:border-exploit-red focus:outline-none transition-colors"
                          placeholder="you@company.com"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-ghost-white mb-1 block">Company</label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 text-ghost-white focus:border-exploit-red focus:outline-none transition-colors"
                          placeholder="Company name (optional)"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-ghost-white mb-1 block">Notes</label>
                        <textarea
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full bg-[#111115] border border-border rounded-lg px-4 py-3 text-ghost-white focus:border-exploit-red focus:outline-none transition-colors resize-none"
                          placeholder="Any specific topics you'd like to discuss?"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-exploit-red hover:bg-exploit-red/90 text-ghost-white py-4 relative overflow-hidden"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <motion.div
                              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-2"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            />
                            Sending...
                          </span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Confirm Booking
                          </>
                        )}
                      </Button>
                    </form>
                  )}

                  {bookingStep === 'success' && (
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4"
                      >
                        <Check className="w-10 h-10 text-green-500" />
                      </motion.div>
                      <h4 className="text-xl font-bold text-ghost-white mb-2">Booking Request Sent!</h4>
                      <p className="text-muted-text mb-4">
                        An email has been opened in your default email client with your booking details.
                      </p>
                      <div className="bg-[#111115] border border-border rounded-lg p-4 mb-4 text-left">
                        <p className="text-xs text-muted-text mb-1">To:</p>
                        <p className="text-sm text-ghost-white mb-2">{RECIPIENT_EMAIL}</p>
                        <p className="text-xs text-muted-text mb-1">Booking Details:</p>
                        <p className="text-sm text-ghost-white">
                          {format(selectedDate!, 'EEEE, MMMM do')} at {selectedTime}
                        </p>
                      </div>
                      <p className="text-xs text-muted-text">
                        Please send the email to complete your booking request.
                      </p>
                      <Button
                        onClick={() => {
                          setShowBookingModal(false);
                          setBookingStep('date');
                          setSelectedDate(null);
                          setSelectedTime(null);
                          setFormData({ name: '', email: '', company: '', notes: '' });
                        }}
                        className="mt-6 bg-exploit-red hover:bg-exploit-red/90"
                      >
                        Close
                      </Button>
                    </div>
                  )}
                </div>

                {/* Navigation Buttons */}
                {bookingStep !== 'success' && bookingStep !== 'details' && (
                  <div className="p-6 border-t border-border flex justify-between">
                    <Button
                      variant="outline"
                      onClick={() => setBookingStep(bookingStep === 'time' ? 'date' : 'date')}
                      disabled={bookingStep === 'date'}
                      className="border-steel-gray text-ghost-white"
                    >
                      Back
                    </Button>
                    <Button
                      onClick={() => {
                        if (bookingStep === 'date' && selectedDate) setBookingStep('time');
                        else if (bookingStep === 'time' && selectedTime) setBookingStep('details');
                      }}
                      disabled={(bookingStep === 'date' && !selectedDate) || (bookingStep === 'time' && !selectedTime)}
                      className="bg-exploit-red hover:bg-exploit-red/90 text-ghost-white"
                    >
                      Next
                    </Button>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Section 4: FAQ with enhanced animations */}
        <section className="mb-32 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading 
              title="FAQ" 
              description="Common Questions"
              badge="HELP CENTER"
            />
          </motion.div>
          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-dark-base border border-steel-gray rounded-lg overflow-hidden hover:border-exploit-red/30 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className="font-bold text-ghost-white group-hover:text-exploit-red transition-colors pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: openFaq === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={20} className="text-muted-text" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-4 text-muted-text border-t border-steel-gray/50 pt-4 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section 5: Trusted By / Clients with enhanced animations */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-dark-base via-[#111115] to-void-black border border-border rounded-2xl p-8"
          >
            <div className="text-center mb-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-heading font-bold text-ghost-white mb-3"
              >
                Trusted by <span className="text-exploit-red">Industry Leaders</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-text max-w-xl mx-auto"
              >
                We have worked with organizations across finance, healthcare, technology, and critical infrastructure sectors.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Fortune 500', count: '15+' },
                { name: 'Startups', count: '50+' },
                { name: 'Gov Agencies', count: '8+' },
                { name: 'Non-Profits', count: '12+' }
              ].map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -5, scale: 1.05, borderColor: 'rgba(192, 57, 43, 0.5)' }}
                  className="bg-[#111115] border border-steel-gray rounded-xl p-6 text-center transition-all cursor-pointer"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }}
                    className="text-3xl font-heading font-bold text-exploit-red mb-1"
                  >
                    {client.count}
                  </motion.div>
                  <div className="text-sm text-muted-text">{client.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 6: Quick Resources with enhanced animations */}
        <section className="mb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-dark-base via-[#111115] to-void-black border border-border rounded-2xl p-8"
          >
            <div className="text-center mb-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl font-heading font-bold text-ghost-white mb-3"
              >
                Before You <span className="text-exploit-red">Reach Out</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-text max-w-xl mx-auto"
              >
                Quick resources to help you understand our process and prepare for engagement.
              </motion.p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Service Guide',
                  desc: 'Detailed breakdown of our offerings and methodologies.',
                  link: '/services',
                  icon: Shield
                },
                {
                  title: 'Pricing Calculator',
                  desc: 'Estimate costs based on scope and requirements.',
                  link: '/pricing',
                  icon: Globe
                },
                {
                  title: 'Sample Report',
                  desc: 'See an example of our deliverables and reporting format.',
                  link: '/resources',
                  icon: MessageSquare
                }
              ].map((resource, i) => (
                <motion.a
                  key={i}
                  href={resource.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="block bg-[#111115] border border-steel-gray rounded-xl p-6 hover:border-exploit-red transition-all group"
                >
                  <div className="w-12 h-12 bg-exploit-red/10 rounded-lg flex items-center justify-center text-exploit-red mb-4 group-hover:scale-110 transition-transform">
                    <resource.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-ghost-white mb-2 group-hover:text-exploit-red transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-text mb-4">{resource.desc}</p>
                  <span className="text-sm text-exploit-red flex items-center gap-1 font-semibold">
                    View <motion.span className="group-hover:translate-x-1 transition-transform">→</motion.span>
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Section 7: Global Operations with enhanced animations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto border-t border-steel-gray/30 pt-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#111115] border border-border rounded-full text-sm"
          >
            <Globe className="w-4 h-4 text-exploit-red" />
            <span className="text-muted-text">Remote-first organization</span>
          </motion.div>

          <h2 className="text-2xl font-heading font-bold text-ghost-white mb-4">
            Global <span className="text-exploit-red">Operations</span>
          </h2>
          <p className="text-muted-text mb-6">
            VXRT is a remote-first organization with operators distributed
            worldwide. This allows us to provide 24/7 coverage and localized
            expertise for global engagements.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-dark-base border border-steel-gray rounded-full text-sm text-ghost-white cursor-pointer"
          >
            <Lock size={14} className="text-exploit-red" /> Warrant Canary:{' '}
            <span className="text-green-500 font-bold">Intact</span> (Updated
            Oct 1, 2024)
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              { icon: Shield, label: 'SOC 2 Type II' },
              { icon: Lock, label: 'ISO 27001' },
              { icon: Check, label: 'GDPR Compliant' }
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-[#111115] border border-border rounded-full text-xs text-muted-text">
                <badge.icon className="w-3 h-3 text-exploit-red" />
                {badge.label}
              </div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}