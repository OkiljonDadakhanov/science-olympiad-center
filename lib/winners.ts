export const getPlaceColor = (place: string) => {
  if (place === "Gold") return "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
  if (place === "Silver") return "bg-gray-500/10 text-gray-700 border-gray-500/20"
  if (place === "Bronze") return "bg-orange-500/10 text-orange-700 border-orange-500/20"
  return "bg-primary/10 text-primary border-primary/20"
}
