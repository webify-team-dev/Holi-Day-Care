import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // دالة لتحويل البيانات لتنسيق تفهمه Netlify
  const encode = (data: { [key: string]: string }) => {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // إرسال البيانات فعلياً إلى Netlify
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible. Thank you!",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // بيانات التواصل (تأكد من تغييرها لتناسب مغسلة السيارات لاحقاً)
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(602) XXX-XXXX", // غير الرقم هنا
      href: "tel:602XXXXXXX",
      action: "Click to call",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@carwash.com",
      href: "mailto:info@carwash.com",
      action: "Send email",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "2504 N 16th St, Phoenix, AZ",
      href: "https://goo.gl/maps/xyz",
      action: "Get directions",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Open 24/7",
      href: null,
      action: "Every day",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions about our self-service stations? We're here to help!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-lg">
            <h3 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            
            {/* أضفنا هنا الخصائص اللازمة لـ Netlify */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit} 
              className="space-y-5"
            >
              {/* هذا الحقل المخفي ضروري جداً لـ Netlify مع React */}
              <input type="hidden" name="form-name" value="contact" />
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name" // ضروري لـ Netlify
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="h-12"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email" // ضروري لـ Netlify
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    name="phone" // ضروري لـ Netlify
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(602) 555-0123"
                    className="h-12"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message" // ضروري لـ Netlify
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can we help you today?"
                  rows={5}
                  className="resize-none"
                />
              </div>
              <Button type="submit" variant="default" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* الجهة الأخرى (Info) تظل كما هي مع تحديث البيانات */}
          <div className="space-y-8">
             {/* ... نفس كود عرض البيانات والـ Map ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
