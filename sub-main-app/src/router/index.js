const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "@/views/About"),
  },
  {
    path: "/app-vue-history",
    name: "MicroContainer",
    component: () =>
      import(/* webpackChunkName: "micro" */ "@/components/layout"),
    children: [
      {
        path: ":path(.*)*",
        name: "app-default",
        component: () =>
          import(/* webpackChunkName: "micro" */ "@/views/micro-sub-main"),
        meta: {
          title: "子应用-oms",
        },
      },
    ],
  },
];

export default routes;
