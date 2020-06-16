import Dashboard from "views/Dashboard.jsx";
import ChoixTypeModal from "./components/Modal/ChoixTypeModal"
import HelpModal from "components/Modal/HelpModal";
import SettingModal from "components/Modal/SettingModal";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-ruler-pencil",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/choixTypeModal",
    name: "Choix Type",
    icon: "nc-icon nc-bell-55",
    component: ChoixTypeModal,
    layout: "/admin",
    affiche: false
  },
  {
    path: "/HelpModal",
    name: "Help",
    icon: "nc-icon nc-bell-55",
    component: HelpModal,
    layout: "/admin",
    affiche: false
  },
  {
    path: "/SettingModal",
    name: "Help",
    icon: "nc-icon nc-bell-55",
    component: SettingModal,
    layout: "/admin",
    affiche: false
  },
];
export default routes;
