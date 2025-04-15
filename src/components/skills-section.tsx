import {
  Code,
  Database,
  LineChart,
  Server,
  Settings,
  Workflow,
} from "lucide-react";

interface Skill {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
  category: string;
}

const skills: Skill[] = [
  {
    name: "Apache Spark",
    proficiency: 90,
    icon: <LineChart className="w-5 h-5" />,
    category: "Big Data",
  },
  {
    name: "Python",
    proficiency: 95,
    icon: <Code className="w-5 h-5" />,
    category: "Programming",
  },
  {
    name: "SQL",
    proficiency: 95,
    icon: <Database className="w-5 h-5" />,
    category: "Databases",
  },
  {
    name: "Airflow",
    proficiency: 85,
    icon: <Workflow className="w-5 h-5" />,
    category: "Orchestration",
  },
  {
    name: "Kafka",
    proficiency: 80,
    icon: <Server className="w-5 h-5" />,
    category: "Streaming",
  },
  {
    name: "AWS",
    proficiency: 85,
    icon: <Server className="w-5 h-5" />,
    category: "Cloud",
  },
  {
    name: "Snowflake",
    proficiency: 90,
    icon: <Database className="w-5 h-5" />,
    category: "Data Warehouse",
  },
  {
    name: "Terraform",
    proficiency: 75,
    icon: <Settings className="w-5 h-5" />,
    category: "Infrastructure",
  },
  {
    name: "Docker",
    proficiency: 80,
    icon: <Server className="w-5 h-5" />,
    category: "Containerization",
  },
  {
    name: "dbt",
    proficiency: 85,
    icon: <Workflow className="w-5 h-5" />,
    category: "Data Transformation",
  },
  {
    name: "Kubernetes",
    proficiency: 70,
    icon: <Settings className="w-5 h-5" />,
    category: "Orchestration",
  },
  {
    name: "Scala",
    proficiency: 75,
    icon: <Code className="w-5 h-5" />,
    category: "Programming",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized expertise in data engineering technologies and
            frameworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">{skill.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {skill.category}
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <div className="flex justify-between mt-2 text-xs text-gray-400">
                <span>Beginner</span>
                <span>Advanced</span>
                <span>Expert</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
