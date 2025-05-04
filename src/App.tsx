
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import ClientList from "./pages/ClientList";
import ClientDetail from "./pages/ClientDetail";
import NewClient from "./pages/NewClient";
import VisitList from "./pages/VisitList";
import VisitDetail from "./pages/VisitDetail";
import NewVisit from "./pages/NewVisit";
import NotesPage from "./pages/NotesPage";
import CalendarPage from "./pages/CalendarPage";
import NotFound from "./pages/NotFound";

const App = () => {
  // Move QueryClient inside component to ensure proper React context
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout><Dashboard /></Layout>} />
            <Route path="/clients" element={<Layout><ClientList /></Layout>} />
            <Route path="/clients/new" element={<Layout><NewClient /></Layout>} />
            <Route path="/clients/:id" element={<Layout><ClientDetail /></Layout>} />
            <Route path="/visits" element={<Layout><VisitList /></Layout>} />
            <Route path="/visits/new" element={<Layout><NewVisit /></Layout>} />
            <Route path="/visits/:id" element={<Layout><VisitDetail /></Layout>} />
            <Route path="/notes" element={<Layout><NotesPage /></Layout>} />
            <Route path="/calendar" element={<Layout><CalendarPage /></Layout>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
