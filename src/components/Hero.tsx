
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 section-container">
      <div className="opacity-0 animate-fade-in">
        <p className="font-mono text-highlight mb-5">Hi, my name is</p>
      </div>
      <div className="opacity-0 animate-fade-in-delay-1">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-4">Developer Extraordinaire.</h1>
      </div>
      <div className="opacity-0 animate-fade-in-delay-2">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
          Building systems that ship fast and scale clean.
        </h2>
      </div>
      <div className="opacity-0 animate-fade-in-delay-3 max-w-2xl">
        <p className="text-lg text-muted-foreground mb-8">
          I'm a senior backend engineer with 7+ years of experience, who turns backend chaos into simple, stable, and scalable systems. Specializing in Node.js, NestJS, and AWS infrastructure.
        </p>
      </div>
      <div className="opacity-0 animate-fade-in-delay-4 flex space-x-4">
        <Button 
          className="bg-transparent border border-highlight text-highlight hover:bg-highlight/10 px-6 py-4 text-base"
          asChild
        >
          <a href="#projects">View My Work</a>
        </Button>
        <Button 
          variant="outline" 
          className="border-highlight text-highlight hover:bg-highlight/10 px-6 py-4 text-base"
          asChild
        >
          <a href="#contact">Get In Touch</a>
        </Button>
      </div>
      <div className="opacity-0 animate-fade-in-delay-5 absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <a href="#about" className="flex flex-col items-center justify-center text-muted-foreground hover:text-highlight transition-colors duration-300">
          <span className="text-sm font-mono mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
