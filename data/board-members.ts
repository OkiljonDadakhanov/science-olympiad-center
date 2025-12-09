export interface BoardMember {
  name: string
  position: string
  background: string
  expertise: string
  experience: string
  image?: string // optional image path
}

export const boardMembers: BoardMember[] = [
  {
    name: "Tamanno To‘rayeva",
    position: "Head of the Department for Digital Media Resources and Communications",
    background:
      "Expert in media communications, public relations, and digital resource management",
    expertise:
      "Digital Media Strategy, Public Communications, Educational Media Development",
    experience: "1+ years in media management and communication strategy",
    image: "/team/tamanno.jpg",
  },
  {
    name: "Abduvali Cho‘liyev",
    position: "Head of Accounting Department",
    background:
      "Certified accountant with experience in financial reporting and budgeting",
    expertise: "Accounting, Financial Management, Audit and Compliance",
    experience: "2+ years in financial administration and auditing",
    image: "/team/abduvali.jpg",
  },
  {
    name: "Nargiza Tajiyeva",
    position:
      "Head of the Department for Developing Methodological Guidelines and Educational Materials, and Training of Instructors",
    background:
      "Specialist in teacher training and curriculum development for STEM education",
    expertise:
      "Pedagogical Innovation, Curriculum Design, Teacher Capacity Building",
    experience: "1+ years in education and methodology development",
    image: "/team/nargiza.jpg",
  },
  {
    name: "Shovxiddin Ishmuradov",
    position:
      "Head of the Department for Organizing National Science Olympiads and Competitions",
    background:
      "Coordinator of academic contests with expertise in event logistics and student engagement",
    expertise: "Olympiad Management, Academic Competitions, Event Organization",
    experience: "12+ years in academic competition administration",
    image: "/team/shovqiddin.jpg",
  },
  {
    name: "Fayyoz Tuychiyev",
    position:
      "Head of the Department for Selecting and Preparing Students for International Science Olympiads",
    background:
      "Experienced educator specializing in student preparation for international STEM competitions",
    expertise: "STEM Education, Olympiad Training, International Academic Coaching",
    experience: "1+ years in education and student mentorship",
    image: "/team/fayyoz.jpg",
  },
  {
    name: "Tursunboy Jumayev",
    position:
      "Head of the Department for Preparing Olympiad Materials, Monitoring, and Organizing Online Olympiads",
    background:
      "Expert in academic assessment systems and digital olympiad platforms",
    expertise: "E-learning Platforms, Online Olympiads, Academic Content Development",
    experience: "1+ years in education technology and assessment design",
    image: "/team/tursunboy.jpg",
  },
]
