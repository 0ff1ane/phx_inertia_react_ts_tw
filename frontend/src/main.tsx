import { StrictMode } from "react";
import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import "./App.css";
import Layout from "./layouts/Layout";

// Routes without layout like "Login", "Register", "404"
const NO_LAYOUT_ROUTES = ["Login"];

createInertiaApp({
  resolve: async (name) => {
    const page = await import(`./pages/${name}.tsx`);
    page.default.layout = NO_LAYOUT_ROUTES.includes(name)
      ? undefined
      : (page) => <Layout children={page} />;
    return page;
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <StrictMode>
        <App {...props} />
      </StrictMode>,
    );
  },
});
