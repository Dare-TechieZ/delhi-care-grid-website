import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { ScrollToTop } from '@/lib/scroll-to-top';
import ErrorPage from '@/integrations/errorHandlers/ErrorPage';
import HomePage from '@/components/pages/HomePage';
import EnvironmentPage from '@/components/pages/EnvironmentPage';
import MentalWellnessPage from '@/components/pages/MentalWellnessPage';
import AIAssistantPage from '@/components/pages/AIAssistantPage';
import DashboardsPage from '@/components/pages/DashboardsPage';
import AlertsPage from '@/components/pages/AlertsPage';
import AwarenessPage from '@/components/pages/AwarenessPage';
import AboutPage from '@/components/pages/AboutPage';
import LoginPage from '@/components/pages/LoginPage';
import DemoPage from '@/components/pages/DemoPage';
import HowAIIsUsedPage from '@/components/pages/HowAIIsUsedPage';
import DelhiProblemsPage from '@/components/pages/DelhiProblemsPage';
import DataSourcesPage from '@/components/pages/DataSourcesPage';
import ResponsibleAIPage from '@/components/pages/ResponsibleAIPage';
import ImpactMetricsPage from '@/components/pages/ImpactMetricsPage';
import ImplementationPlanPage from '@/components/pages/ImplementationPlanPage';
import StakeholderMappingPage from '@/components/pages/StakeholderMappingPage';
import CitizenGuidePage from '@/components/pages/CitizenGuidePage';

// Layout component that includes ScrollToTop
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        routeMetadata: {
          pageIdentifier: 'home',
        },
      },
      {
        path: "environment",
        element: <EnvironmentPage />,
        routeMetadata: {
          pageIdentifier: 'environment',
        },
      },
      {
        path: "mental-wellness",
        element: <MentalWellnessPage />,
        routeMetadata: {
          pageIdentifier: 'mental-wellness',
        },
      },
      {
        path: "ai-assistant",
        element: <AIAssistantPage />,
        routeMetadata: {
          pageIdentifier: 'ai-assistant',
        },
      },
      {
        path: "dashboards",
        element: <DashboardsPage />,
        routeMetadata: {
          pageIdentifier: 'dashboards',
        },
      },
      {
        path: "alerts",
        element: <AlertsPage />,
        routeMetadata: {
          pageIdentifier: 'alerts',
        },
      },
      {
        path: "awareness",
        element: <AwarenessPage />,
        routeMetadata: {
          pageIdentifier: 'awareness',
        },
      },
      {
        path: "about",
        element: <AboutPage />,
        routeMetadata: {
          pageIdentifier: 'about',
        },
      },
      {
        path: "login",
        element: <LoginPage />,
        routeMetadata: {
          pageIdentifier: 'login',
        },
      },
      {
        path: "demo",
        element: <DemoPage />,
        routeMetadata: {
          pageIdentifier: 'demo',
        },
      },
      {
        path: "how-ai-is-used",
        element: <HowAIIsUsedPage />,
        routeMetadata: {
          pageIdentifier: 'how-ai-is-used',
        },
      },
      {
        path: "delhi-problems",
        element: <DelhiProblemsPage />,
        routeMetadata: {
          pageIdentifier: 'delhi-problems',
        },
      },
      {
        path: "data-sources",
        element: <DataSourcesPage />,
        routeMetadata: {
          pageIdentifier: 'data-sources',
        },
      },
      {
        path: "responsible-ai",
        element: <ResponsibleAIPage />,
        routeMetadata: {
          pageIdentifier: 'responsible-ai',
        },
      },
      {
        path: "impact-metrics",
        element: <ImpactMetricsPage />,
        routeMetadata: {
          pageIdentifier: 'impact-metrics',
        },
      },
      {
        path: "implementation-plan",
        element: <ImplementationPlanPage />,
        routeMetadata: {
          pageIdentifier: 'implementation-plan',
        },
      },
      {
        path: "stakeholder-mapping",
        element: <StakeholderMappingPage />,
        routeMetadata: {
          pageIdentifier: 'stakeholder-mapping',
        },
      },
      {
        path: "citizen-guide",
        element: <CitizenGuidePage />,
        routeMetadata: {
          pageIdentifier: 'citizen-guide',
        },
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
], {
  basename: import.meta.env.BASE_NAME,
});

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
