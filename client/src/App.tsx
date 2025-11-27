import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/lib/mock-auth";
import { Layout } from "@/components/layout";

import Home from "@/pages/home";
import Dashboard from "@/pages/dashboard";
import Extraction from "@/pages/extraction";
import History from "@/pages/history";
import Templates from "@/pages/templates";
import NotFound from "@/pages/not-found";

function PrivateRoute({ component: Component, ...rest }: any) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Component {...rest} /> : <Redirect to="/" />;
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        
        {/* Protected Routes */}
        <Route path="/dashboard">
          {() => <PrivateRoute component={Dashboard} />}
        </Route>
        
        <Route path="/extraction/:type">
          {() => <PrivateRoute component={Extraction} />}
        </Route>

        <Route path="/history">
          {() => <PrivateRoute component={History} />}
        </Route>

        <Route path="/templates">
          {() => <PrivateRoute component={Templates} />}
        </Route>

        {/* Settings - just redirect to dashboard for now */}
        <Route path="/settings">
          {() => <PrivateRoute component={Dashboard} />}
        </Route>

        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
