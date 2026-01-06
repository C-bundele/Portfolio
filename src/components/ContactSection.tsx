import React, { useState } from "react";
import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();
      if (res.ok && (json.success === true || json.success === "true")) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Contact
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            I'm currently open to opportunities in Data Science and Machine Learning. 
            Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                <a
                  href="mailto:chanchal.bundele@outlook.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium">chanchal.bundele@outlook.com</p>
                  </div>
                </a>

                <a
                  href="tel:+17165800822"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="text-foreground font-medium">(716) 580-0822</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Buffalo, NY</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">Follow me on</p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Github size={22} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="glass p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Web3Forms access key */}
                <input
                  type="hidden"
                  name="access_key"
                  value="06af8f36-7a16-4daf-9a3e-604dad19f17b"
                />

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Name</label>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-4 rounded-xl gradient-bg text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
                >
                  <Send size={18} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "sending" && (
                  <p className="text-sm text-muted-foreground mt-2">Sending...</p>
                )}
                {status === "sent" && (
                  <p className="text-sm text-foreground mt-2">Contact form submitted</p>
                )}
                {status === "error" && (
                  <p className="text-sm text-destructive mt-2">Failed to send. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
