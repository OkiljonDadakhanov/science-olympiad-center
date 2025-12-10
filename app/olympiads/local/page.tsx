
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Trophy, Users, Calendar, Clock, Star, CheckCircle, ArrowRight, GraduationCap, BookOpen, Award, Target } from "lucide-react"
import Link from "next/link"
import { FadingBackground } from "@/components/fading-bg"

const olympiadStages = [
  {
    stage: 1,
    name: "School Stage",
    uzbekName: "Maktab bosqichi",
    description: "The first stage of the Main Olympiad, conducted among students of state and non-state general secondary education institutions, academic lyceums, and vocational schools across 17 subjects.",
    eligibility: "Students in grades 9-11 of state and non-state general secondary education institutions, and students in stages 1-2 of academic lyceums and vocational education institutions.",
    participants: "530,629 winners",
    nextStageParticipants: "431,270 participants (81%)",
    format: "Organized by educational institution pedagogical councils",
    requirements: [
      "Determining competition dates and ensuring student safety",
      "Forming judging panels (3-7 members) for each subject",
      "Creating appeal commission member lists",
      "Preparing control materials and ensuring confidentiality",
      "Submitting recommendations for winners to advance to the next stage"
    ],
    notification: "All students must be informed at least 3 days before the competition through notice boards, social media, Telegram groups, teacher announcements, and general assemblies.",
    winners: "Up to 3 winners per subject and grade level (1st, 2nd, 3rd places) are determined based on scores and recommended by the school pedagogical council to participate in the next stage.",
    subjects: [
      "Mathematics", "Physics", "Chemistry", "Biology", "Informatics and Information Technologies",
      "Native Language and Literature", "Uzbek Language", "Russian Language and Literature",
      "Karakalpak Language and Literature", "Tajik Language", "Kazakh Language",
      "English Language", "German Language", "French Language",
      "History", "State and Law Fundamentals", "Geography"
    ],
    totalSubjects: 17
  },
  {
    stage: 2,
    name: "District/City Stage",
    uzbekName: "Tuman (shahar) bosqichi",
    description: "The second stage of the Main Olympiad, conducted among students of general secondary education institutions, non-state general secondary education institutions, and specialized schools under the Agency for Specialized Educational Institutions.",
    eligibility: "Students in grades 9-11 of general secondary education institutions, non-state general secondary education institutions, and specialized schools (school-internats), as well as students in stages 1-2 of vocational education institutions.",
    participants: "431,270 participants",
    format: "Centralized test examinations in all subjects, conducted at locations determined by regional organizational committees",
    testDetails: {
      totalQuestions: 30,
      group1: {
        subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Informatics and Information Technologies"],
        duration: "90 minutes"
      },
      group2: {
        subjects: [
          "Native Language and Literature", "Uzbek Language", "Russian Language and Literature",
          "Karakalpak Language and Literature", "Tajik Language", "Kazakh Language",
          "English Language", "German Language", "French Language",
          "History", "State and Law Fundamentals", "Geography"
        ],
        duration: "60 minutes"
      }
    },
    exceptions: "Academic lyceums under various ministries, specialized schools (Presidential and Creative Schools, Al-Beruniy International School-Internat, Abu Ali ibn Sino, Mirzo Ulug'bek, Muhammad al-Khwarizmi specialized schools) and their regional branches participate directly in the third (regional) stage, skipping this stage.",
    specialRule: "Students who won 1st place in grades 9-10 in the third (regional) stage of the previous academic year participate directly in the third (regional) stage of the current academic year.",
    winners: "3 winners per subject and grade level (1st, 2nd, 3rd places) are determined based on test results and recommended by the organizational committee to participate in the third stage.",
    totalSubjects: 17
  },
  {
    stage: 3,
    name: "Regional Stage",
    uzbekName: "Hududiy bosqichi",
    description: "The third stage of the Main Olympiad, featuring more complex problem-solving and comprehensive evaluation across multiple subjects.",
    eligibility: "Students who won 1st, 2nd, or 3rd place in the district/city stage in the relevant subject and grade, as well as up to 3 students recommended by specialized educational institutions, academic lyceums, and non-state educational institutions.",
    participants: "28,000+ students",
    format: "Two-part examinations for science subjects; single-part test examinations for humanities",
    subjects: {
      science: {
        subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
        part1: {
          type: "Written Problems",
          problems: 5,
          points: 50,
          duration: "180 minutes",
          description: "Problems of varying difficulty levels, each evaluated according to specific criteria"
        },
        part2: {
          type: "Test Questions",
          questions: 30,
          points: 50,
          duration: "90 minutes",
          breakdown: {
            simple: "First 10 questions: Simple closed tests (A, B, C, D), 0.9 points each",
            medium: "Next 10 questions: Medium difficulty closed tests (A, B, C, D), 1.5 points each",
            complex: "Last 10 questions: Open tests (written answers), 2.6 points each"
          },
          total: "10×0.9 + 10×1.5 + 10×2.6 = 50 points"
        },
        total: "100 points maximum"
      },
      informatics: {
        subject: "Informatics and Information Technologies",
        format: "Single-part online competition",
        problems: 5,
        points: 50,
        duration: "240 minutes",
        languages: ["C++", "Python", "Java"],
        description: "Problems of varying difficulty levels solved on an online portal. Points awarded for fully completed and system-accepted problems."
      },
      humanities: {
        subjects: ["History", "State and Law Fundamentals", "Geography"],
        format: "Single-part test examination",
        questions: 40,
        points: 100,
        duration: "80 minutes",
        breakdown: {
          simple: "First 10 questions: Simple difficulty closed tests (A, B, C, D), 1.3 points each",
          medium: "Next 15 questions: Medium difficulty closed tests (A, B, C, D), 2.4 points each",
          complex: "Last 15 questions: High difficulty closed tests (A, B, C, D), 3.4 points each"
        },
        total: "10×1.3 + 15×2.4 + 15×3.4 = 100 points"
      }
    },
    winners: "3 winners per subject and grade level (1st, 2nd, 3rd places) are determined based on total scores and recommended by the judging panel and organizational committee to participate in the next stage.",
    statistics: {
      group1: {
        subjects: ["Mathematics", "Physics", "Chemistry", "Biology", "Informatics and Information Technologies"],
        dates: "November 24-28",
        grades: "9-10-11",
        participants: "~9,500 students"
      },
      group2: {
        subjects: [
          "Native Language and Literature", "Uzbek Language", "Karakalpak Language and Literature",
          "Russian Language and Literature", "Tajik Language", "Kazakh Language",
          "English Language", "German Language", "French Language",
          "History", "Geography", "State and Law Fundamentals"
        ],
        participants: "18,500+ students"
      }
    },
    prizes: "Winners (1st, 2nd, 3rd places) in each subject are awarded one-time monetary prizes as specified in the Cabinet of Ministers Resolution No. 562 dated September 9, 2021.",
    republicQualifiers: "11th grade students with the highest achievements in each subject receive invitations to participate in the Republic Stage of the Main Olympiad."
  },
  {
    stage: 4,
    name: "Republic Stage",
    uzbekName: "Respublika bosqichi",
    description: "The final and most prestigious stage of the Main Olympiad, bringing together the best students from across Uzbekistan.",
    eligibility: "To be announced",
    status: "Information pending",
    note: "Details for the Republic Stage will be updated soon."
  }
]

export default function LocalOlympiadsPage() {
  return (
    <div className="min-h-screen relative">
      <FadingBackground imageUrl="/icho-slider.jpg" height={400} />
      <main className="relative">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-500/10 via-teal-500/5 to-emerald-500/10 backdrop-blur-sm relative">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] pointer-events-none"></div>
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full mb-6">
                <Trophy className="h-5 w-5 text-green-600" />
                <span className="text-green-700 font-medium">Main Olympiad Stages</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Local <span className="text-primary">Olympiads</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
                The Main Olympiad is conducted across 17 subjects in four progressive stages, from school level to republic level, 
                providing a comprehensive pathway for academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="#stages">Explore Stages</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/apply/criteria">View Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Stats */}
        <section className="py-16 bg-white/80 backdrop-blur-sm">
          <div className="container">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">4</div>
                <div className="text-muted-foreground">Competition Stages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">17</div>
                <div className="text-muted-foreground">Subjects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">530K+</div>
                <div className="text-muted-foreground">School Stage Winners</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">28K+</div>
                <div className="text-muted-foreground">Regional Participants</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Stages */}
        <section id="stages" className="py-20 bg-white/90 backdrop-blur-sm">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4 font-[family-name:var(--font-playfair)]">
                Olympiad Stages
              </h2>
              <p className="text-xl text-muted-foreground text-balance max-w-2xl mx-auto">
                Progress through four stages of competition, from school level to republic level, demonstrating your excellence in 17 subjects.
              </p>
            </div>

            <div className="space-y-16">
              {olympiadStages.map((stage, index) => (
                <Card key={index} className="overflow-hidden bg-white/95 backdrop-blur-sm border-2 shadow-xl">
                  <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10 border-b">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className="bg-primary text-white text-lg px-4 py-1">
                            Stage {stage.stage}
                          </Badge>
                          <h3 className="text-2xl md:text-3xl font-bold">{stage.name}</h3>
                        </div>
                        <p className="text-muted-foreground italic">{stage.uzbekName}</p>
                      </div>
                      {stage.status && (
                        <Badge variant="outline" className="text-sm">
                          {stage.status}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-8">
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {stage.description}
                    </p>

                    {/* Eligibility */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        Eligibility
                      </h4>
                      <p className="text-muted-foreground">{stage.eligibility || stage.note}</p>
                    </div>

                    {/* Stage 1 Specific Content */}
                    {stage.stage === 1 && (
                      <>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-500" />
                            Organization Requirements
                          </h4>
                          <ul className="space-y-2 text-muted-foreground">
                            {stage.requirements?.map((req, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-purple-500" />
                            Notification Requirements
                          </h4>
                          <p className="text-muted-foreground">{stage.notification}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-yellow-500" />
                            Winners
                          </h4>
                          <p className="text-muted-foreground">{stage.winners}</p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-orange-500" />
                            Participation Statistics
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-primary/5 rounded-lg">
                              <div className="text-sm text-muted-foreground mb-1">School Stage Winners</div>
                              <div className="text-2xl font-bold text-primary">{stage.participants}</div>
                            </div>
                            <div className="p-4 bg-secondary/5 rounded-lg">
                              <div className="text-sm text-muted-foreground mb-1">Advanced to District Stage</div>
                              <div className="text-2xl font-bold text-secondary">{stage.nextStageParticipants}</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Target className="h-5 w-5 text-red-500" />
                            Subjects ({stage.totalSubjects})
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {stage.subjects?.map((subject, i) => (
                              <Badge key={i} variant="outline" className="text-sm">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </>
                    )}

                    {/* Stage 2 Specific Content */}
                    {stage.stage === 2 && (
                      <>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Clock className="h-5 w-5 text-blue-500" />
                            Test Format
                          </h4>
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h5 className="font-semibold mb-2">Group 1 Subjects (90 minutes)</h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {stage.testDetails?.group1.subjects.join(", ")}
                              </p>
                              <p className="text-sm">
                                <strong>30 test questions</strong> per subject
                              </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h5 className="font-semibold mb-2">Group 2 Subjects (60 minutes)</h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                {stage.testDetails?.group2.subjects.join(", ")}
                              </p>
                              <p className="text-sm">
                                <strong>30 test questions</strong> per subject
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-orange-500" />
                            Participation
                          </h4>
                          <p className="text-muted-foreground mb-2">
                            <strong>{stage.participants}</strong> students participated in this stage.
                          </p>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Star className="h-5 w-5 text-yellow-500" />
                            Special Rules
                          </h4>
                          <div className="space-y-2 text-muted-foreground">
                            <p>{stage.exceptions}</p>
                            <p>{stage.specialRule}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-green-500" />
                            Winners
                          </h4>
                          <p className="text-muted-foreground">{stage.winners}</p>
                        </div>
                      </>
                    )}

                    {/* Stage 3 Specific Content */}
                    {stage.stage === 3 && (
                      <>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-blue-500" />
                            Science Subjects Format
                          </h4>
                          <div className="space-y-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h5 className="font-semibold mb-2">Part 1: Written Problems</h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• {stage.subjects?.science.part1.problems} problems of varying difficulty</li>
                                <li>• {stage.subjects?.science.part1.points} points maximum</li>
                                <li>• Duration: {stage.subjects?.science.part1.duration}</li>
                                <li>• Each problem evaluated according to specific criteria</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h5 className="font-semibold mb-2">Part 2: Test Questions</h5>
                              <ul className="text-sm text-muted-foreground space-y-1">
                                <li>• {stage.subjects?.science.part2.questions} test questions ({stage.subjects?.science.part2.points} points)</li>
                                <li>• Duration: {stage.subjects?.science.part2.duration}</li>
                                <li>• {stage.subjects?.science.part2.breakdown?.simple}</li>
                                <li>• {stage.subjects?.science.part2.breakdown?.medium}</li>
                                <li>• {stage.subjects?.science.part2.breakdown?.complex}</li>
                                <li>• Total: {stage.subjects?.science.part2.total}</li>
                              </ul>
                            </div>
                            <div className="p-3 bg-primary/10 rounded-lg text-center">
                              <strong>Total: {stage.subjects?.science.total}</strong>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <GraduationCap className="h-5 w-5 text-purple-500" />
                            Informatics Format
                          </h4>
                          <div className="p-4 bg-purple-50 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-2">
                              <strong>{stage.subjects?.informatics.problems} problems</strong> solved on an online portal
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Duration: {stage.subjects?.informatics.duration}</li>
                              <li>• Maximum points: {stage.subjects?.informatics.points}</li>
                              <li>• Programming languages: {stage.subjects?.informatics.languages?.join(", ")}</li>
                              <li>• Points awarded for fully completed and system-accepted problems</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-red-500" />
                            Humanities Subjects Format
                          </h4>
                          <div className="p-4 bg-red-50 rounded-lg">
                            <p className="text-sm text-muted-foreground mb-2">
                              <strong>{stage.subjects?.humanities.questions} test questions</strong> ({stage.subjects?.humanities.points} points)
                            </p>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Duration: {stage.subjects?.humanities.duration}</li>
                              <li>• {stage.subjects?.humanities.breakdown?.simple}</li>
                              <li>• {stage.subjects?.humanities.breakdown?.medium}</li>
                              <li>• {stage.subjects?.humanities.breakdown?.complex}</li>
                              <li>• Total: {stage.subjects?.humanities.total}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Users className="h-5 w-5 text-orange-500" />
                            Competition Statistics
                          </h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-blue-50 rounded-lg">
                              <h5 className="font-semibold mb-2">Group 1 Subjects</h5>
                              <p className="text-sm text-muted-foreground mb-1">
                                {stage.statistics?.group1.subjects.join(", ")}
                              </p>
                              <p className="text-sm mb-1">
                                <strong>Dates:</strong> {stage.statistics?.group1.dates}
                              </p>
                              <p className="text-sm mb-1">
                                <strong>Grades:</strong> {stage.statistics?.group1.grades}
                              </p>
                              <p className="text-lg font-bold text-primary">
                                {stage.statistics?.group1.participants}
                              </p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                              <h5 className="font-semibold mb-2">Group 2 Subjects</h5>
                              <p className="text-sm text-muted-foreground mb-2">
                                Languages, History, Geography, State and Law Fundamentals
                              </p>
                              <p className="text-lg font-bold text-secondary">
                                {stage.statistics?.group2.participants}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="mb-6">
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Trophy className="h-5 w-5 text-yellow-500" />
                            Prizes
                          </h4>
                          <p className="text-muted-foreground">{stage.prizes}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                            <Award className="h-5 w-5 text-green-500" />
                            Republic Stage Qualification
                          </h4>
                          <p className="text-muted-foreground">{stage.republicQualifiers}</p>
                        </div>
                      </>
                    )}

                    {/* Stage 4 Specific Content */}
                    {stage.stage === 4 && (
                      <div className="text-center py-8">
                        <p className="text-lg text-muted-foreground">
                          {stage.note}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6 font-[family-name:var(--font-playfair)]">
                Start Your Olympiad Journey
              </h2>
              <p className="text-xl text-muted-foreground text-balance mb-8 leading-relaxed">
                Begin at the school stage and progress through district, regional, and republic levels. 
                Each stage builds your skills and opens new opportunities for academic excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/apply/criteria">View Qualification Requirements</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
