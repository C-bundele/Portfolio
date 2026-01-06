import { useState } from "react";
import { ArrowUpRight, Database, Cloud, Brain, Workflow } from "lucide-react";

const categories = ["All", "Data Engineering", "Machine Learning", "MLOps"];

const projects = [
  {
    icon: Cloud,
    title: "Automated ETL Pipeline with AWS Glue & Redshift",
    description: "Serverless ETL architecture using AWS Glue Jobs, Crawlers, and Redshift with automated batch ingestion.",
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
    description: "End-to-end cloud data pipeline with forecasting using AWS services and Hopsworks Feature Store.",
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
    description: "ML classification pipeline with cloud deployment, feature engineering, and experiment tracking.",
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
    description: "Production-grade MLOps with data validation, monitoring, drift detection, and automated retraining.",
    category: "MLOps",
    highlights: [
      "Automated model retraining",
      "Real-time drift detection",
      "Docker + FastAPI deployment",
    ],
    tags: ["Airflow", "MLflow", "Docker", "FastAPI"],
  },
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group glass p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 animate-fade-in"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="text-primary-foreground" size={22} />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                    {project.category}
                  </span>
                </div>
                <ArrowUpRight 
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
                  size={20} 
                />
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
