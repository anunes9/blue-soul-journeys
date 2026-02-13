import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Mail, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    destination: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", destination: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-24 ocean-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-aqua/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-ocean-light/10 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                Ready to Explore?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Tell us about your dream dive journey. Whether you're drawn to
                the vibrant reefs of the Red Sea, the manta rays of the
                Maldives, or the whale sharks of Mozambique—we'll craft the
                perfect expedition for you.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <a
                  href="mailto:hello@bluesouljourneys.com"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-aqua-light transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>hello@bluesouljourneys.com</span>
                </a>
                <a
                  href="https://instagram.com/bluesouljourneys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-aqua-light transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@bluesouljourneys</span>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="inline-flex items-center gap-3 glass-card rounded-full px-5 py-3">
                <div className="w-2 h-2 rounded-full bg-aqua animate-pulse" />
                <span className="text-sm text-primary-foreground/90">
                  Typically respond within 24 hours
                </span>
              </div>
            </div>

            {/* Right Content - Form */}
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground/90">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-aqua"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground/90">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-aqua"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground/90">
                    Dream Destination
                  </label>
                  <Input
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    placeholder="e.g., Maldives, Red Sea..."
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-aqua"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-primary-foreground/90">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your diving experience and what you're looking for..."
                    rows={4}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-aqua resize-none"
                  />
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
