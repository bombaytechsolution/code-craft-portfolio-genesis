
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const experiences = [
    {
      id: "seniordev",
      company: "TechScale Solutions",
      position: "Senior Backend Engineer",
      period: "January 2021 - Present",
      descriptions: [
        "Led development of a real-time Point-of-Sale platform processing 10,000+ transactions daily with Node.js and NestJS, ensuring 99.9% uptime.",
        "Architected secure transaction flows and payment processing systems using AWS Lambda and EventBridge, reducing processing time by 40%.",
        "Implemented microservice architecture with containerized applications using Docker and Kubernetes, improving scalability and deployment efficiency.",
        "Mentored junior engineers on clean code practices and system design, establishing coding standards and documentation protocols."
      ],
      technologies: ["Node.js", "NestJS", "AWS", "PostgreSQL", "Kubernetes"]
    },
    {
      id: "midleveldev",
      company: "DataFlow Systems",
      position: "Backend Developer",
      period: "March 2018 - December 2020",
      descriptions: [
        "Built and maintained API services handling 5M+ monthly requests for a SaaS product used by enterprise clients.",
        "Optimized MongoDB queries and implemented caching strategies that improved response times by 60%.",
        "Designed and implemented event-driven architecture for real-time data processing using RabbitMQ.",
        "Collaborated with product teams to shape feature requirements and ensure technical feasibility before implementation."
      ],
      technologies: ["Node.js", "Express", "MongoDB", "RabbitMQ", "AWS EC2"]
    },
    {
      id: "juniordev",
      company: "InnoTech Ventures",
      position: "Software Engineer",
      period: "July 2016 - February 2018",
      descriptions: [
        "Developed RESTful APIs and backend services for an e-commerce platform serving 50,000+ monthly active users.",
        "Implemented authentication and authorization systems with OAuth 2.0 and JWT for secure user management.",
        "Created automated testing suites that reduced regression bugs by 40% and improved deployment confidence.",
        "Participated in on-call rotations to handle production issues, developing strong troubleshooting skills."
      ],
      technologies: ["Node.js", "Express", "PostgreSQL", "Redis", "CI/CD"]
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
