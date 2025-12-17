"use client"

import React, { useEffect, useRef } from "react"
import * as f3 from "family-chart"
import "family-chart/styles/family-chart.css"

// Organizational data structure
const orgData = {
  director: {
    id: "director",
    name: "Shermatov Turaboy Yusupboevich",
    role: "Director",
    work: "14 years",
    image: "/tree/torabek.jpg",
    education: [
      "2012 – Bachelor's degree, National University of Uzbekistan",
      "2015 – Master's degree, National University of Uzbekistan",
      "2017 – International Workshop IWANN-7, Turkey",
      "2021 – International Program for 'School Leaders,' University of Cambridge",
      "2023 – 'Management' Training Course, Academy of Public Administration under the President of the Republic of Uzbekistan",
      "2024 – Specialized Training Course, Academy of Public Administration under the President of the Republic of Uzbekistan"
    ]
  },
  deputy: {
    id: "deputy",
    name: "Tuxtayev Davron Dilmurot ugli",
    role: "Deputy Director",
    work: "5 years",
    image: "/tree/tukhtaev.jpg",
    education: ["2014 – National University of Uzbekistan"]
  },
  departments: [
    {
      id: "dept1",
      name: "Department for Organizing Local Subject Olympiads and Competitions",
      head: {
        id: "dept1_head",
        name: "Ishmuradov Shovhiddin Ilhomovich",
        role: "Head of Department",
        work: "21 years",
        image: "/team/shovqiddin.jpg",
        education: ["2004 – Navoi State Pedagogical Institute"]
      },
      staff: [
        {
          id: "dept1_staff1",
          name: "Ibroghimov Mirzokhid Isroilovich",
          role: "Chief Specialist",
          work: "29 years",
          image: "/tree/mirzohid.jpg",
          education: ["1996 – Tashkent State University"]
        },
        {
          id: "dept1_staff2",
          name: "Ergashov Abulmansur Abduvokhidovich",
          role: "Chief Specialist",
          work: "9 years",
          image: "/tree/abdulmansur.jpg",
          education: ["2016 – Tashkent State Pedagogical University named after Nizami"]
        },
        {
          id: "dept1_staff3",
          name: "Ravshanov Rasuljon Rustamovich",
          role: "Leading Specialist",
          work: "5 years",
          image: "/tree/rasuljon.jpg",
          education: ["2021 – Navoi State Pedagogical Institute"]
        },
        {
          id: "dept1_staff4",
          name: "Karimova Shahnóza Abdurasul qizi",
          role: "Leading Specialist",
          work: "3 years",
          image: "/tree/shaxnoza.jpg",
          education: [
            "2019 – Tashkent State University of Uzbek Language and Literature named after Alisher Navoi (Bachelor's degree)",
            "2021 – Tashkent State University of Uzbek Language and Literature named after Alisher Navoi (Master's degree)"
          ]
        }
      ]
    },
    {
      id: "dept2",
      name: "Department for Selecting and Preparing Students for International Science Olympiads",
      head: {
        id: "dept2_head",
        name: "Tuychiev Fayyoz Farhod ugli",
        role: "Head of Department",
        work: "4 years",
        image: "/team/fayyoz.jpg",
        education: [
          "2021 – V.I. Ulyanov (Lenin) Saint Petersburg State Electrotechnical University 'LETI'",
          "2023 – Tashkent State Technical University named after I.A. Karimov (Master's degree)"
        ]
      },
      staff: [
        {
          id: "dept2_staff1",
          name: "Rustamov Sherzod Allanazarovich",
          role: "Chief Specialist",
          work: "12 years",
          image: "/tree/sherzod.jpg",
          education: ["2021 – Berdakh State University of Karakalpakstan"]
        },
        {
          id: "dept2_staff2",
          name: "Kalandarova Mavjuda Obidjonovna",
          role: "Leading Specialist",
          work: "25 years",
          image: "/tree/mavjuda.jpg",
          education: ["2024 – Gulistan State University"]
        },
        {
          id: "dept2_staff3",
          name: "Toirova Ruhsora Khurshid kizi",
          role: "Leading Specialist",
          work: "1 year",
          image: "/tree/ruxsora.jpg",
          education: ["2025 – Yangi Uzbekistan University"]
        }
      ]
    },
    {
      id: "dept3",
      name: "Department for Preparing Olympiad Materials, Monitoring and Organizing Online Olympiads",
      head: {
        id: "dept3_head",
        name: "Jumaev Tursunboy Khusen ugli",
        role: "Head of Department",
        work: "7 years",
        image: "/team/tursunboy.jpg",
        education: [
          "2018 – Bukhara State University",
          "2022 – National University of Uzbekistan"
        ]
      },
      staff: [
        {
          id: "dept3_staff1",
          name: "Shamsiyev Davron Asliddinovich",
          role: "Chief Specialist",
          work: "5 years",
          image: "/tree/davron.jpg",
          education: ["2024 – Tashkent State University of Economics"]
        },
        {
          id: "dept3_staff2",
          name: "Boykobilov Dilshod Bahriddinovich",
          role: "Leading Specialist",
          work: "8 years",
          image: "/tree/dilshod.jpg",
          education: [
            "2015 – Jizzakh State Pedagogical Institute (Bachelor's degree)",
            "2017 – Gulistan State University (Master's degree)"
          ]
        }
      ]
    },
    {
      id: "dept4",
      name: "Department for Developing Methodological Guidelines and Educational Manuals and Working with Trainer-Teachers",
      head: {
        id: "dept4_head",
        name: "Tadjieva Nargiza Rustamovna",
        role: "Head of Department",
        work: "21 years",
        image: "/tree/nargiza.jpg",
        education: [
          "2005 – Mukimiy Kokand State Pedagogical Institute (Bachelor's degree)",
          "2023 – Al-Bukhari Oriental University (Master's degree)"
        ]
      },
      staff: [
        {
          id: "dept4_staff1",
          name: "Djumabayeva Janar Muratbayeva",
          role: "Leading Specialist",
          work: "20 years",
          image: "/tree/janar.jpg",
          education: [
            "2004 – Karakalpakstan State University",
            "2025 – Student at the Higher School of Business and Entrepreneurship under the Cabinet of Ministers"
          ]
        },
        {
          id: "dept4_staff2",
          name: "Soatova Guljakhon Mukhammatovna",
          role: "Leading Specialist",
          work: "18 years",
          image: "/tree/guljahon.jpg",
          education: [
            "2010 – Tashkent State University of World Languages",
            "2025 – University of Digital Economy and Agrotechnologies"
          ]
        }
      ]
    }
  ],
  support: [
    {
      id: "support1",
      name: "Aripov Jahongir Alimovich",
      role: "Chief HR Specialist",
      work: "14 years",
      image: "/tree/jahongir.jpg",
      education: ["2010 – Tashkent State Pedagogical University named after Nizami"]
    },
    {
      id: "support2",
      name: "Choliev Abduvali Abdulasam ugli",
      role: "Head of Accounting Department",
      work: "10 years",
      image: "/tree/bugaltr.jpg",
      education: ["2015 – Jizzakh Polytechnic Institute"]
    },
    {
      id: "support3",
      name: "Makhamatov Sardor Zoirovich",
      role: "Public Procurement Specialist",
      work: "7 years",
      image: "/tree/sardor.jpg",
      education: ["2017 – Tashkent University of Information Technologies named after Muhammad al-Khwarizmi"]
    },
    {
      id: "support4",
      name: "Turaeva Tamanno Ochilovna",
      role: "Head of Digital Media Department",
      work: "5 years",
      image: "/team/tamanno.jpg",
      education: ["2022 – Uzbekistan State University of World Languages"]
    },
    {
      id: "support5",
      name: "Ergashboev Jumanazar Abdunabi ugli",
      role: "Specialist",
      work: "8 years",
      image: "/tree/jumanazar.jpg",
      education: ["2024 – Moscow University of Finance and Industry"]
    },
    {
      id: "support6",
      name: "Uloshov Abumuslim Komil ugli",
      role: "Specialist",
      work: "4 years",
      image: "/tree/muslim.jpg",
      education: ["2022 – National University of Uzbekistan"]
    }
  ]
}

  // Helper function to detect gender from name
  function detectGender(name: string): "M" | "F" {
    const nameLower = name.toLowerCase()
    // Uzbek female name indicators
    if (
      nameLower.includes("qizi") ||
      nameLower.includes("kizi") ||
      nameLower.endsWith("ovna") ||
      nameLower.endsWith("bayeva") ||
      nameLower.endsWith("yeva") ||
      nameLower.includes("tamanno") ||
      nameLower.includes("nargiza") ||
      nameLower.includes("mavjuda") ||
      nameLower.includes("ruhsora") ||
      nameLower.includes("ruxsora") ||
      nameLower.includes("shahnóza") ||
      nameLower.includes("shahnoza") ||
      nameLower.includes("janar") ||
      nameLower.includes("guljakhon")
    ) {
      return "F"
    }
    return "M"
  }

  // Convert org data to family-chart format
function convertToFamilyChartData() {
  const nodes: any[] = []

  // Director (root)
  nodes.push({
    id: orgData.director.id,
    fid: null,
    mid: null,
    pids: [],
    name: orgData.director.name,
    gender: detectGender(orgData.director.name),
    img: orgData.director.image,
    data: {
      role: orgData.director.role,
      work: orgData.director.work,
      education: orgData.director.education
    }
  })

  // Deputy Director (reports to Director)
  nodes.push({
    id: orgData.deputy.id,
    fid: orgData.director.id,
    mid: null,
    pids: [orgData.director.id],
    name: orgData.deputy.name,
    gender: detectGender(orgData.deputy.name),
    img: orgData.deputy.image,
    data: {
      role: orgData.deputy.role,
      work: orgData.deputy.work,
      education: orgData.deputy.education
    }
  })

  // Support staff (report to Director)
  orgData.support.forEach((person) => {
    nodes.push({
      id: person.id,
      fid: orgData.director.id,
      mid: null,
      pids: [orgData.director.id],
      name: person.name,
      gender: detectGender(person.name),
      img: person.image,
      data: {
        role: person.role,
        work: person.work,
        education: person.education
      }
    })
  })

  // Departments (heads report to Deputy Director)
  orgData.departments.forEach((dept) => {
    // Department Head - connects to Deputy Director (Davron)
    nodes.push({
      id: dept.head.id,
      fid: orgData.deputy.id,
      mid: null,
      pids: [orgData.deputy.id],
      name: dept.head.name,
      gender: detectGender(dept.head.name),
      img: dept.head.image,
      data: {
        role: dept.head.role,
        work: dept.head.work,
        education: dept.head.education,
        department: dept.name
      }
    })

    // Department Staff (report to Department Head)
    dept.staff.forEach((staff) => {
      nodes.push({
        id: staff.id,
        fid: dept.head.id,
        mid: null,
        pids: [dept.head.id],
        name: staff.name,
        gender: detectGender(staff.name),
        img: staff.image,
        data: {
          role: staff.role,
          work: staff.work,
          education: staff.education,
          department: dept.name
        }
      })
    })
  })

  return { nodes }
}

export default function OrganizationInfoPage() {
  const chartRef = useRef<HTMLDivElement>(null)
  const chartInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!chartRef.current) return

    try {
      const data = convertToFamilyChartData()
      
      // Verify data structure
      console.log("Organization chart data:", data)
      
      if (!data.nodes || data.nodes.length === 0) {
        console.error("No nodes found in organization data")
        return
      }

      // Create custom card HTML with image, name, and role
      const cardHtml = (d: any) => {
        const person = d.data
        const imgSrc = d.img || "/placeholder.png"
        const name = d.name || "Unknown"
        const role = person?.role || ""
        
        // Different colors based on hierarchy level
        let bgGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        let borderColor = "#4a5568"
        
        if (d.id === orgData.director.id) {
          bgGradient = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          borderColor = "#c53030"
        } else if (d.id === orgData.deputy.id) {
          bgGradient = "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
          borderColor = "#2c5282"
        } else if (person?.department) {
          bgGradient = "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
          borderColor = "#2d5016"
        } else if (d.fid === orgData.director.id && d.id !== orgData.deputy.id) {
          bgGradient = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
          borderColor = "#7c2d12"
        }

        return `
          <div class="org-card" style="
            background: ${bgGradient};
            border: 3px solid ${borderColor};
            border-radius: 12px;
            padding: 12px;
            min-width: 200px;
            max-width: 220px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
          ">
            <div style="
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            ">
              <div style="
                position: relative;
                margin-bottom: 8px;
              ">
                <img 
                  src="${imgSrc}" 
                  alt="${name}"
                  style="
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    border: 3px solid white;
                    object-fit: cover;
                    background: white;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
                  "
                  onerror="this.src='/placeholder.png'"
                />
              </div>
              <div style="
                font-weight: bold;
                font-size: 13px;
                color: white;
                margin-bottom: 4px;
                line-height: 1.3;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
              ">
                ${name}
              </div>
              <div style="
                font-size: 11px;
                color: rgba(255, 255, 255, 0.95);
                line-height: 1.2;
                text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
              ">
                ${role}
              </div>
            </div>
          </div>
        `
      }

      // Create the chart
      const f3Chart = f3.createChart(chartRef.current, data)
        .setTransitionTime(800)
        .setCardXSpacing(300)
        .setCardYSpacing(200)
        .setCardMinWidth(200)
        .setCardMinHeight(150)

      f3Chart.setCardHtml(cardHtml)

      // Set card display fields (optional, for tooltip)
      f3Chart.setCardDisplay([
        ["name"],
        ["role"],
        ["work"]
      ])

      // Update tree with initial view
      f3Chart.updateTree({ initial: true })

      chartInstanceRef.current = f3Chart

      // Wait for DOM to update, then add hover effects and style connections
      setTimeout(() => {
        // Add hover effects to cards
        const cards = chartRef.current?.querySelectorAll(".org-card")
        cards?.forEach((card: any) => {
          card.addEventListener("mouseenter", function (this: HTMLElement) {
            this.style.transform = "scale(1.08)"
            this.style.boxShadow = "0 12px 24px rgba(0, 0, 0, 0.25)"
            this.style.zIndex = "1000"
            this.style.transition = "all 0.3s ease"
          })
          card.addEventListener("mouseleave", function (this: HTMLElement) {
            this.style.transform = "scale(1)"
            this.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)"
            this.style.zIndex = "1"
          })
        })

        // Style connection lines to be more visible and beautiful
        const lines = chartRef.current?.querySelectorAll("line, path")
        lines?.forEach((line: any) => {
          if (line.tagName === "line") {
            line.setAttribute("stroke", "#4a5568")
            line.setAttribute("stroke-width", "2.5")
            line.setAttribute("stroke-linecap", "round")
            line.setAttribute("opacity", "0.6")
          } else if (line.tagName === "path") {
            line.setAttribute("stroke", "#4a5568")
            line.setAttribute("stroke-width", "2.5")
            line.setAttribute("fill", "none")
            line.setAttribute("stroke-linecap", "round")
            line.setAttribute("opacity", "0.6")
          }
        })
      }, 100)

      return () => {
        if (chartInstanceRef.current) {
          // Cleanup if needed
          chartInstanceRef.current = null
        }
      }
    } catch (error) {
      console.error("Error creating organization chart:", error)
    }
  }, [])

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Organizational Structure
          </h1>
          <p className="text-lg text-gray-600">
            Science Olympiads Center under the Agency for Specialized Educational Institutions
          </p>
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-xl shadow-2xl p-6 overflow-hidden">
          <style jsx global>{`
            #OrganizationChart {
              width: 100%;
              height: 900px;
              margin: auto;
              background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%);
              color: #1a202c;
              position: relative;
              border-radius: 8px;
            }
            #OrganizationChart svg {
              width: 100%;
              height: 100%;
            }
            #OrganizationChart .org-card {
              filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
            }
            #OrganizationChart .org-card:hover {
              filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
            }
          `}</style>
          <div
            ref={chartRef}
            id="OrganizationChart"
            className="f3"
          />
        </div>

        {/* Instructions */}
        <div className="mt-8 max-w-3xl mx-auto bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Interactive Features
          </h3>
          <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
            <li>Hover over cards to see enhanced details</li>
            <li>Click and drag to pan around the organizational chart</li>
            <li>Use mouse wheel to zoom in and out</li>
            <li>Cards are connected with beautiful lines showing reporting relationships</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

