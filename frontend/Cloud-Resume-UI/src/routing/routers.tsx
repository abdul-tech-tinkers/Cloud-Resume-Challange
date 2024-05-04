import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import DashboardScreen from "../screens/DashboardScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreeen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
    children: [
      { index: true, element: <DashboardScreen /> },
      { path: "about", element: <AboutScreen /> },
      { path: "projects", element: <ProjectsScreen /> },
      { path: "contact", element: <ContactScreen /> },
    ],
  },
]);
export default router;
