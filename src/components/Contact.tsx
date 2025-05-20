import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 section-container">
      <h3 className="numbered-heading">
        <span className="mr-2">04.</span> What's Next?
      </h3>
      
      <div className="max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-6 mb-6">Get In Touch</h2>
        
        <p className="text-muted-foreground mb-12">
          I'm currently open to new opportunities where I can help build meaningful products and systems that scale. Whether you need a backend engineer who thinks like a founder or just want to connect about a project, I'd love to hear from you!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button 
            className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10 px-8 py-6 text-lg"
            asChild
          >
            <a href="mailto:shborade@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Say Hello
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-highlight text-highlight hover:bg-highlight/10 px-8 py-6 text-lg"
            asChild
          >
            <a href="https://drive.google.com/file/d/1RwJxRvOcrAlSKIZo6eiDuhLytXu6gvu3/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
        
        <div className="flex space-x-8">
          <a href="https://github.com/Shubhankar02" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-highlight transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/shubhankar-borade/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-highlight transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:shborade@gmail.com" className="text-muted-foreground hover:text-highlight transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
