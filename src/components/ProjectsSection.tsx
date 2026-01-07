import { useState } from "react";
import { Github, Database, Cloud, Brain, Workflow } from "lucide-react";

const categories = ["All", "Data Engineering", "Machine Learning", "MLOps", "Data Analytics"];

const projects = [
  {
    icon: Cloud,
    title: "Automated ETL Pipeline with AWS Glue & Redshift",
    description: "Serverless ETL architecture using AWS Glue Jobs, Crawlers, and Redshift with automated batch ingestion.",
    category: "Data Engineering",
    href: "https://github.com/C-bundele/aws-glue-redshift-etl-pipeline",
    highlights: [
      "Cut processing time by 40%",
      "15-minute real-time analytics",
      "30% improved query performance",
    ],
    tags: ["AWS Glue", "Redshift", "S3", "Python"],
  },
  {
    icon: Database,
    title: "NYC Taxi Demand Forecasting Pipeline",
    description: "End-to-end cloud data pipeline with forecasting using AWS services and Hopsworks Feature Store.",
    category: "Data Engineering",
    href: "https://github.com/C-bundele/NY-Taxi",
    highlights: [
      "18% improved prediction accuracy",
      "70% reduced manual effort",
      "Fully reproducible ML workflows",
    ],
    tags: ["AWS", "Athena", "MLflow", "Python"],
  },
  {
    icon: Brain,
    title: "End-to-End Diabetes Classification",
    description: "ML classification pipeline with cloud deployment, feature engineering, and experiment tracking.",
    category: "Machine Learning",
    href: "https://github.com/C-bundele/Diabetes-Prediction",
    highlights: [
      "15% faster predictions",
      "30% reduced training time",
      "40% faster development cycle",
    ],
    tags: ["MLflow", "Scikit-Learn", "Docker", "Cloud"],
  },
  {
    icon: Workflow,
    title: "Full MLOps Pipeline with Drift Detection",
    description: "Production-grade MLOps with data validation, monitoring, drift detection, and automated retraining.",
    category: "MLOps",
    href: "",
    highlights: [
      "Automated model retraining",
      "Real-time drift detection",
      "Docker + FastAPI deployment",
    ],
    tags: ["Airflow", "MLflow", "Docker", "FastAPI"],
  },
  {
  icon: Workflow,
  title: "Sales Data Analytics & Business Insights",
  description: "End-to-end exploratory data analysis and visualization of transactional sales data to uncover revenue trends, product performance, and regional insights.",
  category: "Data Analytics",
  href: "https://github.com/C-bundele/sales-data-analytics-project",
  highlights: [
    "Revenue and sales trend analysis",
    "Product-wise and region-wise performance insights",
    "Business-driven visual storytelling",
  ],
  tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
},
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const marqueeProjects = projects.concat(projects);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "gradient-bg text-primary-foreground shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {activeCategory === "All" ? (
          <div className="max-w-6xl mx-auto overflow-hidden py-6">
          <div
            className="projects-marquee-track flex gap-4 items-stretch"
            style={{
              animation: "projectsMarquee 20s linear infinite",
              animationPlayState: hoveredIndex !== null ? "paused" : "running",
            }}
          >
              {marqueeProjects.map((project, index) => (
            <div
              key={`marquee-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={
              `projects-marquee-item flex-shrink-0 w-[420px] md:w-[520px] h-[420px] md:h-[440px] ${
                hoveredIndex === index ? "is-active" : ""
              }`
              }
            >
              <div
              className={
                `projects-marquee-border rounded-2xl transition-all duration-300 h-full ${
                  hoveredIndex === index ? "glow" : ""
                }`
              }
              >
              <div className="group glass p-4 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <project.icon className="text-primary-foreground" size={22} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 flex justify-end">
                    {project.href ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Open ${project.title}`}
                        className="inline-flex"
                      >
                        <Github
                          className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"
                          size={26}
                        />
                      </a>
                    ) : (
                      <span
                        aria-label={`${project.title} link not set`}
                        className="inline-flex cursor-not-allowed"
                      >
                        <Github
                          className="text-muted-foreground/50"
                          size={26}
                        />
                      </span>
                    )}
                  </div>
                </div>
                </div>
              </div>
              ))}
            </div>

            <style>{`
              @keyframes projectsMarquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .projects-marquee-track {
                width: max-content;
                will-change: transform;
              }
              .projects-marquee-item {
              position: relative;
              transform-origin: center;
              transition: transform 240ms ease;
              }
              .projects-marquee-item.is-active {
              transform: scale(1.035);
              z-index: 50;
              }

              .projects-marquee-border {
                position: relative;
                isolation: isolate;
              }

              /* Gradient border (only on hover) */
              .projects-marquee-border::before {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: inherit;
                padding: 2px;
                background: linear-gradient(
                  90deg,
                  hsl(var(--secondary)),
                  hsl(var(--primary)),
                  hsl(var(--secondary))
                );
                opacity: 0;
                transition: opacity 240ms ease;
                pointer-events: none;
                z-index: -1;

                -webkit-mask:
                  linear-gradient(#fff 0 0) content-box,
                  linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
              }

              /* Soft glow (only on hover) */
              .projects-marquee-border::after {
                content: "";
                position: absolute;
                inset: -10px;
                border-radius: inherit;
                background: linear-gradient(
                  90deg,
                  hsl(var(--secondary)),
                  hsl(var(--primary))
                );
                filter: blur(14px);
                opacity: 0;
                transition: opacity 240ms ease;
                pointer-events: none;
                z-index: -2;
              }

              .projects-marquee-border.glow::before {
                opacity: 1;
              }

              .projects-marquee-border.glow::after {
                opacity: 0.55;
              }
            `}</style>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group glass p-4 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 animate-fade-in flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <project.icon className="text-primary-foreground" size={22} />
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-2 flex justify-end">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={`Open ${project.title}`}
                      className="inline-flex"
                    >
                      <Github
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300"
                        size={26}
                      />
                    </a>
                  ) : (
                    <span
                      aria-label={`${project.title} link not set`}
                      className="inline-flex cursor-not-allowed"
                    >
                      <Github
                        className="text-muted-foreground/50"
                        size={26}
                      />
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
