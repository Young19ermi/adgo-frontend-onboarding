import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MyFormComponent from "./components/MyFormComponent"; // Adjust the path based on your folder structure

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <MyFormComponent />
  </QueryClientProvider>
);

export default App;
