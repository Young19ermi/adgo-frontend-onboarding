import React from "react";
import { useMutation } from "@tanstack/react-query";

// Define the shape of the data you're sending
interface Post {
  title: string;
  body: string;
  userId: number;
}

// Define the shape of the response you expect
interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const PostForm: React.FC = () => {
  // Define the mutation function separately
  const createPost = async (newPost: Post): Promise<PostResponse> => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.json();
  };

  // Use useMutation with correct typing and configuration
  const mutation = useMutation<PostResponse, Error, Post>({
    mutationFn: createPost,
    onError: (error) => {
      console.error("Error posting data:", error);
    },
    onSuccess: (data) => {
      console.log("Post successful:", data);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = (
      e.currentTarget.elements.namedItem("title") as HTMLInputElement
    ).value;
    const body = (
      e.currentTarget.elements.namedItem("body") as HTMLInputElement
    ).value;

    mutation.mutate({
      title,
      body,
      userId: 1,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Title" required />
      <textarea name="body" placeholder="Body" required />
      <button type="submit">Submit</button>

      {mutation.isPending && <div>Posting...</div>}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && (
        <div>Posted successfully! Post ID: {mutation.data?.id}</div>
      )}
    </form>
  );
};

export default PostForm;
