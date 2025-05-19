
import React from 'react';

const About = () => {
  const skills = [
    'Node.js', 'Python', 'Java', 'Go',
    'AWS', 'Docker', 'Kubernetes',
    'MongoDB', 'PostgreSQL', 'Redis',
    'RabbitMQ', 'Kafka',
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
              Hello! I'm a passionate backend engineer who thrives on building robust, scalable systems that power modern applications. My journey in software development started 7 years ago, and since then I've been dedicated to crafting efficient server-side solutions.
            </p>
            <p>
              My approach to engineering focuses on performance, maintainability, and security. I believe that well-designed backend architecture is the foundation of exceptional user experiences, even if it remains invisible to the end user.
            </p>
            <p>
              Throughout my career, I've worked on high-traffic systems handling millions of requests, designed data models that scale elegantly, and implemented infrastructure that maintains stability under pressure.
            </p>
            <p>
              When I'm not optimizing database queries or designing API endpoints, I enjoy contributing to open-source projects and mentoring junior developers. I'm constantly learning and experimenting with new technologies to stay ahead of industry trends.
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
