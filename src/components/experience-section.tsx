import { Badge } from "./ui/badge";

interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Data Engineer",
    company: "TechCorp Global",
    period: "2021 - Present",
    description:
      "Leading the data engineering team in building and maintaining enterprise-scale data pipelines and analytics infrastructure.",
    achievements: [
      "Architected a new data lake solution that reduced query times by 60%",
      "Led migration from on-premise to cloud-based data warehouse",
      "Implemented CI/CD pipelines for data infrastructure, reducing deployment time by 70%",
    ],
    technologies: ["Apache Spark", "Airflow", "AWS", "Snowflake", "Terraform"],
  },
  {
    id: 2,
    role: "Data Engineer",
    company: "DataSystems Inc.",
    period: "2018 - 2021",
    description:
      "Designed and implemented ETL processes and data pipelines for business intelligence and analytics applications.",
    achievements: [
      "Built real-time data processing system handling 50M+ daily events",
      "Reduced ETL processing time by 40% through optimization",
      "Developed data quality framework with automated testing",
    ],
    technologies: ["Python", "Kafka", "PostgreSQL", "Docker", "Jenkins"],
  },
  {
    id: 3,
    role: "Data Analyst",
    company: "AnalyticsPro",
    period: "2016 - 2018",
    description:
      "Performed data analysis and created dashboards to support business decision-making processes.",
    achievements: [
      "Created executive dashboards that drove 15% increase in operational efficiency",
      "Automated reporting processes saving 20+ hours weekly",
      "Collaborated with product teams to implement data-driven features",
    ],
    technologies: ["SQL", "Tableau", "Python", "R", "Excel"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My career journey in data engineering and analytics
          </p>
        </div>

        <div className="relative border-l-2 border-blue-500 ml-4 md:ml-0 md:mx-auto md:max-w-3xl pl-8 pb-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="mb-12 relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900"></div>

              {/* Content card */}
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-blue-400 font-medium">
                    {exp.period}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-lg text-gray-300">{exp.company}</span>
                </div>

                <p className="text-gray-400 mb-4">{exp.description}</p>

                <div className="mb-4">
                  <h4 className="text-white font-medium mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="list-disc pl-5 text-gray-400 space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="outline"
                      className="bg-gray-700 text-blue-300 border-blue-500"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
