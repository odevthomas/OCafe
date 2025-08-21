import { useState } from 'react';
import { Menu, X, Search, ShoppingCart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import coffeeLogo from "@/assets/logo.png";

interface HeaderProps {
  cartItemsCount: number;
  onCartOpen: () => void;
}

const Header = ({ cartItemsCount, onCartOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-smooth">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={coffeeLogo} 
              alt="The Coffee Logo" 
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-xl font-display font-bold text-primary">
              The Coffee
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('address')}
              className="text-foreground hover:text-accent transition-smooth font-medium"
            >
              Endereço
            </button>
          </nav>

          {/* Icons and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
         <Button
  variant="ghost"
  size="icon"
  className="text-foreground transition-colors duration-300 hover:text-accent-foreground"
>
  <Search className="h-5 w-5" />
</Button>

            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative text-foreground hover:text-accent"
              onClick={onCartOpen}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse-gold">
                  {cartItemsCount}
                </span>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100 mt-4" : "max-h-0 opacity-0"
        )}>
          <nav className="flex flex-col space-y-4 p-4 bg-card rounded-lg shadow-soft">
            <button
              onClick={() => scrollToSection('home')}
              className="text-left text-foreground hover:text-accent transition-smooth font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-foreground hover:text-accent transition-smooth font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-left text-foreground hover:text-accent transition-smooth font-medium"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-left text-foreground hover:text-accent transition-smooth font-medium"
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('address')}
              className="text-left text-foreground hover:text-accent transition-smooth font-medium"
            >
              Endereço
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;