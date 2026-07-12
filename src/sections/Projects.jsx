import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Event Management Website",
    description:
      "Built a full-stack web-based event management system for managing events and secure online ticket purchases.",
    image: "/projects/project1.jpg",
    tags: ["MongoDB", "ExpressJS", "NextJS", "Typescript"],
    link: "https://front-end-acara-lilac.vercel.app",
    github: "https://github.com/Miowme/front-end-acara",
  },
  {
    title: "Realtime Point of Sales Cafe Website App",
    description:
      "Developed a real-time café Point of Sale (POS) web application supporting orders, payments, and role-based access control.",
    image: "/projects/project2.jpg",
    tags: ["ReactJS", "ShadcnUI", "Supabase", "Typescript"],
    link: "https://salesmanagementcafe.vercel.app",
    github: "https://github.com/Miowme/Realtime-point-of-sales-cafe-app",
  },
  {
    title: "Stock Forecast App using Linear Regression",
    description:
      "Developed a stock price forecasting web application using Linear Regression for predictive market analysis.",
    image: "/projects/project3.jpg",
    tags: ["Python", "StreamLit", "MachineLearning"],
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7250088063245148162",
    github:
      "https://github.com/Miowme/Stock-Prediction-Using-Linear-Regression",
  },
  {
    title: "Pokedex App",
    description:
      "Built a Pokédex web application with Next.js featuring Pokémon search and detailed information.",
    image: "/projects/project4.png",
    tags: ["ReactJS", "Javascript", "API"],
    link: "https://pokedex-app-xi-steel.vercel.app",
    github: "https://github.com/Miowme/PokedexApp",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Projects that showcase my journey in building modern, scalable, and
            user-centered web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <FaGithub className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
