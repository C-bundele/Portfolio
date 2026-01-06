import { Database, Brain, BarChart3, Cloud } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Building NLP systems and predictive models with PyTorch & TensorFlow",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Designing ETL pipelines with AWS Glue, Spark, and Airflow",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Deploying scalable solutions on AWS with Redshift & S3",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Creating insights with PowerBI, Tableau, and Python dashboards",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Transforming Data Into <span className="gradient-text">Intelligence</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I'm a Data Science graduate student with hands-on experience in building 
            end-to-end ML pipelines, automated data systems, and cloud-native solutions 
            that drive real business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-2xl glass hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="text-primary-foreground" size={26} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
