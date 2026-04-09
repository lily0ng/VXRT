import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { ComputePage } from './pages/product/ComputePage';
import { VPSPage } from './pages/product/VPSPage';
import { LoadBalancerPage } from './pages/product/LoadBalancerPage';
import { KubernetesPage } from './pages/product/KubernetesPage';
import { BlockStoragePage } from './pages/product/BlockStoragePage';
import { AutoScalingPage } from './pages/product/AutoScalingPage';
import { DNSManagementPage } from './pages/product/DNSManagementPage';
import { ObjectStoragePage } from './pages/product/ObjectStoragePage';
import { PenetrationTestingPage } from './pages/service/PenetrationTestingPage';
import { RedTeamingPage } from './pages/service/RedTeamingPage';
import { VulnerabilityAssessmentPage } from './pages/service/VulnerabilityAssessmentPage';
import { CloudPenetrationTestingPage } from './pages/service/CloudPenetrationTestingPage';
import { ExploitDevelopmentPage } from './pages/service/ExploitDevelopmentPage';
import { PurpleTeamingPage } from './pages/service/PurpleTeamingPage';
import { TeamPage } from './pages/TeamPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { CommunityPage } from './pages/CommunityPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ContactPage } from './pages/ContactPage';
import { PricingPage } from './pages/PricingPage';
import { SignInPage } from './pages/SignInPage';
import { SignUpPage } from './pages/SignUpPage';
import { PortalLayout } from './portal/components/PortalLayout';
import { Dashboard } from './portal/pages/Dashboard';

// Portal routes wrapper
function PortalRoutes() {
  return (
    <PortalLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* Main */}
        <Route path="/assessments" element={<div className="text-ghost-white p-8">Assessments Page (Coming Soon)</div>} />
        <Route path="/reports" element={<div className="text-ghost-white p-8">Reports Page (Coming Soon)</div>} />
        <Route path="/team" element={<div className="text-ghost-white p-8">Team Page (Coming Soon)</div>} />
        
        {/* Compute & Instances */}
        <Route path="/compute" element={<div className="text-ghost-white p-8">Compute Page (Coming Soon)</div>} />
        <Route path="/vps" element={<div className="text-ghost-white p-8">VPS Page (Coming Soon)</div>} />
        <Route path="/vnf" element={<div className="text-ghost-white p-8">VNF Appliances Page (Coming Soon)</div>} />
        <Route path="/autoscaling" element={<div className="text-ghost-white p-8">Auto Scaling Page (Coming Soon)</div>} />
        
        {/* Containers */}
        <Route path="/kubernetes" element={<div className="text-ghost-white p-8">Kubernetes Page (Coming Soon)</div>} />
        <Route path="/apps" element={<div className="text-ghost-white p-8">Container Apps Page (Coming Soon)</div>} />
        <Route path="/registry" element={<div className="text-ghost-white p-8">Container Registry Page (Coming Soon)</div>} />
        <Route path="/helm" element={<div className="text-ghost-white p-8">Helm Charts Page (Coming Soon)</div>} />
        
        {/* Storage */}
        <Route path="/block-storage" element={<div className="text-ghost-white p-8">Block Storage Page (Coming Soon)</div>} />
        <Route path="/object-storage" element={<div className="text-ghost-white p-8">Object Storage Page (Coming Soon)</div>} />
        <Route path="/snapshots" element={<div className="text-ghost-white p-8">Snapshots Page (Coming Soon)</div>} />
        <Route path="/backups" element={<div className="text-ghost-white p-8">Backups Page (Coming Soon)</div>} />
        <Route path="/templates" element={<div className="text-ghost-white p-8">Templates Page (Coming Soon)</div>} />
        <Route path="/volumes" element={<div className="text-ghost-white p-8">Volumes Page (Coming Soon)</div>} />
        
        {/* Networking */}
        <Route path="/networks" element={<div className="text-ghost-white p-8">Networks Page (Coming Soon)</div>} />
        <Route path="/loadbalancers" element={<div className="text-ghost-white p-8">Load Balancers Page (Coming Soon)</div>} />
        <Route path="/dns" element={<div className="text-ghost-white p-8">DNS Management Page (Coming Soon)</div>} />
        <Route path="/firewalls" element={<div className="text-ghost-white p-8">Firewalls Page (Coming Soon)</div>} />
        <Route path="/affinity" element={<div className="text-ghost-white p-8">Affinity Groups Page (Coming Soon)</div>} />
        <Route path="/vpc" element={<div className="text-ghost-white p-8">VPC Page (Coming Soon)</div>} />
        
        {/* Security - Offensive */}
        <Route path="/pentesting" element={<div className="text-ghost-white p-8">Penetration Testing Page (Coming Soon)</div>} />
        <Route path="/redteaming" element={<div className="text-ghost-white p-8">Red Teaming Page (Coming Soon)</div>} />
        <Route path="/exploitdev" element={<div className="text-ghost-white p-8">Exploit Development Page (Coming Soon)</div>} />
        <Route path="/vulnscan" element={<div className="text-ghost-white p-8">Vulnerability Scan Page (Coming Soon)</div>} />
        
        {/* Security - Defensive */}
        <Route path="/vulnassess" element={<div className="text-ghost-white p-8">Vulnerability Assessment Page (Coming Soon)</div>} />
        <Route path="/cloudsec" element={<div className="text-ghost-white p-8">Cloud Security Page (Coming Soon)</div>} />
        <Route path="/purpleteam" element={<div className="text-ghost-white p-8">Purple Teaming Page (Coming Soon)</div>} />
        <Route path="/siem" element={<div className="text-ghost-white p-8">SIEM Monitoring Page (Coming Soon)</div>} />
        <Route path="/threatintel" element={<div className="text-ghost-white p-8">Threat Intel Page (Coming Soon)</div>} />
        
        {/* Security - Compliance */}
        <Route path="/compliance" element={<div className="text-ghost-white p-8">Compliance Reports Page (Coming Soon)</div>} />
        <Route path="/auditlogs" element={<div className="text-ghost-white p-8">Audit Logs Page (Coming Soon)</div>} />
        <Route path="/soc2" element={<div className="text-ghost-white p-8">SOC 2 Page (Coming Soon)</div>} />
        <Route path="/pci" element={<div className="text-ghost-white p-8">PCI-DSS Page (Coming Soon)</div>} />
        
        {/* Infrastructure */}
        <Route path="/api" element={<div className="text-ghost-white p-8">API Access Page (Coming Soon)</div>} />
        <Route path="/sshkeys" element={<div className="text-ghost-white p-8">SSH Keys Page (Coming Soon)</div>} />
        <Route path="/integrations" element={<div className="text-ghost-white p-8">Integrations Page (Coming Soon)</div>} />
        <Route path="/monitoring" element={<div className="text-ghost-white p-8">Monitoring Page (Coming Soon)</div>} />
        
        {/* System */}
        <Route path="/settings" element={<div className="text-ghost-white p-8">Settings Page (Coming Soon)</div>} />
        <Route path="/billing" element={<div className="text-ghost-white p-8">Billing Page (Coming Soon)</div>} />
        <Route path="/support" element={<div className="text-ghost-white p-8">Support Page (Coming Soon)</div>} />
      </Routes>
    </PortalLayout>
  );
}

function AppContent() {
  return (
    <Routes>
      {/* Auth Routes - No MainLayout */}
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      
      {/* Portal Routes - Special Layout */}
      <Route path="/portal/*" element={<PortalRoutes />} />
      
      {/* All other routes with MainLayout */}
      <Route path="/*" element={<MainLayoutRoutes />} />
    </Routes>
  );
}

function MainLayoutRoutes() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />

          {/* Product Routes */}
          <Route path="/product/compute" element={<ComputePage />} />
          <Route path="/product/vps" element={<VPSPage />} />
          <Route path="/product/load-balancer" element={<LoadBalancerPage />} />
          <Route path="/product/kubernetes" element={<KubernetesPage />} />
          <Route path="/product/block-storage" element={<BlockStoragePage />} />
          <Route path="/product/auto-scaling" element={<AutoScalingPage />} />
          <Route
            path="/product/dns-management"
            element={<DNSManagementPage />} />
          
          <Route
            path="/product/object-storage"
            element={<ObjectStoragePage />} />
          

          {/* Service Routes */}
          <Route
            path="/services/penetration-testing"
            element={<PenetrationTestingPage />} />
          
          <Route path="/services/red-teaming" element={<RedTeamingPage />} />
          <Route
            path="/services/vulnerability-assessment"
            element={<VulnerabilityAssessmentPage />} />
          
          <Route
            path="/services/cloud-penetration-testing"
            element={<CloudPenetrationTestingPage />} />
          
          <Route
            path="/services/exploit-development"
            element={<ExploitDevelopmentPage />} />
          
          <Route
            path="/services/purple-teaming"
            element={<PurpleTeamingPage />} />
          

          {/* Other Pages */}
          <Route path="/team" element={<TeamPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </MainLayout>
    );
}

export function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}