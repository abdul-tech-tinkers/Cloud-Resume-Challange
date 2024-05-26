import React from "react";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routers.tsx";
import useThemeStore from "./stores/ThemeStore.ts";
var queryClient = new QueryClient();
function App() {
  const { theme } = useThemeStore();
  //console.log(data);

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Theme appearance={theme} accentColor="ruby">
          <RouterProvider router={router} />
        </Theme>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
