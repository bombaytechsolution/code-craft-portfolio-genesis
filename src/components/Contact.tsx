
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 section-container text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="numbered-heading justify-center">
          <span className="mr-2">04.</span> What's Next?
        </h3>
        
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-6 mb-6">Get In Touch</h2>
        
        <p className="text-muted-foreground mb-12">
          I'm currently open to new opportunities and would love to hear about your project. Whether you have a question or just want to say hi, I'll get back to you as soon as I can!
        </p>
        
        <Button 
          className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10 px-8 py-6 text-lg"
          asChild
        >
          <a href="mailto:hello@example.com">
            <Mail className="mr-2 h-5 w-5" />
            Say Hello
          </a>
        </Button>
        
        <div className="flex justify-center mt-16 space-x-8">
          <a href="#" className="text-muted-foreground hover:text-highlight transition-colors">
            <Github size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-highlight transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-highlight transition-colors">
            <MessageSquare size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
