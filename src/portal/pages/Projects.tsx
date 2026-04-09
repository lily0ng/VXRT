import { motion } from 'framer-motion';
import { LayoutGrid, Plus, Search, Filter, Users, Clock, MoreHorizontal, Folder } from 'lucide-react';
import { useState } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
};

const projects = [
  { id: 1, name: 'Production Cluster', description: 'Main production infrastructure', status: 'active', resources: 45, members: 8, updatedAt: '2 hours ago' },
  { id: 2, name: 'Development Env', description: 'Development and staging environment', status: 'active', resources: 23, members: 12, updatedAt: '1 day ago' },
  { id: 3, name: 'Test Lab', description: 'Testing and QA resources', status: 'maintenance', resources: 15, members: 5, updatedAt: '3 days ago' },
  { id: 4, name: 'Backup Project', description: 'Backup and recovery systems', status: 'active', resources: 8, members: 3, updatedAt: '1 week ago' }
];

export function Projects() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible" className="p-6 lg:p-8 space-y-6">
      <motion.div variants={itemVariants} className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-heading font-bold text-ghost-white">Projects</h1>
          <p className="text-muted-gray mt-1">Manage resource projects and teams</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-exploit-red text-white rounded-lg hover:bg-exploit-red/90 transition-colors font-medium">
          <Plus className="w-5 h-5" />
          New Project
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Projects', value: '4', icon: Folder, color: 'blue' },
          { label: 'Active', value: '3', icon: LayoutGrid, color: 'green' },
          { label: 'Resources', value: '91', icon: LayoutGrid, color: 'purple' },
          { label: 'Members', value: '28', icon: Users, color: 'cyan' }
        ].map((stat, index) => (
          <div key={index} className="bg-dark-base border border-steel-gray rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-${stat.color}-500/10`}>
                <stat.icon className={`w-5 h-5 text-${stat.color}-500`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-ghost-white">{stat.value}</p>
                <p className="text-xs text-muted-gray">{stat.label}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-gray" />
          <input type="text" placeholder="Search projects..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-ghost-white placeholder:text-muted-gray focus:outline-none focus:border-exploit-red" />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-dark-base border border-steel-gray rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
          <Filter className="w-5 h-5" />
          Filter
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="bg-dark-base border border-steel-gray rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Folder className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-lg font-semibold text-ghost-white">{project.name}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${project.status === 'active' ? 'bg-green-500/10 text-green-500' : 'bg-yellow-500/10 text-yellow-500'}`}>{project.status}</span>
                  </div>
                  <p className="text-sm text-muted-gray">{project.description}</p>
                  <div className="flex items-center gap-4 mt-3 text-sm text-muted-gray">
                    <span className="flex items-center gap-1"><LayoutGrid className="w-4 h-4" /> {project.resources} resources</span>
                    <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {project.members} members</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {project.updatedAt}</span>
                  </div>
                </div>
              </div>
              <button className="p-2 hover:bg-steel-gray/30 rounded-lg text-muted-gray hover:text-ghost-white transition-colors">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
