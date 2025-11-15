// lib/api-winners.ts
import { WinnersResponse } from "@/types/winners"

const BASE_URL = "https://api.olympcenter.uz/api/winners/";

export async function getWinners(url: string = BASE_URL): Promise<WinnersResponse> {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    throw new Error("Failed to fetch winners");
  }

  return res.json();
}
