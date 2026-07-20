// hooks/useGames.ts

import { useQuery } from "@tanstack/react-query";
import { getGames } from "../api/gamesApi";


export function useGames() {
  return useQuery({
    queryKey: ["games"],
    queryFn: getGames,
  });
}