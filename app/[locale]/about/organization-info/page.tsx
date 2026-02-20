"use client"

import React, { useEffect, useRef } from "react"
import * as f3 from "family-chart"
import * as d3 from "d3"
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
        },
        {
          id: "dept4_staff3",
          name: "Abdusattorova Charos Abdulaziz qizi",
          role: "Lead Specialist",
          work: "3 years",
          image: "/team/charos.png",
          education: []
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

  // Support staff (report directly to Director)
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

  // Departments (heads report to Deputy Director - Davron)
  orgData.departments.forEach((dept) => {
    // Department Head - connects to Deputy Director (Davron)
    nodes.push({
      id: dept.head.id,
      fid: orgData.deputy.id, // This ensures Ishmurodov connects to Davron
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
      
      console.log("Organization chart data:", data)
      
      if (!data.nodes || data.nodes.length === 0) {
        console.error("No nodes found in organization data")
        return
      }

      // Create beautiful custom card HTML with image, name, and role
      const cardHtml = (d: any) => {
        const person = d.data
        const imgSrc = d.img || "/placeholder.png"
        const name = d.name || "Unknown"
        const role = person?.role || ""
        
        // Beautiful gradient colors based on hierarchy level
        let bgGradient = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        let borderColor = "#4a5568"
        let borderWidth = "3px"
        
        if (d.id === orgData.director.id) {
          bgGradient = "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
          borderColor = "#c53030"
          borderWidth = "4px"
        } else if (d.id === orgData.deputy.id) {
          bgGradient = "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
          borderColor = "#2c5282"
          borderWidth = "3px"
        } else if (person?.department) {
          // Department heads
          bgGradient = "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
          borderColor = "#2d5016"
          borderWidth = "3px"
        } else if (d.fid === orgData.director.id && d.id !== orgData.deputy.id) {
          // Support staff
          bgGradient = "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
          borderColor = "#7c2d12"
          borderWidth = "2px"
        } else {
          // Regular staff
          bgGradient = "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
          borderColor = "#4a5568"
          borderWidth = "2px"
        }

        return `
          <div class="org-card" style="
            background: ${bgGradient};
            border: ${borderWidth} solid ${borderColor};
            border-radius: 16px;
            padding: 16px;
            min-width: 220px;
            max-width: 240px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
            position: relative;
            overflow: hidden;
          ">
            <div style="
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              height: 4px;
              background: ${borderColor};
              opacity: 0.6;
            "></div>
            <div style="
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            ">
              <div style="
                position: relative;
                margin-bottom: 12px;
              ">
                <div style="
                  position: absolute;
                  inset: -4px;
                  background: linear-gradient(45deg, ${borderColor}, transparent);
                  border-radius: 50%;
                  opacity: 0.3;
                  z-index: -1;
                "></div>
                <img 
                  src="${imgSrc}" 
                  alt="${name}"
                  style="
                    width: 90px;
                    height: 90px;
                    border-radius: 50%;
                    border: 4px solid white;
                    object-fit: cover;
                    background: white;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                    transition: transform 0.3s ease;
                  "
                  onerror="this.src='/placeholder.png'"
                />
              </div>
              <div style="
                font-weight: 700;
                font-size: 14px;
                color: white;
                margin-bottom: 6px;
                line-height: 1.4;
                text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
                min-height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
              ">
                ${name}
              </div>
              <div style="
                font-size: 12px;
                color: rgba(255, 255, 255, 0.98);
                line-height: 1.3;
                text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
                font-weight: 500;
              ">
                ${role}
              </div>
            </div>
          </div>
        `
      }

      // Create the chart with optimized spacing
      const f3Chart = f3.createChart(chartRef.current, data)
        .setTransitionTime(1000)
        .setCardXSpacing(320)
        .setCardYSpacing(220)
        .setCardMinWidth(220)
        .setCardMinHeight(180)

      f3Chart.setCardHtml(cardHtml)

      // Set card display fields for tooltip
      f3Chart.setCardDisplay([
        ["name"],
        ["role"],
        ["work"]
      ])

      // Update tree with initial view
      f3Chart.updateTree({ initial: true })

      chartInstanceRef.current = f3Chart

      // Use d3 to enhance connection lines and add interactivity
      setTimeout(() => {
        const svg = chartRef.current?.querySelector("svg")
        if (!svg) return

        // Style connection lines with d3 for beautiful gradients and animations
        const lines = svg.querySelectorAll("line, path")
        
        lines.forEach((line: any) => {
          if (line.tagName === "line") {
            // Create gradient for lines
            const defs = svg.querySelector("defs") || d3.select(svg).append("defs").node()
            const gradientId = `gradient-${Math.random().toString(36).substr(2, 9)}`
            
            const gradient = d3.select(defs)
              .append("linearGradient")
              .attr("id", gradientId)
              .attr("x1", "0%")
              .attr("y1", "0%")
              .attr("x2", "100%")
              .attr("y2", "0%")
            
            gradient.append("stop")
              .attr("offset", "0%")
              .attr("stop-color", "#4a90e2")
              .attr("stop-opacity", 0.8)
            
            gradient.append("stop")
              .attr("offset", "50%")
              .attr("stop-color", "#7b68ee")
              .attr("stop-opacity", 0.9)
            
            gradient.append("stop")
              .attr("offset", "100%")
              .attr("stop-color", "#4a90e2")
              .attr("stop-opacity", 0.8)

            line.setAttribute("stroke", `url(#${gradientId})`)
            line.setAttribute("stroke-width", "3")
            line.setAttribute("stroke-linecap", "round")
            line.setAttribute("opacity", "0.7")
            line.setAttribute("filter", "url(#glow)")
            
            // Add hover effect
            d3.select(line)
              .on("mouseenter", function() {
                d3.select(this)
                  .transition()
                  .duration(200)
                  .attr("stroke-width", "5")
                  .attr("opacity", "1")
              })
              .on("mouseleave", function() {
                d3.select(this)
                  .transition()
                  .duration(200)
                  .attr("stroke-width", "3")
                  .attr("opacity", "0.7")
              })
          } else if (line.tagName === "path") {
            // Style paths (curved connections)
            const defs = svg.querySelector("defs") || d3.select(svg).append("defs").node()
            const gradientId = `gradient-path-${Math.random().toString(36).substr(2, 9)}`
            
            const gradient = d3.select(defs)
              .append("linearGradient")
              .attr("id", gradientId)
              .attr("x1", "0%")
              .attr("y1", "0%")
              .attr("x2", "100%")
              .attr("y2", "0%")
            
            gradient.append("stop")
              .attr("offset", "0%")
              .attr("stop-color", "#667eea")
              .attr("stop-opacity", 0.8)
            
            gradient.append("stop")
              .attr("offset", "100%")
              .attr("stop-color", "#764ba2")
              .attr("stop-opacity", 0.8)

            line.setAttribute("stroke", `url(#${gradientId})`)
            line.setAttribute("stroke-width", "3")
            line.setAttribute("fill", "none")
            line.setAttribute("stroke-linecap", "round")
            line.setAttribute("opacity", "0.7")
            
            // Add hover effect
            d3.select(line)
              .on("mouseenter", function() {
                d3.select(this)
                  .transition()
                  .duration(200)
                  .attr("stroke-width", "5")
                  .attr("opacity", "1")
              })
              .on("mouseleave", function() {
                d3.select(this)
                  .transition()
                  .duration(200)
                  .attr("stroke-width", "3")
                  .attr("opacity", "0.7")
              })
          }
        })

        // Add glow filter for lines
        const defs = svg.querySelector("defs") || d3.select(svg).append("defs").node()
        if (!svg.querySelector("#glow")) {
          const filter = d3.select(defs)
            .append("filter")
            .attr("id", "glow")
          
          filter.append("feGaussianBlur")
            .attr("stdDeviation", "3")
            .attr("result", "coloredBlur")
          
          const feMerge = filter.append("feMerge")
          feMerge.append("feMergeNode").attr("in", "coloredBlur")
          feMerge.append("feMergeNode").attr("in", "SourceGraphic")
        }

        // Enhanced hover effects for cards
        const cards = chartRef.current?.querySelectorAll(".org-card")
        cards?.forEach((card: any) => {
          const img = card.querySelector("img")
          
          card.addEventListener("mouseenter", function(this: HTMLElement) {
            this.style.transform = "scale(1.1) translateY(-5px)"
            this.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3), 0 10px 20px rgba(0, 0, 0, 0.2)"
            this.style.zIndex = "1000"
            this.style.transition = "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)"
            
            if (img) {
              img.style.transform = "scale(1.1)"
            }
          })
          
          card.addEventListener("mouseleave", function(this: HTMLElement) {
            this.style.transform = "scale(1) translateY(0)"
            this.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)"
            this.style.zIndex = "1"
            
            if (img) {
              img.style.transform = "scale(1)"
            }
          })
        })
      }, 500)

      return () => {
        if (chartInstanceRef.current) {
          chartInstanceRef.current = null
        }
      }
    } catch (error) {
      console.error("Error creating organization chart:", error)
    }
  }, [])

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Organizational Structure
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Science Olympiads Center under the Agency for Specialized Educational Institutions
          </p>
        </div>

        {/* Chart Container */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 overflow-hidden border border-gray-200">
          <style jsx global>{`
            #OrganizationChart {
              width: 100%;
              height: 1000px;
              min-height: 900px;
              margin: auto;
              background: linear-gradient(135deg, #f7fafc 0%, #edf2f7 50%, #e2e8f0 100%);
              color: #1a202c;
              position: relative;
              border-radius: 12px;
              overflow: hidden;
            }
            #OrganizationChart::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: 
                radial-gradient(circle at 20% 50%, rgba(79, 70, 229, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.05) 0%, transparent 50%);
              pointer-events: none;
            }
            #OrganizationChart svg {
              width: 100%;
              height: 100%;
            }
            #OrganizationChart .org-card {
              filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
              transition: filter 0.3s ease;
            }
            #OrganizationChart .org-card:hover {
              filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.25));
            }
          `}</style>
          <div
            ref={chartRef}
            id="OrganizationChart"
            className="f3"
          />
        </div>

        {/* Instructions */}
        <div className="mt-8 max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">✨</span>
            Interactive Features
          </h3>
          <ul className="text-sm text-blue-800 space-y-2 list-none">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Hover over cards</strong> to see enhanced details and animations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Click and drag</strong> to pan around the organizational chart</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Mouse wheel</strong> to zoom in and out</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Beautiful gradient lines</strong> connect team members showing reporting relationships</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-1">•</span>
              <span><strong>Color-coded cards</strong> indicate hierarchy levels (Director, Deputy, Department Heads, Staff)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
