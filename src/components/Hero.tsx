import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-dogs.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Happy dogs playing at Holli-Day Care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/70 to-foreground/40" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-40 right-10 w-32 h-32 bg-golden/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-forest/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-golden/20 backdrop-blur-sm border border-golden/30 rounded-full px-4 py-2 mb-6 animate-fade-up">
            <span className="text-golden text-sm font-medium">Est. 2015 • Barre, Vermont</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Where Your Dog Can Just{" "}
            <span className="text-golden">Be a Dog</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-lg sm:text-xl text-primary-foreground/90 mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Professional Dog Daycare & Boarding in Barre, Vermont.{" "}
            <span className="text-golden font-medium">Limited to 30 Dogs Daily</span> for personalized care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <a href="tel:8026220474" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Schedule Meet & Greet
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="#services">View Services</a>
            </Button>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-primary-foreground/80 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <MapPin className="w-5 h-5 text-golden" />
            <span>8 Circle St, Barre, VT 05641</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
