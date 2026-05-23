import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("chatIA", "routes/chat.tsx"),
  //Dummy
  route(".well-known/appspecific/com.chrome.devtools.json", "routes/dummy.tsx"),
] satisfies RouteConfig;
