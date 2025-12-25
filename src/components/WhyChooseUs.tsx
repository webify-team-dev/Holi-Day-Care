import { Users, Home, Calendar, Award, Heart, Shield } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: "30-Dog Limit",
      description: "We intentionally cap our daily capacity to ensure every dog gets the attention they deserve. Quality over quantity, always.",
      highlight: "Personalized Care",
    },
    {
      icon: Home,
      title: "Home Away From Home",
      description: "Our facility is designed to feel like home, not a kennel. Comfortable spaces, familiar routines, and lots of love.",
      highlight: "Cozy Environment",
    },
    {
      icon: Calendar,
      title: "Meet & Greet Required",
      description: "Every new dog must pass a meet and greet session. This ensures compatibility and a stress-free experience for all pups.",
      highlight: "Safety First",
    },
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Since 2015, we've cared for thousands of dogs. Our experience means peace of mind for you and happiness for your pet.",
      highlight: "Trusted Since 2015",
    },
    {
      icon: Heart,
      title: "Genuine Love",
      description: "We're not just caregivers—we're dog lovers. Every member of our team is passionate about animal welfare.",
      highlight: "Passionate Team",
    },
    {
      icon: Shield,
      title: "Safe & Supervised",
      description: "Constant supervision, secure play areas, and strict health protocols keep your furry friend safe at all times.",
      highlight: "24/7 Monitoring",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-golden font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            What Makes Us Different
          </h2>
          <p className="text-muted-foreground text-lg">
            At Holli-Day Care, we go beyond basic pet care. Here's why Vermont dog owners trust us with their beloved companions.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-14 h-14 rounded-2xl bg-golden/10 flex items-center justify-center group-hover:bg-golden/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-golden" />
                </div>
                <span className="text-xs font-semibold text-forest bg-forest-light px-3 py-1 rounded-full">
                  {reason.highlight}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-primary rounded-3xl p-8 lg:p-12 text-center">
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Give Your Dog the Best Care?
          </h3>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Schedule a meet and greet today and see why Holli-Day Care is the top choice for dog owners in Central Vermont.
          </p>
          <a
            href="tel:8026220474"
            className="inline-flex items-center gap-2 bg-golden text-foreground font-semibold px-8 py-4 rounded-xl shadow-elevated hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-2xl">📞</span>
            Call (802) 622-0474
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
