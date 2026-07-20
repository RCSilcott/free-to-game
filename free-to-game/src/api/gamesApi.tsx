const BASE_URL = "https://www.freetogame.com/api";

export async function getGames() {
  const response = await fetch(`${BASE_URL}/games`);

  if (!response.ok) {
    throw new Error("Failed to fetch games");
  }

  return response.json();
}