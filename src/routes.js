import Dashboard from "views/Dashboard.jsx";
import ChoixTypeModal from "./components/other/ChoixTypeModal"

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
];
export default routes;
