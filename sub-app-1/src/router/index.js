const routes = [
  { path: "/", redirect: { name: "home" } },
  {
    path: "/index",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
  },
];

export default routes;
