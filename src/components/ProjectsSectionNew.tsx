import React, { useState } from "react";
import { ArrowUpRight, Database, Cloud, Brain, Workflow } from "lucide-react";

const categories = [
  "All",
  "Data Engineering",
  "Machine Learning",
  "MLOps",
  "Data Analytics / BI",
];

const projects = [
  {
    icon: Cloud,
    title: "Automated ETL Pipeline with AWS Glue & Redshift",
    description:
      "Serverless ETL architecture using AWS Glue Jobs, Crawlers, and Redshift with automated batch ingestion.",
    category: "Data Engineering",
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
    description:
      "End-to-end cloud data pipeline with forecasting using AWS services and Hopsworks Feature Store.",
    category: "Data Engineering",
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
    description:
      "ML classification pipeline with cloud deployment, feature engineering, and experiment tracking.",
    category: "Machine Learning",
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
    description:
      "Production-grade MLOps with data validation, monitoring, drift detection, and automated retraining.",
    category: "MLOps",
    highlights: [
      "Automated model retraining",
      "Real-time drift detection",
      "Docker + FastAPI deployment",
    ],
    tags: ["Airflow", "MLflow", "Docker", "FastAPI"],
  },
  {
    icon: Database,
    title: "Sales Analytics Dashboard (500K+ Transactions)",
    description:
      "Designed a high-performance BI analytics solution using a star-schema data model to analyze large-scale coffee sales data.",
    category: "Data Analytics / BI",
    highlights: [
      "Star-schema modeling for fast analytical queries",
      "15+ DAX measures for revenue and growth KPIs",
      "Performance-optimized Power BI dashboards",
    ],
    tags: ["Power BI", "DAX", "Data Modeling", "Star Schema", "Analytics"],
  },
];

const ProjectsSectionNew: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

        <div className="flex flex-wrap justify-center gap-3 mb-8">
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
          <div className="overflow-hidden mb-10">
            <div
              className="flex marquee-track items-stretch"
              style={{ animation: "marquee 12s linear infinite", animationPlayState: hovered !== null ? "paused" : "running" }}
            >
              {projects.concat(projects).map((project, i) => {
                const Icon = project.icon;
                return (
                  <div
                    key={`mar-${i}`}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    className={`marquee-item ${hovered === i ? "highlighted" : ""} group glass p-4 rounded-2xl flex-shrink-0 mx-2 cursor-pointer`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary-foreground" size={22} />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-display text-lg font-bold text-foreground truncate">{project.title}</h3>
                          <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 whitespace-nowrap">
                            {project.category}
                          </span>
                        </div>

                        <p className="text-muted-foreground text-sm mt-2 truncate">{project.description}</p>

                        <div className="flex items-center gap-2 mt-3 flex-wrap">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="flex-shrink-0 ml-4">
                        <ArrowUpRight className="text-muted-foreground" size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <style>{`
              @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              .marquee-track { 
                --marquee-items: 5; 
                --marquee-gap: 12px; 
                display:flex; 
                align-items:stretch; 
                gap: var(--marquee-gap);
              }
              .marquee-track:hover { animation-play-state: paused; }
              .marquee-item { 
                transition: transform 220ms ease, box-shadow 220ms ease; 
                flex: 0 0 calc((100% - (var(--marquee-gap) * (var(--marquee-items) - 1))) / var(--marquee-items));
              }
              .marquee-item:hover { transform: translateY(-6px); }
              .marquee-item.highlighted { transform: translateY(-10px) scale(1.03); box-shadow: 0 20px 40px rgba(2,6,23,0.14); z-index: 30; }
            `}</style>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="group glass p-8 rounded-2xl">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                        <Icon className="text-primary-foreground" size={22} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">{project.category}</span>
                    </div>
                    <ArrowUpRight className="text-muted-foreground" size={20} />
                  </div>

                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{project.description}</p>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground"><span className="w-1 h-1 rounded-full bg-primary" />{h}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">{tag}</span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSectionNew;
