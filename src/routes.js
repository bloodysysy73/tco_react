import Dashboard from "views/Dashboard.jsx";
import ChoixTypeModalA from "./components/Modal/ChoixTypeModalA"
import HelpModal from "components/Modal/HelpModal";
import SettingModal from "components/Modal/SettingModal";
import Parametres from "components/Modal/Parametres";
import ChoixTypeModalB from "components/Modal/ChoixTypeModalB";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-ruler-pencil",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/choixTypeModalA",
    name: "Choix Type",
    icon: "nc-icon nc-bell-55",
    component: ChoixTypeModalA,
    layout: "/admin",
    affiche: false
  },
  {
    path: "/choixTypeModalB",
    name: "Choix Type",
    icon: "nc-icon nc-bell-55",
    component: ChoixTypeModalB,
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
  {
    path: "/Parametres",
    name: "Choix Type",
    icon: "nc-icon nc-bell-55",
    component: Parametres,
    layout: "/admin",
    affiche: false
  },
];
export default routes;
