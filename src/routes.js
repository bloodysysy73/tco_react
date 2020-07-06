import Dashboard from "views/Dashboard.jsx";
import ChoixTypeModalA from "./components/Modal/ChoixTypeModalA"
import HelpModal from "components/Modal/HelpModal";
import SettingModal from "components/Modal/SettingModal";
import Parametres from "components/Modal/Parametres";
import ChoixTypeModalB from "./components/Modal/ChoixTypeModalB";
import About from "views/About.jsx"
import Informations from "views/Informations";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-ruler-pencil",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/about",
    name: "About",
    icon: "nc-icon nc-compass-05",
    component: About,
    layout: "/admin",
    affiche: true
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
  {
    path: "/informations",
    name: "Informations",
    icon: "nc-icon nc-badge",
    component: Informations,
    layout: "/admin",
  },
];
export default routes;
