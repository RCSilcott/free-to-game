import { useGames } from "../hooks/useGames";

export default function GameList() {
    const { data, isLoading, error } = useGames();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong.</p>;
  }

  return (
    <div>
      <h1>Game List</h1>
      <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
    </div>
  );
}