import { Heart, Users, Shield, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Passionate Care",
      description: "Every dog is treated like family",
    },
    {
      icon: Users,
      title: "Limited Capacity",
      description: "Only 30 dogs for personal attention",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Secure, supervised play areas",
    },
    {
      icon: Clock,
      title: "Since 2015",
      description: "Years of trusted service",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background bg-pattern">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-golden font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Your Dog's Home Away From Home
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 2015, Holli-Day Care is Barre's trusted home-away-from-home for dogs. 
              We believe every dog deserves individual attention, which is why we intentionally 
              limit our daily capacity to 30 dogs.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              This ensures your furry family member gets plenty of playtime, space, and 
              personalized care in a safe, fun-loving environment. Our mission is simple: 
              to make every dog feel loved and every owner feel at peace.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-xl p-4 border border-border shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-golden/10 flex items-center justify-center mb-3">
                    <feature.icon className="w-5 h-5 text-golden" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=300&fit=crop"
                    alt="Happy golden retriever"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop"
                    alt="Dogs playing together"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=400&fit=crop"
                    alt="Two dogs running"
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src="https://images.unsplash.com/photo-1534361960057-19889db9621e?w=400&h=300&fit=crop"
                    alt="Cute puppy"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-elevated">
              <p className="font-display text-3xl font-bold">10+</p>
              <p className="text-sm text-primary-foreground/80">Years of Love</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
