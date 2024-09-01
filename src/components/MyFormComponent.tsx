import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/api/fetchData"; // Adjust the path based on your folder structure

interface Data {
  title: string;
  body: string;
}

const MyFormComponent = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { data, isLoading, error, refetch } = useQuery<Data, Error>({
    queryKey: ["fetchData", title, body],
    queryFn: () => fetchData({ title, body }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    refetch(); // Trigger refetch when form is submitted
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Body:</label>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h1>Fetched Data</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyFormComponent;
