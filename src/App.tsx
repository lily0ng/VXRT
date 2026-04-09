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
import { Images } from './portal/pages/Images';
import { Infrastructure } from './portal/pages/Infrastructure';
import { ServiceOfferings } from './portal/pages/ServiceOfferings';
import { Configuration } from './portal/pages/Configuration';
import { Tools } from './portal/pages/Tools';
import { Quota } from './portal/pages/Quota';

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
        
        {/* Images */}
        <Route path="/images" element={<Images />} />
        <Route path="/templates" element={<div className="p-8 text-ghost-white">Templates Page</div>} />
        <Route path="/isos" element={<div className="p-8 text-ghost-white">ISOs Page</div>} />
        <Route path="/k8s-isos" element={<div className="p-8 text-ghost-white">Kubernetes ISOs Page</div>} />
        
        {/* Infrastructure */}
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/zones" element={<div className="p-8 text-ghost-white">Zones Page</div>} />
        <Route path="/pods" element={<div className="p-8 text-ghost-white">Pods Page</div>} />
        <Route path="/clusters" element={<div className="p-8 text-ghost-white">Clusters Page</div>} />
        <Route path="/hosts" element={<div className="p-8 text-ghost-white">Hosts Page</div>} />
        <Route path="/primary-storage" element={<div className="p-8 text-ghost-white">Primary Storage Page</div>} />
        <Route path="/secondary-storage" element={<div className="p-8 text-ghost-white">Secondary Storage Page</div>} />
        <Route path="/infra-object-storage" element={<div className="p-8 text-ghost-white">Object Storage Page</div>} />
        <Route path="/system-vms" element={<div className="p-8 text-ghost-white">System VMs Page</div>} />
        <Route path="/virtual-routers" element={<div className="p-8 text-ghost-white">Virtual Routers Page</div>} />
        <Route path="/internal-lb" element={<div className="p-8 text-ghost-white">Internal LB Page</div>} />
        <Route path="/management-servers" element={<div className="p-8 text-ghost-white">Management Servers Page</div>} />
        <Route path="/cpu-sockets" element={<div className="p-8 text-ghost-white">CPU Sockets Page</div>} />
        <Route path="/db-usage-server" element={<div className="p-8 text-ghost-white">DB/Usage Server Page</div>} />
        <Route path="/infra-alerts" element={<div className="p-8 text-ghost-white">Alerts Page</div>} />
        
        {/* Service Offerings */}
        <Route path="/service-offerings" element={<ServiceOfferings />} />
        <Route path="/compute-offerings" element={<div className="p-8 text-ghost-white">Compute Offerings Page</div>} />
        <Route path="/system-offerings" element={<div className="p-8 text-ghost-white">System Offerings Page</div>} />
        <Route path="/disk-offerings" element={<div className="p-8 text-ghost-white">Disk Offerings Page</div>} />
        <Route path="/backup-offerings" element={<div className="p-8 text-ghost-white">Backup Offerings Page</div>} />
        <Route path="/network-offerings" element={<div className="p-8 text-ghost-white">Network Offerings Page</div>} />
        <Route path="/vpc-offerings" element={<div className="p-8 text-ghost-white">VPC Offerings Page</div>} />
        
        {/* Configuration */}
        <Route path="/global-settings" element={<Configuration />} />
        <Route path="/ldap" element={<div className="p-8 text-ghost-white">LDAP Configuration Page</div>} />
        <Route path="/oauth" element={<div className="p-8 text-ghost-white">OAuth Configuration Page</div>} />
        <Route path="/backup-repo" element={<div className="p-8 text-ghost-white">Backup Repository Page</div>} />
        <Route path="/hypervisor" element={<div className="p-8 text-ghost-white">Hypervisor Capabilities Page</div>} />
        <Route path="/os-categories" element={<div className="p-8 text-ghost-white">Guest OS Categories Page</div>} />
        <Route path="/guest-os" element={<div className="p-8 text-ghost-white">Guest OS Page</div>} />
        <Route path="/os-mappings" element={<div className="p-8 text-ghost-white">Guest OS Mappings Page</div>} />
        <Route path="/gpu-types" element={<div className="p-8 text-ghost-white">GPU Card Types Page</div>} />
        
        {/* Quota */}
        <Route path="/quota-summary" element={<Quota />} />
        <Route path="/tariff" element={<div className="p-8 text-ghost-white">Tariff Page</div>} />
        <Route path="/template-type" element={<div className="p-8 text-ghost-white">Template Type Page</div>} />
        
        {/* Tools */}
        <Route path="/tools" element={<Tools />} />
        <Route path="/comments" element={<div className="p-8 text-ghost-white">Comments Page</div>} />
        <Route path="/usage" element={<div className="p-8 text-ghost-white">Usage Page</div>} />
        <Route path="/import-export" element={<div className="p-8 text-ghost-white">Import-Export Instances Page</div>} />
        <Route path="/import-volumes" element={<div className="p-8 text-ghost-white">Import Data Volumes Page</div>} />
        <Route path="/webhooks" element={<div className="p-8 text-ghost-white">Webhooks Page</div>} />
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