import { Coffee, Award, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@/assets/about-coffee-2.png";

const About = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Conheça <span className="text-accent">Nossa História</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma jornada de paixão pelo café que começou em 2015
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="overflow-hidden rounded-xl shadow-warm">
              <img 
                src={aboutImage} 
                alt="Interior da The Coffee" 
                className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-4 rounded-xl shadow-gold animate-float">
              <Coffee className="h-8 w-8" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-foreground text-lg leading-relaxed">
                A The Coffee foi fundada em 2015 com a missão de proporcionar 
                <strong className="text-primary"> cafés de alta qualidade</strong> e uma 
                experiência única aos nossos clientes. Nossa paixão pelo café é refletida 
                na seleção cuidadosa de grãos especiais e no preparo artesanal por 
                baristas experientes.
              </p>
              
              <p className="text-foreground leading-relaxed">
                Em nosso café, você encontrará uma combinação perfeita de 
                <strong className="text-accent"> tradição e inovação</strong>, garantindo que 
                cada xícara seja uma verdadeira celebração do sabor e aroma do café. 
                Visite-nos e descubra por que somos reconhecidos como um destino de 
                café premium em São Paulo.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-4 my-8">
              <Card className="text-center p-4 border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-2">
                  <Award className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-primary">Premium Quality</h4>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-2">
                  <Coffee className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-primary">Grãos Especiais</h4>
                </CardContent>
              </Card>
              
              <Card className="text-center p-4 border-border/50 hover:shadow-soft transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-2">
                  <Heart className="h-8 w-8 text-accent mx-auto mb-2" />
                  <h4 className="font-semibold text-sm text-primary">Feito com Amor</h4>
                </CardContent>
              </Card>
            </div>

            <Button 
              size="lg"
              variant="warm"
              onClick={scrollToMenu}
            >
              Explore nosso Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;