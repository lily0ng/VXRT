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
export function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Auth Routes */}
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />

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
    </BrowserRouter>);

}