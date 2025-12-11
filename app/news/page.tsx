import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight, Eye, Share2 } from "lucide-react"
import Link from "next/link"

const newsArticles = [
  {
    id: 1,
    title: "International Physics Olympiad 2024 Results",
    excerpt:
      "Our students achieved remarkable success at the International Physics Olympiad, bringing home 3 gold medals and 2 silver medals.",
    content:
      "We are proud to announce the outstanding performance of our students at the International Physics Olympiad 2024. Our team of five talented young physicists competed against the world's best, demonstrating exceptional problem-solving skills and deep understanding of physics principles.",
    date: "2024-09-15",
    author: "Dr. Sarah Johnson",
    category: "Achievement",
    image: "/physics-olympiad-medal-ceremony.jpg",
    featured: true,
    readTime: "5 min read",
    views: "1,234",
  },
  {
    id: 2,
    title: "New Mathematics Program Launch",
    excerpt:
      "We're excited to announce our advanced mathematics program designed for exceptional students preparing for international competitions.",
    content:
      "Our new advanced mathematics program represents a significant step forward in olympiad preparation. Designed by leading mathematicians and educators, this comprehensive curriculum covers all aspects of competition mathematics.",
    date: "2024-09-10",
    author: "Prof. Michael Chen",
    category: "Program",
    image: "/mathematics-classroom-students.jpg",
    featured: false,
    readTime: "3 min read",
    views: "892",
  },
  {
    id: 3,
    title: "Chemistry Lab Renovation Complete",
    excerpt:
      "Our state-of-the-art chemistry laboratory has been fully renovated with modern equipment to enhance practical learning experiences.",
    content:
      "The renovation of our chemistry laboratory marks a new era in hands-on scientific education. Equipped with the latest analytical instruments and safety systems, our students now have access to world-class facilities.",
    date: "2024-09-05",
    author: "Dr. Elena Rodriguez",
    category: "Facility",
    image: "/modern-chemistry-laboratory.jpg",
    featured: false,
    readTime: "4 min read",
    views: "567",
  },
  {
    id: 4,
    title: "Student Spotlight: Amir Karimov's Journey to IMO Gold",
    excerpt:
      "Follow the inspiring journey of Amir Karimov, who won gold at the International Mathematical Olympiad after years of dedicated training.",
    content:
      "Amir Karimov's path to IMO gold is a testament to dedication, hard work, and the power of excellent mentorship. Starting his journey at our center three years ago, Amir has consistently demonstrated exceptional mathematical talent.",
    date: "2024-08-28",
    author: "Dr. Fatima Nazarova",
    category: "Student Story",
    image: "/student-amir-karimov-imo-gold.jpg",
    featured: true,
    readTime: "6 min read",
    views: "2,156",
  },
  {
    id: 5,
    title: "International Biology Olympiad Team Selection",
    excerpt:
      "The selection process for our International Biology Olympiad team has concluded with five exceptional students chosen to represent Uzbekistan.",
    content:
      "After rigorous testing and evaluation, we have selected our strongest team yet for the International Biology Olympiad. These five students have demonstrated exceptional knowledge in molecular biology, genetics, and ecology.",
    date: "2024-08-20",
    author: "Dr. Rustam Abdullayev",
    category: "Team Selection",
    image: "/biology-team-selection-ceremony.jpg",
    featured: false,
    readTime: "4 min read",
    views: "743",
  },
  {
    id: 6,
    title: "Partnership with Leading Universities Announced",
    excerpt:
      "We've established partnerships with top universities worldwide to provide our graduates with enhanced opportunities for higher education.",
    content:
      "Our new partnerships with prestigious universities in the US, Europe, and Asia will open doors for our students. These collaborations include scholarship opportunities, research programs, and direct admission pathways.",
    date: "2024-08-15",
    author: "Dr. Alisher Tashkentov",
    category: "Partnership",
    image: "/university-partnership-signing.jpg",
    featured: false,
    readTime: "5 min read",
    views: "1,089",
  },
]

const categories = ["All", "Achievement", "Program", "Facility", "Student Story", "Team Selection", "Partnership"]

export default function NewsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Creative News Background */}
      <div 
        className="fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='news' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Crect x='10' y='10' width='40' height='30' rx='2' fill='none' stroke='%23007bff' stroke-width='1.5'/%3E%3Cline x1='15' y1='20' x2='45' y2='20' stroke='%23007bff' stroke-width='1'/%3E%3Cline x1='15' y1='28' x2='40' y2='28' stroke='%23007bff' stroke-width='1'/%3E%3Cline x1='15' y1='35' x2='35' y2='35' stroke='%23007bff' stroke-width='1'/%3E%3Ccircle cx='60' cy='25' r='8' fill='%23ff6b00'/%3E%3Cpath d='M 55 25 L 58 28 L 65 20' stroke='white' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3Crect x='70' y='15' width='20' height='25' rx='2' fill='none' stroke='%2300aaff' stroke-width='1.5'/%3E%3Cline x1='75' y1='22' x2='85' y2='22' stroke='%2300aaff' stroke-width='1'/%3E%3Cline x1='75' y1='30' x2='82' y2='30' stroke='%2300aaff' stroke-width='1'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23news)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white/80 to-purple-50/70 z-[1]" />
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 relative">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Latest <span className="text-primary">News</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance leading-relaxed">
                Stay updated with the latest achievements, announcements, and developments from the Science Olympiad
                Center.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-b">
          <div className="container">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "All" ? "default" : "outline"}
                  size="sm"
                  className={category === "All" ? "bg-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-20">
          <div className="container">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">Featured Stories</h2>
              <p className="text-muted-foreground">Our most important news and achievements</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {newsArticles
                .filter((article) => article.featured)
                .map((article) => (
                  <Card key={article.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary">Featured</Badge>
                      <Badge variant="secondary" className="absolute top-4 right-4">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(article.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <Button asChild>
                          <Link href={`/news/${article.id}`}>
                            Read More <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            {article.views}
                          </div>
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>

            {/* All Articles */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-playfair)]">All News</h2>
              <p className="text-muted-foreground">Complete coverage of our activities and achievements</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge variant="secondary" className="absolute top-4 right-4">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      {new Date(article.date).toLocaleDateString()}
                      <span>•</span>
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/news/${article.id}`}>Read More</Link>
                      </Button>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Eye className="h-4 w-4" />
                        {article.views}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
