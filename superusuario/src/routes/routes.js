import AppHeader from "../components/AppHeader.vue";
import AppHome from "../components/AppHome.vue";

import clientes_ips from "../components/MenuItems/clientesips.vue";
import parametros from "../components/MenuItems/parametros.vue";
import cie10 from "../components/MenuItems/cie10.vue";
import cum from "../components/MenuItems/cum.vue";
import cups from "../components/MenuItems/cups.vue";
import eps from "../components/MenuItems/eps.vue";
import citas from "../components/MenuItems/citas.vue";
import laboratorios from "../components/MenuItems/laboratorios.vue";
import odontologia from "../components/MenuItems/odontologia.vue";
import fisioterapia from "../components/MenuItems/fisioterapia.vue";
export const routes = [
  {
    path: "/AppHeader",
    component: AppHeader,
    children: [
      { path: "/", component: AppHome },
      { path: "/clientes_ips", component: clientes_ips },
      { path: "/parametros", component: parametros },
      { path: "/cie10", component: cie10 },
      { path: "/cum", component: cum },
      { path: "/cups", component: cups },
      { path: "/eps", component: eps },
      { path: "/citas", component: citas },
      { path: "/laboratorios", component: laboratorios },
      { path: "/odontologia", component: odontologia },
      { path: "/fisioterapia", component: fisioterapia },
    ],
  },
];
