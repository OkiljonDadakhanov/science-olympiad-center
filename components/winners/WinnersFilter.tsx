"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WinnersFilterProps {
  type: string
  year: string
  onTypeChange: (val: string) => void
  onYearChange: (val: string) => void
  availableYears: number[]
}

export default function WinnersFilter({ type, year, onTypeChange, onYearChange, availableYears }: WinnersFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-10 justify-center">
      <Select value={type} onValueChange={onTypeChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Olympiad Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All</SelectItem>
          <SelectItem value="MINTAQAVIY">Mintaqaviy</SelectItem>
          <SelectItem value="XALQARO">Xalqaro</SelectItem>
          <SelectItem value="NUFUZLI">Nufuzli</SelectItem>
        </SelectContent>
      </Select>

      <Select value={year} onValueChange={onYearChange}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ALL">All (year)</SelectItem>
          {availableYears.map((y) => (
            <SelectItem key={y} value={y.toString()}>
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
