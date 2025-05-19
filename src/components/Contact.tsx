
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="py-24 section-container text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="numbered-heading justify-center">
          <span className="mr-2">04.</span> What's Next?
        </h3>
        
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-6 mb-6">Get In Touch</h2>
        
        <p className="text-muted-foreground mb-12">
          I'm currently open to new opportunities where I can help build meaningful products and systems that scale. Whether you need a backend engineer who thinks like a founder or just want to connect about a project, I'd love to hear from you!
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <Button 
            className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10 px-8 py-6 text-lg"
            asChild
          >
            <a href="mailto:hello@example.com">
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-highlight text-highlight hover:bg-highlight/10 px-8 py-6 text-lg"
            asChild
          >
            <Link href="#">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Link>
          </Button>
        </div>
        
        <div className="flex justify-center space-x-8">
          <Link href="#" className="text-muted-foreground hover:text-highlight transition-colors">
            <Github size={24} />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-highlight transition-colors">
            <Linkedin size={24} />
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-highlight transition-colors">
            <Mail size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
