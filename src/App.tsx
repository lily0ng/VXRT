import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { Compute as ComputePage } from './portal/pages/Compute';
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
import { Assessments } from './portal/pages/Assessments';
import { Reports } from './portal/pages/Reports';
import { Team } from './portal/pages/Team';
import { Compute } from './portal/pages/Compute';
import { VPS } from './portal/pages/VPS';
import { VNFAppliances } from './portal/pages/VNFAppliances';
import { AutoScaling } from './portal/pages/AutoScaling';
import { Kubernetes } from './portal/pages/Kubernetes';
import { ContainerApps } from './portal/pages/ContainerApps';
import { ContainerRegistry } from './portal/pages/ContainerRegistry';
import { HelmCharts } from './portal/pages/HelmCharts';
import { BlockStorage } from './portal/pages/BlockStorage';
import { ObjectStorage } from './portal/pages/ObjectStorage';
import { Snapshots } from './portal/pages/Snapshots';
import { Backups } from './portal/pages/Backups';
import { Templates } from './portal/pages/Templates';
import { Volumes } from './portal/pages/Volumes';
import { Networks } from './portal/pages/Networks';
import { LoadBalancers } from './portal/pages/LoadBalancers';
import { DNSManagement } from './portal/pages/DNSManagement';
import { Firewalls } from './portal/pages/Firewalls';
import { AffinityGroups } from './portal/pages/AffinityGroups';
import { VPC } from './portal/pages/VPC';
import { PenetrationTesting } from './portal/pages/PenetrationTesting';
import { RedTeaming } from './portal/pages/RedTeaming';
import { ExploitDevelopment } from './portal/pages/ExploitDevelopment';
import { VulnerabilityScan } from './portal/pages/VulnerabilityScan';
import { VulnerabilityAssessment } from './portal/pages/VulnerabilityAssessment';
import { CloudSecurity } from './portal/pages/CloudSecurity';
import { PurpleTeaming } from './portal/pages/PurpleTeaming';
import { SIEMMonitoring } from './portal/pages/SIEMMonitoring';
import { ThreatIntel } from './portal/pages/ThreatIntel';
import { ComplianceReports } from './portal/pages/ComplianceReports';
import { AuditLogs } from './portal/pages/AuditLogs';
import { SOC2 } from './portal/pages/SOC2';
import { PCIDSS } from './portal/pages/PCIDSS';
import { APIAccess } from './portal/pages/APIAccess';
import { SSHKeys } from './portal/pages/SSHKeys';
import { Integrations } from './portal/pages/Integrations';
import { Monitoring } from './portal/pages/Monitoring';
import { Settings } from './portal/pages/Settings';
import { Billing } from './portal/pages/Billing';
import { Support } from './portal/pages/Support';
import { UserManagement } from './portal/pages/UserManagement';
import { UserDetails } from './portal/pages/UserDetails';
import { Articles } from './portal/pages/Articles';

// Portal routes wrapper
function PortalRoutes() {
  return (
    <PortalLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        
        {/* Main */}
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/team" element={<Team />} />
        
        {/* Compute & Instances */}
        <Route path="/compute" element={<Compute />} />
        <Route path="/vps" element={<VPS />} />
        <Route path="/vnf" element={<VNFAppliances />} />
        <Route path="/autoscaling" element={<AutoScaling />} />
        
        {/* Containers */}
        <Route path="/kubernetes" element={<Kubernetes />} />
        <Route path="/apps" element={<ContainerApps />} />
        <Route path="/registry" element={<ContainerRegistry />} />
        <Route path="/helm" element={<HelmCharts />} />
        
        {/* Storage */}
        <Route path="/block-storage" element={<BlockStorage />} />
        <Route path="/object-storage" element={<ObjectStorage />} />
        <Route path="/snapshots" element={<Snapshots />} />
        <Route path="/backups" element={<Backups />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/volumes" element={<Volumes />} />
        
        {/* Networking */}
        <Route path="/networks" element={<Networks />} />
        <Route path="/loadbalancers" element={<LoadBalancers />} />
        <Route path="/dns" element={<DNSManagement />} />
        <Route path="/firewalls" element={<Firewalls />} />
        <Route path="/affinity" element={<AffinityGroups />} />
        <Route path="/vpc" element={<VPC />} />
        
        {/* Security - Offensive */}
        <Route path="/pentesting" element={<PenetrationTesting />} />
        <Route path="/redteaming" element={<RedTeaming />} />
        <Route path="/exploitdev" element={<ExploitDevelopment />} />
        <Route path="/vulnscan" element={<VulnerabilityScan />} />
        
        {/* Security - Defensive */}
        <Route path="/vulnassess" element={<VulnerabilityAssessment />} />
        <Route path="/cloudsec" element={<CloudSecurity />} />
        <Route path="/purpleteam" element={<PurpleTeaming />} />
        <Route path="/siem" element={<SIEMMonitoring />} />
        <Route path="/threatintel" element={<ThreatIntel />} />
        
        {/* Security - Compliance */}
        <Route path="/compliance" element={<ComplianceReports />} />
        <Route path="/auditlogs" element={<AuditLogs />} />
        <Route path="/soc2" element={<SOC2 />} />
        <Route path="/pci" element={<PCIDSS />} />
        
        {/* Infrastructure */}
        <Route path="/api" element={<APIAccess />} />
        <Route path="/sshkeys" element={<SSHKeys />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/monitoring" element={<Monitoring />} />
        
        {/* System */}
        <Route path="/settings" element={<Settings />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/users/:userId" element={<UserDetails />} />
        
        {/* News & Content */}
        <Route path="/articles" element={<Articles />} />
        <Route path="/categories" element={<div className="p-8 text-ghost-white">Categories Page</div>} />
        <Route path="/authors" element={<div className="p-8 text-ghost-white">Authors Page</div>} />
        <Route path="/newsletters" element={<div className="p-8 text-ghost-white">Newsletters Page</div>} />
        <Route path="/rss" element={<div className="p-8 text-ghost-white">RSS Feeds Page</div>} />
        <Route path="/media" element={<div className="p-8 text-ghost-white">Media Library Page</div>} />
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