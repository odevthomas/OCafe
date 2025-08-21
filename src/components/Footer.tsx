import { Coffee, Instagram, Facebook, MessageCircle, Twitter, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import coffeeLogo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: MessageCircle, href: "#", label: "WhatsApp" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full blur-2xl" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src={coffeeLogo} 
                  alt="The Coffee Logo" 
                  className="h-12 w-12 object-contain brightness-0 invert"
                />
                <h3 className="text-2xl font-display font-bold">The Coffee</h3>
              </div>
              
              <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6 max-w-md">
                Desde 2015, oferecemos a melhor experiência em café premium em São Paulo. 
                Cada xícara é preparada com carinho e os melhores grãos selecionados.
              </p>

              <div className="flex items-center space-x-2 text-accent">
                <Coffee className="h-5 w-5" />
                <span className="text-sm font-medium">Café Premium · Tradição desde 2015</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Links Rápidos</h4>
              <nav className="space-y-3">
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  Home
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  Sobre Nós
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('menu');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  Menu
                </button>
                <button 
                  onClick={() => {
                    const element = document.getElementById('address');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                >
                  Localização
                </button>
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-accent">Contato</h4>
              <div className="space-y-3 text-primary-foreground/70">
                <p>Rua dos Cafés, 123<br />Vila Madalena, São Paulo - SP</p>
                <p>(11) 9999-9999</p>
                <p>contato@thecoffee.com.br</p>
                
                <div className="pt-2">
                  <p className="text-sm font-medium text-accent mb-2">Horários:</p>
                  <p className="text-sm">Seg-Sex: 7h às 20h</p>
                  <p className="text-sm">Sáb: 8h às 22h</p>
                  <p className="text-sm">Dom: 8h às 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="border-t border-primary-foreground/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <span className="text-primary-foreground/60">Siga-nos:</span>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="ghost"
                      size="icon"
                      className="text-primary-foreground/60 hover:text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110"
                      onClick={() => window.open(social.href, '_blank')}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </Button>
                  ))}
                </div>
              </div>

              <Button
                variant="ghost"
                onClick={scrollToTop}
                className="text-primary-foreground/60 hover:text-accent hover:bg-accent/10 transition-all duration-300"
              >
                Voltar ao topo ↑
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
              <div className="flex items-center space-x-1">
                <span>© {currentYear} The Coffee. Todos os direitos reservados.</span>
              </div>
              <div className="flex items-center space-x-1 mt-2 md:mt-0">
                <span>Feito com</span>
                <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" />
                <span>em São Paulo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;