import { BookOpen, ExternalLink, Calendar } from "lucide-react";

const publications = [
  {
    title: "Improving Earth Observations by Correlating Multiple Satellite Data: A Comparative Analysis of Landsat, MODIS, and Sentinel Satellite Data for Flood Mapping",
    authors: "Chanchal Bundele",
    venue: "ResearchGate",
    year: "2024",
    link: "https://www.researchgate.net/publication/379933077_Improving_Earth_Observations_by_correlating_Multiple_Satellite_Data_A_Comparative_Analysis_of_Landsat_MODIS_and_Sentinel_Satellite_Data_for_Flood_Mapping",
    abstract: "Integrated Landsat, MODIS, and Sentinel datasets into a unified GIS-based platform for comprehensive flood analysis. Built Google Earth Engine workflows to estimate flood extent and depth, generated NDWI-based flood maps and binary inundation masks. Applied difference mapping techniques to improve flood extent accuracy and produced digital hazard maps supporting flood risk assessment and disaster preparedness.",
    tags: ["GEE", "GIS", "Remote Sensing", "Flood Mapping", "Satellite Data"],
  },
  {
    title: "Automated Image Captioning using Deep Learning",
    authors: "Chanchal Bundele",
    venue: "University at Buffalo",
    year: "2024",
    link: "https://cse.buffalo.edu/~sreyasee/CSE574/projects.html",
    abstract: "This project explores automated image captioning using deep learning models that combine visual feature extraction with natural language generation. The system learns to translate image content into coherent textual descriptions and is evaluated using standard captioning metrics and qualitative analysis to study caption quality, consistency, and common failure modes.",
    tags: ["Deep Learning", "Computer Vision", "NLP", "Image Captioning", "CNN", "LSTM"],
  },
];

const ResearchSection = () => {
  return (
    <section id="research" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Research
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Research & <span className="gradient-text">Publications</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="group glass p-8 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="text-primary-foreground" size={26} />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {publication.title}
                    </h3>
                    {publication.link && (
                      <a
                        href={publication.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex-shrink-0 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                        aria-label={`Read ${publication.title}`}
                      >
                        <ExternalLink className="text-muted-foreground hover:text-primary transition-colors" size={20} />
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {publication.abstract}
                  </p>

                  {publication.tags && publication.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {publication.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
