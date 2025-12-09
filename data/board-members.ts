export interface BoardMember {
  name: string
  position: string
  background: string
  expertise: string
  experience: string
  education?: string[] // Education history
  image?: string // optional image path
}

export const boardMembers: BoardMember[] = [
  {
    name: "Shermatov Turaboy Yusupboevich",
    position: "Director",
    background:
      "Experienced leader in educational management and international academic programs",
    expertise:
      "Educational Leadership, International Programs, Strategic Planning",
    experience: "14 years",
    education: [
      "2012 - Bachelor's degree, National University of Uzbekistan",
      "2015 - Master's degree, National University of Uzbekistan",
      "2017 - International Workshop IWANN-7, Turkey",
      "2021 - International Program for 'School Leaders,' University of Cambridge",
      "2023 - 'Management' Training Course, Academy of Public Administration under the President of the Republic of Uzbekistan",
      "2024 - Specialized Training Course, Academy of Public Administration under the President of the Republic of Uzbekistan",
    ],
    image: "/tree/torabek.jpg",
  },
  {
    name: "Tuxtayev Davron Dilmurot ugli",
    position: "Deputy Director",
    background:
      "Dedicated educator with expertise in academic administration and student development",
    expertise: "Academic Administration, Student Development, Educational Programs",
    experience: "5 years",
    education: [
      "2014 - National University of Uzbekistan",
    ],
    image: "/tree/tukhtaev.jpg",
  },
  {
    name: "Aripov Jahongir Alimovich",
    position: "Chief HR Specialist",
    background:
      "Human resources professional with extensive experience in educational institutions",
    expertise: "Human Resources Management, Organizational Development, Staff Training",
    experience: "14 years",
    education: [
      "2010 - Tashkent State Pedagogical University named after Nizami",
    ],
    image: "/tree/jahongir.jpg",
  },
  
  {
    name: "Ishmuradov Shovhiddin Ilhomovich",
    position:
      "Head of the Department for Organizing National Science Olympiads and Competitions",
    background:
      "Coordinator of academic contests with expertise in event logistics and student engagement",
    expertise: "Olympiad Management, Academic Competitions, Event Organization",
    experience: "21 years",
    education: [
      "2004 - Navoi State Pedagogical Institute",
    ],
    image: "/team/shovqiddin.jpg",
  },
  
  {
    name: "Jumaev Tursunboy Khusen ogli",
    position:
      "Head of the Department for Preparing Olympiad Materials, Monitoring, and Organizing Online Olympiads",
    background:
      "Expert in academic assessment systems and digital olympiad platforms",
    expertise: "E-learning Platforms, Online Olympiads, Academic Content Development",
    experience: "7 years",
    education: [
      "2018 - Bukhara State University",
      "2022 - National University of Uzbekistan",
    ],
    image: "/team/tursunboy.jpg",
  },
  
  {
    name: "Tuychiev Fayyoz Farhod ugli",
    position:
      "Head of the Department for Selecting and Preparing Students for International Science Olympiads",
    background:
      "Experienced educator specializing in student preparation for international STEM competitions",
    expertise: "STEM Education, Olympiad Training, International Academic Coaching",
    experience: "4 years",
    education: [
      "2021 - V.I. Ulyanov (Lenin) Saint Petersburg State Electrotechnical University 'LETI'",
      "2023 - Tashkent State Technical University named after I.A. Karimov (Master's degree)",
    ],
    image: "/team/fayyoz.jpg",
  },
  
  {
    name: "Tadjieva Nargiza Rustamovna",
    position:
      "Head of the Department for Developing Methodological Guidelines and Educational Materials, and Training of Instructors",
    background:
      "Specialist in teacher training and curriculum development for STEM education",
    expertise:
      "Pedagogical Innovation, Curriculum Design, Teacher Capacity Building",
    experience: "21 years",
    education: [
      "2005 - Mukimiy Kokand State Pedagogical Institute (Bachelor's degree)",
      "2023 - Al-Bukhari Oriental University (Master's degree)",
    ],
    image: "/team/nargiza.jpg",
  },
  
  {
    name: "Turaeva Tamanno Ochilovna",
    position: "Head of Digital Media Department",
    background:
      "Expert in media communications, public relations, and digital resource management",
    expertise:
      "Digital Media Strategy, Public Communications, Educational Media Development",
    experience: "5 years",
    education: [
      "2022 - Uzbekistan State University of World Languages",
    ],
    image: "/team/tamanno.jpg",
  },
  
  {
    name: "Choliev Abduvali Abdulasam ugli",
    position: "Head of Accounting Department",
    background:
      "Certified accountant with experience in financial reporting and budgeting",
    expertise: "Accounting, Financial Management, Audit and Compliance",
    experience: "10 years",
    education: [
      "2015 - Jizzakh Polytechnic Institute",
    ],
    image: "/team/abduvali.jpg",
  },
  
]
