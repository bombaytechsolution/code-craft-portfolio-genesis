import React from 'react';
import Image from 'next/image';

const About = () => {
  const skills = [
    'Node.js', 'NestJS', 'Express', 'TypeScript',
    'MongoDB', 'PostgreSQL', 'Redis',
    'AWS (Lambda, EC2, CodePipeline)',
    'Socket.io', 'Real-time Systems',
    'Database Optimization', 'Live-ops Scheduling',
    'Transaction Systems', 'API Design',
    'FFmpeg', 'CI/CD'
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
              I'm a senior backend engineer who doesn't just write code—I build products that ship fast and scale clean.
            </p>
            <p>
              With 7+ years of experience in Node.js, NestJS, PostgreSQL, MongoDB, and AWS, I specialize in turning backend chaos into simple, stable, and scalable systems. From building real-time POS platforms to secure transaction flows, I know how to move fast without breaking things.
            </p>
            <p>
              More than a developer, I think like a product person—focusing on user experience, reliability, and maintainability from day one. Whether it's designing APIs, setting up infrastructure, or debugging edge cases, I take ownership from idea to deployment.
            </p>
            <p>
              🔧 What I bring: Rapid backend development with clean architecture, AWS-powered scalability (Lambda, EventBridge, RDS, EC2), real-world problem solving from production fire-fights, and a mindset built for startups: lean, reliable, fast.
            </p>
            <p>
              📬 If you're building something meaningful and need a backend engineer who can own the tech while thinking like a founder—let's connect.
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
          <div className="relative group mt-6">
            <div className="absolute -inset-1.5 bg-highlight opacity-30 rounded-lg blur group-hover:opacity-100 transition duration-300"></div>
            <div className="relative rounded-lg overflow-hidden bg-secondary" style={{ height: '400px', width: '100%' }}>
              <Image 
                src="/profile.JPG" 
                alt="Profile picture" 
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
