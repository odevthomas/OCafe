import { Plus, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cappuccinoImg from "@/assets/coffee-products/cappuccino.jpg";
import cafePretoImg from "@/assets/coffee-products/cafe-preto.jpg";
import cafeComLeiteImg from "@/assets/coffee-products/cafe-com-leite.jpg";
import mochaImg from "@/assets/coffee-products/mocha.jpg";
import latteImg from "@/assets/coffee-products/latte.jpg";
import espressoCubanoImg from "@/assets/coffee-products/espresso-cubano.jpg";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isPopular?: boolean;
}

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu = ({ onAddToCart }: MenuProps) => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Café com Leite",
      description: "Cremoso café com leite vaporizado, equilibrio perfeito",
      price: 15.99,
      originalPrice: 19.90,
      image: cafeComLeiteImg,
      rating: 4.8,
      isPopular: true
    },
    {
      id: 2,
      name: "Café Preto",
      description: "Café puro e intenso, para os verdadeiros apreciadores",
      price: 7.99,
      originalPrice: 10.99,
      image: cafePretoImg,
      rating: 4.6
    },
    {
      id: 3,
      name: "Espresso Cubano",
      description: "Espresso forte com toque açucarado tradicional cubano",
      price: 12.99,
      originalPrice: 19.99,
      image: espressoCubanoImg,
      rating: 4.9
    },
    {
      id: 4,
      name: "Cappuccino",
      description: "Espresso com leite vaporizado e espuma cremosa",
      price: 18.99,
      originalPrice: 20.99,
      image: cappuccinoImg,
      rating: 4.7,
      isPopular: true
    },
    {
      id: 5,
      name: "Café Mocha",
      description: "Combinação irresistível de café, chocolate e chantilly",
      price: 22.99,
      originalPrice: 25.99,
      image: mochaImg,
      rating: 4.8
    },
    {
      id: 6,
      name: "Café Latte",
      description: "Espresso suave com generosa quantidade de leite vaporizado",
      price: 20.99,
      originalPrice: 24.99,
      image: latteImg,
      rating: 4.7
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Nosso <span className="text-accent">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seleção especial de cafés premium preparados com grãos de alta qualidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-border/50 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-100 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground font-semibold">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-1.5">
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 text-accent fill-accent" />
                    <span className="text-xs font-medium text-foreground">{item.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold text-primary mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-accent">
                      {formatPrice(item.price)}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
                
                <Button 
                  className="w-full"
                  variant="hero"
                  onClick={() => onAddToCart(item)}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Adicionar ao Carrinho
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;