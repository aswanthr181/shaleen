const Footer = () => {
  const today = new Date();
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-sm font-mono">
        Copyright © {today.getFullYear()} Shaleen Jayaraj <span className="text-primary">All rights reserved </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
