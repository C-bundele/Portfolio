const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chanchal Bundele. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Built with <span className="text-primary">passion</span> for data science
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
