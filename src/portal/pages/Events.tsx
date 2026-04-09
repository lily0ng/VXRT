import { motion } from 'framer-motion';
import { Calendar, Clock, Filter, Search, Plus, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const events = [
  { id: 1, title: 'System Maintenance', type: 'maintenance', date: '2024-01-15 02:00', status: 'scheduled', description: 'Scheduled system maintenance window' },
  { id: 2, title: 'VM Created', type: 'info', date: '2024-01-14 10:30', status: 'completed', description: 'New VM instance created successfully' },
  { id: 3, title: 'Backup Completed', type: 'success', date: '2024-01-14 08:00', status: 'completed', description: 'Daily backup completed successfully' },
  { id: 4, title: 'High CPU Alert', type: 'warning', date: '2024-01-13 15:45', status: 'active', description: 'CPU usage exceeded 90% threshold' },
  { id: 5, title: 'User Login Failed', type: 'error', date: '2024-01-13 12:20', status: 'resolved', description: 'Multiple failed login attempts detected' }
];

export function Events() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-6 lg:p-8 space-y-6">
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Events</h1>
          <p className="text-muted-gray mt-1">System events and activity log</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium">
          <Plus className="w-5 h-5" />
          Create Event
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input type="text" placeholder="Search events..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-3">
        {events.map((event) => (
          <div key={event.id} className="bg-dark-base border border-steel-gray rounded-xl p-4 flex items-start gap-4">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              event.type === 'maintenance' ? 'bg-blue-500/10 text-blue-500' :
              event.type === 'info' ? 'bg-cyan-500/10 text-cyan-500' :
              event.type === 'success' ? 'bg-green-500/10 text-green-500' :
              event.type === 'warning' ? 'bg-yellow-500/10 text-yellow-500' :
              'bg-red-500/10 text-red-500'
            }`}>
              {event.type === 'maintenance' && <Calendar className="w-5 h-5" />}
              {event.type === 'info' && <Info className="w-5 h-5" />}
              {event.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {event.type === 'warning' && <AlertCircle className="w-5 h-5" />}
              {event.type === 'error' && <AlertCircle className="w-5 h-5" />}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="text-lg font-semibold text-ghost-white">{event.title}</h3>
                <span className={`px-2 py-0.5 text-xs rounded-full ${
                  event.status === 'scheduled' ? 'bg-blue-500/10 text-blue-500' :
                  event.status === 'completed' ? 'bg-green-500/10 text-green-500' :
                  event.status === 'active' ? 'bg-yellow-500/10 text-yellow-500' :
                  'bg-gray-500/10 text-gray-500'
                }`}>{event.status}</span>
              </div>
              <p className="text-sm text-muted-gray">{event.description}</p>
              <p className="text-xs text-muted-gray mt-2 flex items-center gap-1"><Clock className="w-3 h-3" /> {event.date}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
