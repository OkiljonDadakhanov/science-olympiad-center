"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

interface WinnersFilterProps {
  year: string
  onYearChange: (year: string) => void
  availableYears: number[]
  
  // New filter props
  selectedMedals: string[]
  onMedalsChange: (medals: string[]) => void
  
  selectedSubjects: string[]
  onSubjectsChange: (subjects: string[]) => void
  
  olympiadType: string
  onOlympiadTypeChange: (type: string) => void
  
  // Available options from API
  availableSubjects: string[]
}

const MEDAL_OPTIONS = [
  { value: "Oltin", label: "Gold 🥇", color: "bg-yellow-100 text-yellow-800 border-yellow-300" },
  { value: "Kumush", label: "Silver 🥈", color: "bg-gray-100 text-gray-800 border-gray-300" },
  { value: "Bronza", label: "Bronze 🥉", color: "bg-orange-100 text-orange-800 border-orange-300" },
]

const OLYMPIAD_TYPES = [
  { value: "ALL", label: "All Types" },
  { value: "Mintaqaviy", label: "Regional" },
  { value: "Respublika", label: "National" },
  { value: "Xalqaro", label: "International" },
]

export default function WinnersFilter({
  year,
  onYearChange,
  availableYears,
  selectedMedals,
  onMedalsChange,
  selectedSubjects,
  onSubjectsChange,
  olympiadType,
  onOlympiadTypeChange,
  availableSubjects,
}: WinnersFilterProps) {
  
  const toggleMedal = (medal: string) => {
    if (selectedMedals.includes(medal)) {
      onMedalsChange(selectedMedals.filter(m => m !== medal))
    } else {
      onMedalsChange([...selectedMedals, medal])
    }
  }

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      onSubjectsChange(selectedSubjects.filter(s => s !== subject))
    } else {
      onSubjectsChange([...selectedSubjects, subject])
    }
  }

  const clearAllFilters = () => {
    onYearChange("ALL")
    onMedalsChange([])
    onSubjectsChange([])
    onOlympiadTypeChange("ALL")
  }

  const hasActiveFilters = year !== "ALL" || selectedMedals.length > 0 || 
                          selectedSubjects.length > 0 || olympiadType !== "ALL"

  return (
    <Card className="mb-8 shadow-sm">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Clear All
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Olympiad Type */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Olympiad Type</Label>
            <select
              value={olympiadType}
              onChange={(e) => onOlympiadTypeChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              {OLYMPIAD_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Year */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Year</Label>
            <select
              value={year}
              onChange={(e) => onYearChange(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            >
              <option value="ALL">All Years</option>
              {availableYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>

          {/* Medals */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Medals</Label>
            <div className="flex flex-wrap gap-2">
              {MEDAL_OPTIONS.map((medal) => (
                <button
                  key={medal.value}
                  onClick={() => toggleMedal(medal.value)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium border transition-all ${
                    selectedMedals.includes(medal.value)
                      ? medal.color + " shadow-sm"
                      : "bg-white border-gray-300 text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {medal.label}
                </button>
              ))}
            </div>
          </div>

          {/* Subjects */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Subjects</Label>
            <div className="max-h-24 overflow-y-auto border border-gray-200 rounded-lg p-2 space-y-1">
              {availableSubjects.length > 0 ? (
                availableSubjects.map((subject) => (
                  <label
                    key={subject}
                    className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50 rounded cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubjects.includes(subject)}
                      onChange={() => toggleSubject(subject)}
                      className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                    />
                    <span className="text-sm">{subject}</span>
                  </label>
                ))
              ) : (
                <p className="text-sm text-gray-500 px-2">No subjects available</p>
              )}
            </div>
          </div>
        </div>

        {/* Active Filters Summary */}
        {hasActiveFilters && (
          <div className="mt-4 pt-4 border-t">
            <div className="flex flex-wrap gap-2">
              {olympiadType !== "ALL" && (
                <Badge variant="secondary" className="gap-1">
                  {OLYMPIAD_TYPES.find(t => t.value === olympiadType)?.label}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => onOlympiadTypeChange("ALL")}
                  />
                </Badge>
              )}
              {year !== "ALL" && (
                <Badge variant="secondary" className="gap-1">
                  Year: {year}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => onYearChange("ALL")}
                  />
                </Badge>
              )}
              {selectedMedals.map((medal) => (
                <Badge key={medal} variant="secondary" className="gap-1">
                  {MEDAL_OPTIONS.find(m => m.value === medal)?.label}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => toggleMedal(medal)}
                  />
                </Badge>
              ))}
              {selectedSubjects.map((subject) => (
                <Badge key={subject} variant="secondary" className="gap-1">
                  {subject}
                  <X
                    className="h-3 w-3 cursor-pointer"
                    onClick={() => toggleSubject(subject)}
                  />
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}