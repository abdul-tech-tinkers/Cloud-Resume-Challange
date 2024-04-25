import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme, ThemePanel } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

var queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Theme appearance="dark" accentColor="ruby">
        <App />
        <ThemePanel />
      </Theme>
    </QueryClientProvider>
  </React.StrictMode>
);
