import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Upload, Send } from "lucide-react"

export default function OnlineApplicationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Online Application</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Complete your application to join our science olympiad training programs
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Application Guidelines</h3>
                <ul className="text-blue-700 text-sm space-y-1">
                  <li>• Please fill out all required fields marked with an asterisk (*)</li>
                  <li>• You can save your progress and return later to complete the application</li>
                  <li>• Application deadline: January 31, 2025</li>
                  <li>• You will receive a confirmation email after submission</li>
                </ul>
              </div>
            </div>
          </div>

          <form className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-stone-200 to-stone-300 text-gray-900">
                <CardTitle className="text-xl">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input id="dateOfBirth" type="date" />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="address">Address *</Label>
                  <Textarea id="address" placeholder="Enter your full address" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" placeholder="+998 XX XXX XX XX" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardTitle className="text-xl">Academic Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="school">Current School *</Label>
                  <Input id="school" placeholder="Name of your current school" />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="grade">Current Grade *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select grade" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="6">6th Grade</SelectItem>
                        <SelectItem value="7">7th Grade</SelectItem>
                        <SelectItem value="8">8th Grade</SelectItem>
                        <SelectItem value="9">9th Grade</SelectItem>
                        <SelectItem value="10">10th Grade</SelectItem>
                        <SelectItem value="11">11th Grade</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="gpa">Overall GPA *</Label>
                    <Input id="gpa" placeholder="e.g., 4.5" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subjects">Preferred Subject Areas * (Select all that apply)</Label>
                  <div className="grid md:grid-cols-3 gap-4 mt-2">
                    {["Mathematics", "Physics", "Chemistry", "Biology", "Computer Science"].map((subject) => (
                      <div key={subject} className="flex items-center space-x-2">
                        <Checkbox id={subject.toLowerCase()} />
                        <Label htmlFor={subject.toLowerCase()}>{subject}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardTitle className="text-xl">Competition Experience</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="competitions">Previous Competition Participation</Label>
                  <Textarea
                    id="competitions"
                    placeholder="List any olympiads, competitions, or contests you have participated in, including dates and results"
                    rows={4}
                  />
                </div>
                <div>
                  <Label htmlFor="achievements">Academic Achievements</Label>
                  <Textarea
                    id="achievements"
                    placeholder="Describe any awards, honors, or special recognition you have received"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardTitle className="text-xl">Personal Statement</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label htmlFor="motivation">Why do you want to join our program? *</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Explain your motivation, goals, and what you hope to achieve through our training programs"
                    rows={5}
                  />
                </div>
                <div>
                  <Label htmlFor="strengths">What are your academic strengths?</Label>
                  <Textarea
                    id="strengths"
                    placeholder="Describe your strongest subjects and problem-solving abilities"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-600 to-gray-700 text-white">
                <CardTitle className="text-xl">Document Upload</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <Label>Academic Transcripts *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PDF, JPG, PNG (max 5MB)</p>
                  </div>
                </div>
                <div>
                  <Label>Recommendation Letters</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PDF, JPG, PNG (max 5MB each)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to the terms and conditions and privacy policy of the Science Olympiad Center *
                    </Label>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Checkbox id="updates" />
                    <Label htmlFor="updates" className="text-sm">
                      I would like to receive updates about programs and events
                    </Label>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button variant="outline" size="lg">
                Save Draft
              </Button>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Application
              </Button>
            </div>
          </form>

          <div className="text-center mt-8 text-gray-600">
            <p>
              Need help? Contact us at{" "}
              <a href="mailto:admissions@scienceolympiad.uz" className="text-orange-500 hover:underline">
                admissions@scienceolympiad.uz
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
