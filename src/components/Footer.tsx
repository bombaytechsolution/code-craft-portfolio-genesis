
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-muted-foreground text-sm font-mono">
      <div className="section-container">
        <p>Built with Precision & Purpose</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
