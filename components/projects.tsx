import Link from "next/link"
import { ArrowUpRight, Folder } from "lucide-react"
import { FiGithub } from "react-icons/fi"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

const featuredProjects = [
  {
    title: "CSE-Hacks",
    description:
      "An educational platform for Computer Science Engineering students. Features programming tutorials, compiler tools, and easy-to-follow learning resources. Built to provide an enjoyable learning experience similar to GeeksforGeeks.",
    tech: ["React", "Node.js", "MongoDB", "HTML/CSS"],
    github: "https://github.com/mishuk09/Learning-Website",
    live: "https://csehacks.tech/",
  },
]

const otherProjects = [
  {
    title: "Personal Portfolio",
    description:
      "My personal portfolio website showcasing my skills, projects, and experience as a web developer.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Figma to HTML Conversion",
    description:
      "Converting Figma, PSD, and Sketch designs to responsive HTML and CSS websites with pixel-perfect accuracy.",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
  {
    title: "Canva Design Projects",
    description:
      "Creating professional web designs and UI mockups using Canva and Figma for client projects.",
    tech: ["Figma", "Canva", "UI/UX"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl">03.</span> Projects
          </h2>
          <Separator className="flex-1" />
        </div>

        {/* Featured Project */}
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="mb-16 p-8 rounded-2xl bg-card border border-border"
          >
            <p className="text-primary font-mono text-sm mb-2">
              Featured Project
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <Link
                href={project.github}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View GitHub Repository"
              >
                <FiGithub className="size-5" />
              </Link>
              <Link
                href={project.live}
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="View Live Site"
              >
                <ArrowUpRight className="size-5" />
              </Link>
            </div>
          </div>
        ))}

        {/* Other Projects */}
        <h3 className="text-xl font-semibold text-foreground text-center mb-8">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="size-10 text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
