
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-muted-foreground text-sm font-mono">
      <div className="section-container">
        <p>Building systems that ship fast and scale clean</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
