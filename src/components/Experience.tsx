
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const experiences = [
    {
      id: "seniordev",
      company: "TechGiant Inc.",
      position: "Senior Backend Engineer",
      period: "January 2021 - Present",
      descriptions: [
        "Led the redesign of a critical payment processing system handling $10M in daily transactions, increasing throughput by 35% and reducing error rates by 50%.",
        "Architected and implemented a distributed caching layer that reduced database load by 70% and improved API response times by 40%.",
        "Mentored a team of 5 junior engineers, establishing best practices for code reviews, testing, and documentation.",
        "Implemented comprehensive monitoring and alerting systems using Prometheus and Grafana, reducing incident response time by 60%."
      ],
      technologies: ["Node.js", "Kubernetes", "PostgreSQL", "Redis", "AWS"]
    },
    {
      id: "midleveldev",
      company: "ScaleUp Solutions",
      position: "Backend Developer",
      period: "March 2018 - December 2020",
      descriptions: [
        "Developed and maintained RESTful APIs serving over 3 million monthly active users.",
        "Improved database query performance by 45% through optimization and indexing strategies.",
        "Designed and implemented a message queue system to handle asynchronous processing of user-generated content.",
        "Collaborated with frontend teams to define API contracts and ensure seamless integration."
      ],
      technologies: ["Python", "Django", "MySQL", "RabbitMQ", "Docker"]
    },
    {
      id: "juniordev",
      company: "StartupLab",
      position: "Software Engineer",
      period: "July 2016 - February 2018",
      descriptions: [
        "Built microservices for a B2B SaaS platform using Java Spring Boot.",
        "Implemented authentication and authorization systems using OAuth 2.0 and JWT.",
        "Participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives.",
        "Contributed to the migration from a monolithic architecture to microservices."
      ],
      technologies: ["Java", "Spring Boot", "MongoDB", "Jenkins", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-24 section-container">
      <h3 className="numbered-heading">
        <span className="mr-2">02.</span> Where I've Worked
      </h3>
      
      <div className="mt-10">
        <Tabs defaultValue="seniordev" className="max-w-3xl">
          <TabsList className="mb-8 flex flex-wrap overflow-x-auto border-b border-muted bg-transparent h-auto w-full">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className="data-[state=active]:text-highlight data-[state=active]:border-b-2 data-[state=active]:border-highlight pb-2 px-4 text-sm font-mono"
              >
                {exp.company}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="text-muted-foreground">
              <h3 className="text-xl text-primary mb-1">
                {exp.position} <span className="text-highlight">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-sm mb-4">{exp.period}</p>
              
              <ul className="space-y-4">
                {exp.descriptions.map((desc, index) => (
                  <li key={index} className="flex">
                    <span className="text-highlight mr-4 mt-1">▹</span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 flex flex-wrap gap-2">
                {exp.technologies.map((tech, index) => (
                  <span key={index} className="text-xs font-mono px-3 py-1 rounded-full bg-secondary text-highlight">
                    {tech}
                  </span>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Experience;
