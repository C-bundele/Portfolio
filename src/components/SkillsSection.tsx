const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C++"],
  },
  {
    title: "Databases & Query Languages",
    skills: ["Snowflake", "NoSQL", "MySQL", "Amazon S3", "Redis"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["Apache Kafka", "Airflow", "PyTorch", "PySpark", "TensorFlow", "Scikit-Learn"],
  },
  {
    title: "AI & Machine Learning",
    skills: ["LLMs", "NLP", "Computer Vision", "CNN", "LSTM", "Deep Learning", "Adversarial AI"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Batch", "AWS S3", "AWS EMR", "AWS EC2", "AWS Glue", "Docker", "Bash"],
  },
  {
    title: "Data Visualization",
    skills: ["PowerBI", "Tableau"],
  },
  {
    title: "Version Control",
    skills: ["Git"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-500"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-muted/50 text-sm text-muted-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                  >
                    {skill}
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

export default SkillsSection;
