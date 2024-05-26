import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routers.tsx";

var queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme appearance="light" accentColor="ruby">
        {/* <App />
        <ThemePanel /> */}
        <RouterProvider router={router} />
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>
);
