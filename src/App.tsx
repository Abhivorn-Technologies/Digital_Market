import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner, toast } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { ModalProvider } from "./context/ModalContext";
import { BookDemoModal } from "./components/BookDemoModal";
import { GreetingModal } from "./components/GreetingModal";
import { WhatsAppButton } from "./components/WhatsAppButton";

const queryClient = new QueryClient();

import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedScaleNow');
    if (hasVisited) {
      toast.success("Welcome back to Scale Now!", {
        description: "We're glad to see you again. How can we help you grow today?",
        duration: 5000,
        position: 'bottom-left',
      });
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner expand={false} richColors closeButton />
          <BookDemoModal />
          <GreetingModal />
          <WhatsAppButton />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </ModalProvider>
    </QueryClientProvider>
  );
};

export default App;
