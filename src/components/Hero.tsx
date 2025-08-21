import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage1 from "@/assets/hero-coffee-1.png";
import heroImage2 from "@/assets/hero-coffee-2.png";
import heroImage3 from "@/assets/hero-coffee-3.png";
import heroImage4 from "@/assets/hero-coffee-4.png";


const images = [heroImage1, heroImage2, heroImage3];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Troca automática do background a cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // 5000ms = 5s
    return () => clearInterval(interval);
  }, []);

  const scrollToMenu = () => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden coffee-texture"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${images[currentImage]})`,
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 animate-fade-in">
          Bem-vindo à{" "}
          <span className="text-transparent bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text">
            The Coffee
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-2xl mx-auto animate-fade-in font-light leading-relaxed">
          Sua cafeteria premium em São Paulo, oferecendo uma experiência única em
          cafés especiais com o melhor dos grãos selecionados.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button size="lg" variant="hero" onClick={scrollToMenu}>
            Explore nosso Menu
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Nossa História
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          className="text-white hover:text-gold-400 transition-colors duration-300"
          onClick={scrollToMenu}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400/30 rounded-full animate-float" />
      <div
        className="absolute top-1/3 right-1/4 w-3 h-3 bg-gold-400/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-gold-400/40 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
    </section>
  );
};

export default Hero;
