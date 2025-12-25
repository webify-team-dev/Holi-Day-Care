import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Holli-Day Care | Dog Daycare & Boarding in Barre, Vermont</title>
        <meta
          name="description"
          content="Professional dog daycare and boarding in Barre, Vermont. Limited to 30 dogs daily for personalized care. $30/day daycare, $40/night boarding. Call (802) 622-0474."
        />
        <meta
          name="keywords"
          content="dog daycare Barre VT, dog boarding central Vermont, Vermont pet care, dog daycare near me, overnight dog boarding, Barre Vermont doggie daycare"
        />
        <meta property="og:title" content="Holli-Day Care | Dog Daycare & Boarding in Barre, Vermont" />
        <meta
          property="og:description"
          content="A fun-loving doggie daycare where your dog can be a dog! Professional care limited to 30 dogs daily."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <link rel="canonical" href="https://hollidaycare.com" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Holli-Day Care",
            "description": "Professional dog daycare and boarding in Barre, Vermont. Limited to 30 dogs daily for personalized care.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "8 Circle St",
              "addressLocality": "Barre",
              "addressRegion": "VT",
              "postalCode": "05641",
              "addressCountry": "US"
            },
            "telephone": "(802) 622-0474",
            "email": "holli.daycare@gmail.com",
            "openingHours": "Mo-Fr 07:00-17:30",
            "priceRange": "$30-$40",
            "image": "https://hollidaycare.com/og-image.jpg",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=100063586482980",
              "https://www.instagram.com/holli_daycare"
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
