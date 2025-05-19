
import React from 'react';

const About = () => {
  const skills = [
    'Node.js', 'NestJS', 'Express', 'TypeScript',
    'AWS (Lambda, EventBridge, RDS, EC2)',
    'PostgreSQL', 'MongoDB', 'Redis',
    'Docker', 'Kubernetes',
    'Microservices', 'API Design',
    'CI/CD', 'System Architecture'
  ];

  return (
    <section id="about" className="py-24 section-container">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="md:col-span-2">
          <h3 className="numbered-heading">
            <span className="mr-2">01.</span> About Me
          </h3>
          
          <div className="space-y-4 text-muted-foreground">
            <p>
              Hello! I'm a passionate backend engineer who transforms complex backend challenges into elegant, scalable solutions. With over 7 years in the industry, I've specialized in building resilient systems that power meaningful applications.
            </p>
            <p>
              My approach to engineering focuses on more than just writing code—I think like a product person. This means prioritizing user experience, reliability, and maintainability from day one, while delivering technical solutions that drive business value.
            </p>
            <p>
              Throughout my career, I've built everything from real-time Point-of-Sale platforms to secure transaction flows, always finding the balance between moving fast and maintaining stability. I take ownership of projects from initial idea through to deployment and beyond.
            </p>
            <p>
              Whether it's designing APIs, setting up cloud infrastructure, or debugging edge cases in production environments, I bring a blend of technical expertise and product thinking that helps startups and businesses ship reliable products quickly.
            </p>
          </div>
          
          <h3 className="text-xl font-mono text-highlight mt-8 mb-3">Technologies I work with:</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {skills.map((skill, index) => (
              <li key={index} className="text-muted-foreground flex items-center">
                <span className="text-highlight mr-2">▹</span> {skill}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="md:col-span-1">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-highlight opacity-30 rounded-lg blur group-hover:opacity-100 transition duration-300"></div>
            <div className="relative rounded-lg overflow-hidden bg-secondary aspect-square">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                <span className="text-7xl">DE</span>
              </div>
              {/* Profile image would go here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
