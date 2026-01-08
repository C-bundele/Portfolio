import { Briefcase, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "Media Sales Plus",
    location: "Buffalo, United States",
    period: "August 2025 – December 2025",
    highlights: [
      " Built a hybrid NLP system with rule-based pipelines and LLM refinement, leveraging spaCy for NER and regex for publisher-specific rules, improving accessibility by 12%.",
"Designed automated proofreading pipelines using Python, spaCy, and regex, improving proofreading speed by 60-70% through grammar correction and compliance.",  
"Engineered data validation protocols that fixed formatting issues and removed over 25% of missing fields, enhancing overall data integrity. Streamlined data validation system, achieving 99% accuracy by automating validation and proofreading tasks.",
"Deployed validation system integrated with Streamlit UI, local SQLite database, and Azure, freeing up 6-8 representatives per shift.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "JR Analytics",
    location: "Pune, India",
    period: "January 2024 - July 2024",
    highlights: [
      "Developed automated web-scraping and ETL workflows with MySQL, reducing manual collection by 80%",
      "Created Python dashboards for KPIs, improving data-driven decisions by 25%",
      "Delivered real-time insights supporting targeted campaigns, increasing market visibility by 15%",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />
              
              {/* Timeline Dot */}
              <div className="absolute left-0 top-2 -translate-x-1/2 w-4 h-4 rounded-full gradient-bg glow" />

              <div className="glass p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 group">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-semibold mt-1">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
