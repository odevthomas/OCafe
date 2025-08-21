import { useState, useEffect } from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { MenuItem } from './Menu';
import { useToast } from "@/hooks/use-toast";

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  onClearCart: () => void;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onClearCart }: CartProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const handleCheckout = () => {
    if (!customerName.trim()) {
      toast({
        title: "Informe seu nome",
        description: "Por favor, digite seu nome antes de finalizar o pedido.",
        variant: "destructive"
      });
      return;
    }

    if (items.length === 0) {
      toast({
        title: "Carrinho vazio",
        description: "Adicione alguns itens antes de finalizar o pedido.",
        variant: "destructive"
      });
      return;
    }

    // Montar mensagem do pedido
    const message = `Olá! Meu nome é ${customerName}. Meu pedido:%0A` +
      items.map(i => `${i.quantity}x ${i.name} - ${formatPrice(i.price * i.quantity)}`).join('%0A') +
      `%0ATotal: ${formatPrice(total)}`;

    const whatsappUrl = `https://wa.me/5511999999999?text=${message}`;

    window.open(whatsappUrl, '_blank');

    toast({
      title: "Pedido enviado!",
      description: "Seu pedido foi enviado via WhatsApp.",
    });

    onClearCart();
    setCustomerName('');
    onClose();
  };

  const handleClearCart = () => {
    onClearCart();
    toast({
      title: "Carrinho limpo",
      description: "Todos os itens foram removidos do carrinho.",
    });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={onClose}
      />

      {/* Cart Sidebar */}
      <div className={cn(
        "fixed top-0 right-0 h-full w-full sm:w-96 bg-background border-l border-border z-50 flex flex-col transition-transform duration-300 shadow-2xl",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border bg-card">
          <div className="flex items-center space-x-3">
            <ShoppingBag className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-display font-bold text-primary">Seu Pedido</h2>
            {totalItems > 0 && (
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                {totalItems}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="icon" className="text-foreground hover:text-destructive transition-colors duration-300" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Nome do cliente */}
        {items.length > 0 && (
          <div className="p-4">
            <label htmlFor="customerName" className="block mb-2 text-sm font-medium text-muted-foreground">
              Seu Nome *
            </label>
            <Input
              id="customerName"
              type="text"
              placeholder="Digite seu nome"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full border-border focus:border-primary"
            />
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <ShoppingBag className="h-16 w-16 text-muted-foreground/50" />
              <div>
                <h3 className="text-lg font-medium text-muted-foreground">Carrinho vazio</h3>
                <p className="text-sm text-muted-foreground/70">Adicione alguns cafés deliciosos!</p>
              </div>
            </div>
          ) : (
            items.map((item) => (
              <Card key={item.id} className="overflow-hidden border-border/50 hover:shadow-soft transition-all duration-300 bg-card">
                <CardContent className="p-4">
                  <div className="flex space-x-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-primary truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{formatPrice(item.price)} cada</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 transition-all duration-200 hover:bg-accent hover:text-white"
                            onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            size="sm"
                            variant="outline"
                            className="h-8 w-8 p-0 transition-all duration-200 hover:bg-accent hover:text-white"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-accent">{formatPrice(item.price * item.quantity)}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 text-destructive transition-colors duration-300 hover:text-destructive/80"
                            onClick={() => onRemoveItem(item.id)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border bg-card p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal:</span>
                <span className="font-medium">{formatPrice(total)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Taxa de entrega:</span>
                <span className="text-accent font-medium">Grátis</span>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span className="text-accent">{formatPrice(total)}</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <Button 
                className="w-full transition-transform duration-200 hover:scale-105"
                variant="hero"
                size="lg"
                onClick={handleCheckout}
              >
                Finalizar Pedido ({formatPrice(total)})
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full transition-transform duration-200 hover:scale-105 hover:bg-destructive hover:text-white"
                onClick={handleClearCart}
              >
                Limpar Carrinho
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
