"use client"

import Link from "next/link"
import { Download, Briefcase, GraduationCap, Award, Code, Globe, Music, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Resume() {
  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <Badge variant="outline" className="text-primary border-primary">
            Resume
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-balance">
            My Professional Journey
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl text-balance">
            A comprehensive overview of my education, work experience, skills, and achievements.
          </p>
          <Link href="/Shreema-Dey-Resume.pdf" target="_blank" download>
            <Button className="mt-2">
              <Download data-icon="inline-start" />
              Download Resume
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="flex flex-col gap-8">
            {/* Work Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="size-5 text-primary" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-semibold">Trainee Software Engineer</h4>
                    <p className="text-sm text-primary">Orange Business Development Ltd., Dhaka</p>
                    <p className="text-xs text-muted-foreground">June 2025 - Present</p>
                  </div>
                  <ul className="text-sm text-muted-foreground list-disc list-inside flex flex-col gap-1">
                    <li>Worked on multiple government and enterprise projects including RDCD modules: BTM, HRM, and BARD-SaaS platforms</li>
                    <li>Contributed to the MyGov Project Form Customization Module across staging, training, and production environments</li>
                    <li>Implemented dynamic requirement logic, conditional fields, attachment handling, and UI/UX improvements</li>
                  </ul>
                </div>

                <Separator />

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <h4 className="font-semibold">Intern Software Engineer</h4>
                    <p className="text-sm text-primary">Orange Business Development Ltd., Dhaka</p>
                    <p className="text-xs text-muted-foreground">Jan 2025 - April 2025</p>
                  </div>
                  <ul className="text-sm text-muted-foreground list-disc list-inside flex flex-col gap-1">
                    <li>Contributed to the development of an Apostille Service Directory and an in-house E-Commerce platform</li>
                    <li>Improved application performance and accessibility while ensuring cross-browser compatibility</li>
                    <li>Assisted in UI/UX enhancements and resolved frontend issues</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="size-5 text-primary" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold">B.Tech in Computer Engineering</h4>
                  <p className="text-sm text-primary">RK University, Rajkot, Gujarat, India</p>
                  <p className="text-xs text-muted-foreground">June 2021 - May 2025</p>
                  <Badge variant="secondary" className="w-fit mt-1">CGPA: 8.5/10</Badge>
                </div>

                <Separator />

                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold">Higher Secondary Certificate</h4>
                  <p className="text-sm text-primary">Mymensingh Govt. College, Bangladesh</p>
                  <p className="text-xs text-muted-foreground">Year: 2020</p>
                  <Badge variant="secondary" className="w-fit mt-1">CGPA: 5/5</Badge>
                </div>

                <Separator />

                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold">Secondary School Certificate</h4>
                  <p className="text-sm text-primary">Govt. Laboratory School, Mymensingh, Bangladesh</p>
                  <p className="text-xs text-muted-foreground">Year: 2018</p>
                  <Badge variant="secondary" className="w-fit mt-1">CGPA: 5/5</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="size-5 text-primary" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">Bangla</span>
                    <Badge variant="outline">Native</Badge>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">English</span>
                    <Badge variant="outline">Working Proficiency</Badge>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-medium">Hindi</span>
                    <Badge variant="outline">Working Proficiency</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8">
            {/* Technical Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="size-5 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Languages</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>PHP</Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Frameworks</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Bootstrap</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">jQuery</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">Laravel</Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Tools</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Git/GitHub</Badge>
                    <Badge variant="outline">ChatGPT</Badge>
                    <Badge variant="outline">VS Code</Badge>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-sm font-medium text-muted-foreground">Soft Skills</span>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Analytical Thinking</Badge>
                    <Badge variant="outline">Cross-Functional Collaboration</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="size-5 text-primary" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary" />
                  <span className="text-sm">Python (PCAP) - Cisco</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary" />
                  <span className="text-sm">Introduction to IoT - Cisco</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary" />
                  <span className="text-sm">Java SE8 Features and Fundamentals - Infosys</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary" />
                  <span className="text-sm">JavaScript: Basic to Advance - Infosys</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary" />
                  <span className="text-sm">Enterprise Networking, Security, and Automation, CCNAv7 - Cisco</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary" />
                  <span className="text-sm">DSA Certification in C - Great Learning</span>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="size-5 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-sm">Networking Badges (Cisco)</h4>
                  <p className="text-sm text-muted-foreground">
                    Earned verified badges for completing &quot;Introduction to Networks (CCNA)&quot;, Enterprise Networking, Security and Automation, and Switching, Routing and Wireless Essentials courses.
                  </p>
                </div>

                <Separator />

                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-sm flex items-center gap-2">
                    <Music className="size-4 text-primary" />
                    Extracurricular Activities (Singing)
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Won 3rd place at the city-level and division-level in the &quot;Music for the Masses&quot; competition. Completed a 4-year singing diploma degree from Udichi.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Reference */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Reference
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-1">
                  <h4 className="font-semibold">Professor Bhoomi Dangar</h4>
                  <p className="text-sm text-muted-foreground">RK University, Rajkot, Gujarat, India</p>
                  <p className="text-sm text-primary">bhoomi.dangar@rku.ac.in</p>
                  <p className="text-sm text-muted-foreground">+91 82002 45406</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
