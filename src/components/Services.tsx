import { Button } from "@/components/ui/button";
import { Sun, Moon, Check, Users } from "lucide-react";

const Services = () => {
  const daycareFeatures = [
    "7:00 AM - 5:30 PM drop-off/pick-up",
    "Indoor & outdoor play areas",
    "Supervised group activities",
    "Rest periods included",
    "Fresh water always available",
    "Daily updates available",
  ];

  const boardingFeatures = [
    "Comfortable sleeping quarters",
    "Evening walks included",
    "Multi-dog discounts available",
    "24/7 supervision",
    "Personalized feeding schedule",
    "Morning & evening playtime",
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-golden font-semibold text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Daycare & Boarding Options
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you need daily daycare or overnight boarding, we offer flexible, 
            affordable options designed with your dog's happiness and well-being in mind.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Daycare Card */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-elevated hover:shadow-glow transition-all duration-500 group">
            <div className="w-16 h-16 rounded-2xl bg-golden/10 flex items-center justify-center mb-6 group-hover:bg-golden/20 transition-colors">
              <Sun className="w-8 h-8 text-golden" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Dog Daycare</h3>
            <p className="text-muted-foreground mb-6">Perfect for working pet parents who want their dog to socialize and exercise during the day.</p>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold text-primary">$30</span>
                <span className="text-muted-foreground">/day</span>
              </div>
              <p className="text-sm text-golden font-medium mt-1">Limited to 30 dogs daily</p>
            </div>

            <ul className="space-y-3 mb-8">
              {daycareFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-foreground">
                  <div className="w-5 h-5 rounded-full bg-forest/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-forest" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" className="w-full" asChild>
              <a href="tel:8026220474">Book Daycare</a>
            </Button>
          </div>

          {/* Boarding Card */}
          <div className="bg-primary text-primary-foreground rounded-3xl p-8 shadow-elevated relative overflow-hidden">
            {/* Popular Badge */}
            <div className="absolute top-6 right-6 bg-golden text-foreground text-xs font-bold px-3 py-1 rounded-full">
              POPULAR
            </div>
            
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mb-6">
              <Moon className="w-8 h-8 text-golden" />
            </div>
            
            <h3 className="font-display text-2xl font-bold mb-2">Dog Boarding</h3>
            <p className="text-primary-foreground/80 mb-6">Overnight stays with all the comforts of home plus loving supervision around the clock.</p>
            
            <div className="mb-6">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-5xl font-bold">$40</span>
                <span className="text-primary-foreground/70">/night</span>
              </div>
              <p className="text-sm text-golden font-medium mt-1">Multi-dog discounts available</p>
            </div>

            <ul className="space-y-3 mb-8">
              {boardingFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-golden/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-golden" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="w-full" asChild>
              <a href="tel:8026220474">Book Boarding</a>
            </Button>
          </div>
        </div>

        {/* Multi-dog Pricing */}
        <div className="mt-12 bg-card rounded-2xl p-8 max-w-3xl mx-auto border border-border shadow-soft">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-6 h-6 text-golden" />
            <h4 className="font-display text-xl font-bold text-foreground">Multi-Dog Family Discounts</h4>
          </div>
          <p className="text-muted-foreground mb-6">Save $5 per additional dog when boarding multiple pets from the same family!</p>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-golden/5 rounded-xl p-4">
              <p className="text-sm text-muted-foreground mb-1">2 Dogs</p>
              <p className="font-display text-2xl font-bold text-foreground">$75</p>
              <p className="text-xs text-golden">Save $5</p>
            </div>
            <div className="bg-golden/5 rounded-xl p-4">
              <p className="text-sm text-muted-foreground mb-1">3 Dogs</p>
              <p className="font-display text-2xl font-bold text-foreground">$110</p>
              <p className="text-xs text-golden">Save $10</p>
            </div>
            <div className="bg-golden/5 rounded-xl p-4">
              <p className="text-sm text-muted-foreground mb-1">4+ Dogs</p>
              <p className="font-display text-2xl font-bold text-foreground">Call Us</p>
              <p className="text-xs text-golden">Custom pricing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
