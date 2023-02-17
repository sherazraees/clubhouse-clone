import "./App.css";
import PlanLayout from "./Layouts/PlanLayout";
import Welcome from "./pages/Welcome";
import PhoneConfirmation from "./Layouts/PhoneConfirmation";
import CodeConfirmation from "./pages/CodeConfirmation";
import AllowNotification from "./pages/AllowNotification";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  BrowserRouter as Router,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import AppLayout from "./Layouts/AppLayout";

function App() {
  return (
    <Router>
      <PlanLayout>
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/invite" element={<PhoneConfirmation />} />
          <Route exact path="/code_confirm" element={<CodeConfirmation />} />
          <Route
            exact
            path="/allow_notification"
            element={<AllowNotification />}
          />
        </Routes>
      </PlanLayout>
      <AppLayout>
        <Routes>
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </AppLayout>
    </Router>
  );
}

export default App;

<Routes exact path={["/home"]}>
  <AppLayout>
    <Routes>
      <Route exact path="/home" component={<Home />} />
    </Routes>
  </AppLayout>
</Routes>;
