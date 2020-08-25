import Dashboard from "views/Dashboard.jsx";
import ChoixTypeModalA from "./components/Modal/ChoixTypeModalA"
import HelpModal from "components/Modal/HelpModal";
import SettingModal from "components/Modal/SettingModal";
import ChoixTypeModalB from "./components/Modal/ChoixTypeModalB";

import ChoixPiecesUsures from "./components/Modal/ChoixPiecesUsures";
import About from "views/About.jsx"
import Informations from "views/Informations";
import Calculator from "views/Calculator";



var routes = [
  {
    path: "/informations",
    name: "Informations client",
    icon: "nc-icon nc-badge",
    component: Informations,
    layout: "/admin",
  },
  
  {
    path: "/calculator",
    name: "Calculateur",
    icon: "nc-icon nc-briefcase-24",
    component: Calculator,
    layout: "/admin",
  },
  {
    path: "/about",
    name: "A propos",
    icon: "nc-icon nc-compass-05",
    component: About,
    layout: "/admin",
    affiche: true
  },
  {
    path: "/dashboard",
    name: "V2 en construction",
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
    path: "/choixPiecesUsures",
    name: "Choix Type",
    icon: "nc-icon nc-bell-55",
    component: ChoixPiecesUsures,
    layout: "/admin",
    affiche: false
  },
  {
    path: "/HelpModal",
    name: "Documentation",
    icon: "nc-icon nc-bell-55",
    component: HelpModal,
    layout: "/admin",
    affiche: false
  },
  {
    path: "/SettingModal",
    name: "Paramètres",
    icon: "nc-icon nc-bell-55",
    component: SettingModal,
    layout: "/admin",
    affiche: false
  },


];
export default routes;
