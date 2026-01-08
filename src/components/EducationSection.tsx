import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "Masters of Science in Data Science",
    school: "University at Buffalo, NY",
    period: "Expected December 2025",
    gpa: "3.6",
  },
  {
    degree: "Bachelor of Engineering in Computer Science",
    school: "Savitribai Phule Pune University, India",
    period: "Graduated June 2024",
    gpa: "3.7",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Education
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group glass p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="text-primary-foreground" size={26} />
              </div>

              <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>
              
              <p className="text-primary font-medium mb-4">{edu.school}</p>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium text-foreground">GPA:</span>
                  <span>{edu.gpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
