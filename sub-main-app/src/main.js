import "./public-path";
import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { registerMicroApps, start } from "qiankun";
import App from "./App.vue";
import routes from "./router";
import store from "./store";

let router = null;
let instance = null;
let history = null;
let flag = false;

function render(props = {}) {
  const { container } = props;
  history = createWebHistory(
    window.__POWERED_BY_QIANKUN_PARENT__ ? "/app-qiankun" : "/"
  );
  router = createRouter({
    history,
    routes,
  });
  const childRoute = ["/app-vue-history"];
  const isChildRoute = (path) =>
    childRoute.some((item) => path.startsWith(item));
  const rawAppendChild = HTMLHeadElement.prototype.appendChild;
  const rawAddEventListener = window.addEventListener;

  router.beforeEach((to, from, next) => {
    // 从子项目跳转到主项目
    if (isChildRoute(from.path) && !isChildRoute(to.path)) {
      HTMLHeadElement.prototype.appendChild = rawAppendChild;
      window.addEventListener = rawAddEventListener;
    }
    next();
  });

  instance = createApp(App);
  instance.use(router);
  instance.use(store);
  instance.mount(container ? container.querySelector("#app") : "#app");

  if (!flag) {
    registerMicroApps([
      {
        name: "app-vue-hash",
        entry: "http://localhost:7105",
        container: "#subAppContainer",
        activeRule: window.__POWERED_BY_QIANKUN_PARENT__
          ? "/app-qiankun/app-vue-history/sub-app-1"
          : "/app-vue-history/sub-app-1",
        props: { data: { a: 1 } },
      },
      {
        name: "app-vue-history",
        entry: "http://localhost:7106",
        container: "#subAppContainer",
        activeRule: window.__POWERED_BY_QIANKUN_PARENT__
          ? "/app-qiankun/app-vue-history/sub-app-2"
          : "/app-vue-history/sub-app-2",
        props: { a: 1 },
      },
    ]);

    start();
    flag = true;
  }
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log("%c ", "color: green;", "vue3.0 app bootstraped");
}

function storeTest(props) {
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) =>
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
      true
    );
  props.setGlobalState &&
    props.setGlobalState({
      ignore: props.name,
      user: {
        name: props.name,
      },
    });
}

export async function mount(props) {
  storeTest(props);
  render(props);
  instance.config.globalProperties.$onGlobalStateChange =
    props.onGlobalStateChange;
  instance.config.globalProperties.$setGlobalState = props.setGlobalState;
}

export async function unmount() {
  instance.unmount();
  instance._container.innerHTML = "";
  instance = null;
  router = null;
  history.destroy();
}
