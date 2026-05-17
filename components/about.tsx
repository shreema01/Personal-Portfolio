import { Separator } from "@/components/ui/separator"

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl">01.</span> About Me
          </h2>
          <Separator className="flex-1" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I&apos;m Shreema, a passionate junior web developer based
              in Rajkot, Gujarat, India. I enjoy creating things that live on
              the internet, whether that be websites, applications, or anything
              in between. My goal is to build products that provide pixel-perfect,
              performant experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I am currently pursuing my Computer Engineering degree at{" "}
              <span className="text-primary">RK University</span> (2021-2025).
              My interest in web development started when I decided to try
              creating custom websites, and that curiosity has led me to learn
              various technologies and frameworks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I&apos;ve been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 text-sm mt-4">
              {[
                "JavaScript (ES6+)",
                "React",
                "Next.js",
                "Node.js",
                "HTML & CSS",
                "MongoDB",
              ].map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <span className="text-primary">&#9655;</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">22</div>
              <div className="text-sm text-muted-foreground">Years Old</div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">B.Tech</div>
              <div className="text-sm text-muted-foreground">
                Computer Engineering
              </div>
            </div>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">
                Projects Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
