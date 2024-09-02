import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostForm from "../components/PostForm";

const queryClient = new QueryClient();

const MyReactQueryPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h1>React Query Task</h1>
        <PostForm />
      </div>
    </QueryClientProvider>
  );
};

export default MyReactQueryPage;
