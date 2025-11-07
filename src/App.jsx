import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Router />
    </div>
  );
}
