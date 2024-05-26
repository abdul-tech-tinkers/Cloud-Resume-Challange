import React, { useEffect } from "react";
import "./index.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routers.tsx";
import useThemeStore from "./stores/ThemeStore.ts";
import useUpdateVisitorCount from "./hooks/useUpdateVisitorCount.ts";
var queryClient = new QueryClient();
function App() {
  const { theme } = useThemeStore();


  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <Theme appearance={theme} accentColor="ruby">
          <RouterProvider router={router} />
          <VisitorCount />
        </Theme>
      </QueryClientProvider>
    </React.StrictMode>
  );
}


const VisitorCount = () => {
  const { mutate } = useUpdateVisitorCount();
  useEffect(() => {
    mutate();
  }, []); // updates the visitor count on every render

  return null;
}
export default App;
