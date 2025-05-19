
import React from 'react';
import { Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const Projects = () => {
  const featuredProjects = [
    {
      title: "Real-time POS Platform",
      description: "A high-performance point-of-sale system handling 10,000+ transactions daily with real-time inventory management, transaction processing, and reporting features.",
      technologies: ["Node.js", "NestJS", "PostgreSQL", "Redis", "AWS Lambda"],
      github: "#",
      external: "#",
      imageDescription: "Real-time transaction processing system"
    },
    {
      title: "Secure Payment Gateway",
      description: "A robust payment processing system with multi-currency support, fraud detection, and compliance with international security standards (PCI-DSS).",
      technologies: ["Node.js", "Express", "AWS EventBridge", "Docker", "Stripe API"],
      github: "#",
      external: "#",
      imageDescription: "Financial system architecture diagram"
    },
    {
      title: "Microservice Architecture",
      description: "A containerized microservice infrastructure supporting high-availability applications with automated scaling, service discovery, and fault tolerance.",
      technologies: ["Kubernetes", "Docker", "AWS EC2", "Terraform", "Prometheus"],
      github: "#",
      external: "#",
      imageDescription: "Microservice architecture diagram"
    }
  ];
  
  const otherProjects = [
    {
      title: "Authentication Service",
      description: "A secure authentication system with multi-factor authentication, role-based access control, and single sign-on capabilities for enterprise applications.",
      technologies: ["Node.js", "NestJS", "JWT", "OAuth2"]
    },
    {
      title: "Database Migration Tool",
      description: "A tool for seamlessly migrating large production databases with minimal downtime, featuring automatic schema validation and rollback capabilities.",
      technologies: ["TypeScript", "PostgreSQL", "MongoDB"]
    },
    {
      title: "API Gateway",
      description: "A high-performance gateway service providing routing, load balancing, rate limiting, and request validation for distributed microservices.",
      technologies: ["Node.js", "Express", "Redis", "Docker"]
    },
    {
      title: "Event Sourcing System",
      description: "A lightweight framework implementing event sourcing and CQRS patterns for maintaining reliable audit trails and state reconstruction.",
      technologies: ["TypeScript", "RabbitMQ", "MongoDB"]
    },
    {
      title: "CI/CD Pipeline",
      description: "An automated continuous integration and deployment pipeline with integrated testing, security scanning, and blue-green deployment strategies.",
      technologies: ["AWS CodePipeline", "Docker", "Jest", "GitHub Actions"]
    },
    {
      title: "Monitoring Infrastructure",
      description: "A comprehensive monitoring system with real-time alerting, metrics visualization, and anomaly detection for production services.",
      technologies: ["Prometheus", "Grafana", "ELK Stack", "AWS CloudWatch"]
    }
  ];

  return (
    <section id="projects" className="py-24 section-container">
      <h3 className="numbered-heading">
        <span className="mr-2">03.</span> Some Things I've Built
      </h3>
      
      <div className="space-y-24 mt-10">
        {featuredProjects.map((project, index) => (
          <div 
            key={index} 
            className={`relative grid md:grid-cols-12 items-center gap-10 ${
              index % 2 === 0 ? '' : 'md:text-right'
            }`}
          >
            {/* Project Image */}
            <div 
              className={`md:col-span-7 relative rounded-lg overflow-hidden aspect-video bg-secondary ${
                index % 2 === 0 ? 'md:order-2' : 'md:order-1'
              }`}
            >
              <div className="absolute inset-0 bg-highlight/10 flex items-center justify-center text-muted-foreground/50 text-center p-4">
                <span className="text-2xl font-mono">{project.imageDescription}</span>
              </div>
            </div>
            
            {/* Project Content */}
            <div 
              className={`md:col-span-7 md:absolute ${
                index % 2 === 0 ? 'md:left-0' : 'md:right-0'
              } z-10`}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? '' : 'md:items-end'}`}>
                <p className="font-mono text-highlight mb-1">Featured Project</p>
                <h4 className="text-2xl font-bold text-primary mb-4">{project.title}</h4>
                
                <div className="md:bg-secondary md:p-6 md:rounded-lg shadow-xl mb-4">
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
                
                <ul className={`flex flex-wrap gap-3 mb-6 ${
                  index % 2 === 0 ? '' : 'md:justify-end'
                }`}>
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-xs font-mono text-muted-foreground">
                      {tech}
                    </li>
                  ))}
                </ul>
                
                <div className="flex space-x-4">
                  <a href={project.github} className="text-foreground hover:text-highlight transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.external} className="text-foreground hover:text-highlight transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <h3 className="text-xl font-mono text-highlight mt-24 mb-10 text-center">Other Noteworthy Projects</h3>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {otherProjects.map((project, index) => (
          <Card key={index} className="bg-secondary border-0 hover:translate-y-[-5px] transition-transform p-6 h-full flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-highlight">
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="flex space-x-3">
                <a href="#" className="text-foreground hover:text-highlight transition-colors">
                  <Github size={20} />
                </a>
              </div>
            </div>
            
            <h5 className="text-xl font-bold text-primary mb-2">{project.title}</h5>
            <p className="text-muted-foreground mb-8 flex-grow">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="text-xs font-mono text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
