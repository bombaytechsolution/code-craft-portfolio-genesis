import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Experience = () => {
  const experiences = [
    {
      id: "lead",
      company: "Dirtube Interactive",
      position: "Lead Architecture",
      period: "2023 - 2025",
      project: "Specter",  
      descriptions: [
        "Optimized MongoDB performance by reducing the return vs scanned document ratio from 1:1000 to 1:10, significantly improving query efficiency within an achievement system.",
        "Built a complex live-ops scheduling system using Redis queues to manage tasks, competitions, and other scheduled events.",
        "Developed and deployed APIs and CI/CD pipelines via AWS CodePipeline for automated, multi-environment deployment.",
        "Established company-wide technical standards and best practices for backend development, improving code quality and reducing onboarding time."
      ],
      technologies: ["NestJS", "MongoDB", "Redis", "AWS CodePipeline", "CI/CD"]
    },
    {
      id: "senior",
      company: "Dirtube Interactive",
      position: "Senior Backend Developer",
      period: "2021 - 2023",
      project: "Gamestarz",
      descriptions: [
        "Implemented a secure database design in PostgreSQL and built an in-house transaction system with APIs developed in NestJS to handle real-money operations efficiently.",
        "Developed a Redis-based live-ops scheduling system to automate competition and task scheduling, enhancing scalability.",
        "Built and deployed APIs using AWS (Lambda, EC2) for scalability and high availability, demonstrating proficiency in cloud deployment.",
        "Managed a team of backend engineers, establishing coding standards and mentoring junior team members."
      ],
      technologies: ["NestJS", "PostgreSQL", "Redis", "AWS Lambda", "AWS EC2"]
    },
    {
      id: "backend",
      company: "Dirtube Interactive",
      position: "Backend Developer",
      period: "2019 - 2021",
      project: "Capshot",
      descriptions: [
        "Used MongoDB for caching to reduce client-server response times by 80%, implementing a cron job for efficient data retrieval.",
        "Built a real-time chat system using Socket.io and ExpressJS to develop APIs, enabling seamless user communication.",
        "Integrated FFmpeg for automated video thumbnail generation, improving content loading times and user experience.",
        "Created automated testing suites that reduced regression bugs by 40% and improved deployment confidence."
      ],
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "FFmpeg"]
    }
  ];

  return (
    <section id="experience" className="py-24 section-container">
      <h3 className="numbered-heading">
        <span className="mr-2">02.</span> Where I've Worked
      </h3>
      
      <div className="mt-10">
        <Tabs defaultValue="lead" className="max-w-3xl">
          <TabsList className="mb-8 flex flex-wrap overflow-x-auto border-b border-muted bg-transparent h-auto w-full">
            {experiences.map((exp) => (
              <TabsTrigger 
                key={exp.id} 
                value={exp.id}
                className="data-[state=active]:text-highlight data-[state=active]:border-b-2 data-[state=active]:border-highlight pb-2 px-4 text-sm font-mono"
              >
                {exp.position}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {experiences.map((exp) => (
            <TabsContent key={exp.id} value={exp.id} className="text-muted-foreground">
              <h3 className="text-xl text-primary mb-1">
                {exp.position} <span className="text-highlight">@ {exp.company}</span>
              </h3>
              <p className="font-mono text-sm mb-1">{exp.period}</p>
              <p className="font-mono text-sm mb-4 text-highlight">Project: {exp.project}</p>
              
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
