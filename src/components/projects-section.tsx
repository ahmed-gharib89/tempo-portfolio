"use client";

import { useState } from "react";
import { Database, GitMerge, LineChart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type ProjectCategory = "all" | "data-pipelines" | "etl" | "big-data";

interface Project {
  id: number;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Data Lake Architecture",
    description:
      "Designed and implemented a scalable data lake solution processing over 5TB of data daily with real-time analytics capabilities.",
    category: "big-data",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    technologies: ["Apache Spark", "AWS S3", "Databricks", "Delta Lake"],
  },
  {
    id: 2,
    title: "Automated ETL Pipeline Framework",
    description:
      "Built a reusable ETL framework that reduced development time by 40% and improved data quality through automated validation.",
    category: "etl",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Python", "Airflow", "dbt", "Snowflake"],
  },
  {
    id: 3,
    title: "Real-time Data Processing Pipeline",
    description:
      "Developed a streaming data pipeline handling 10,000+ events per second with sub-second latency for financial transaction monitoring.",
    category: "data-pipelines",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    technologies: ["Kafka", "Flink", "Elasticsearch", "Grafana"],
  },
  {
    id: 4,
    title: "Data Quality Monitoring System",
    description:
      "Created an automated system for monitoring data quality metrics across the enterprise data warehouse with alerting capabilities.",
    category: "data-pipelines",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["Python", "Great Expectations", "Airflow", "Prometheus"],
  },
  {
    id: 5,
    title: "Multi-source Data Integration Platform",
    description:
      "Architected a centralized data integration platform connecting 20+ disparate systems with standardized data models.",
    category: "etl",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
    technologies: ["Talend", "PostgreSQL", "REST APIs", "Docker"],
  },
  {
    id: 6,
    title: "Big Data Analytics Platform",
    description:
      "Implemented a cloud-based analytics platform enabling self-service BI for 500+ business users across the organization.",
    category: "big-data",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    technologies: ["Hadoop", "Hive", "Tableau", "AWS EMR"],
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const categories = [
    { id: "all", label: "All Projects", icon: null },
    {
      id: "data-pipelines",
      label: "Data Pipelines",
      icon: <LineChart className="w-4 h-4 mr-1" />,
    },
    {
      id: "etl",
      label: "ETL Processes",
      icon: <GitMerge className="w-4 h-4 mr-1" />,
    },
    {
      id: "big-data",
      label: "Big Data Solutions",
      icon: <Database className="w-4 h-4 mr-1" />,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my recent work across various data engineering domains
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              className={`flex items-center ${activeCategory === category.id ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"}`}
            >
              {category.icon}
              {category.label}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-gray-700 text-blue-300 border-blue-500"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  variant="outline"
                  className="mt-2 text-blue-400 border-blue-500 hover:bg-blue-900/20"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
