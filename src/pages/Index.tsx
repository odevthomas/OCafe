import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/hooks/useCart";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu, { MenuItem } from "@/components/Menu";
import Reviews from "@/components/Reviews";
import Address from "@/components/Address";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const Index = () => {
  const { toast } = useToast();
  const {
    items,
    isCartOpen,
    totalItems,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    openCart,
    closeCart
  } = useCart();

  const handleAddToCart = (item: MenuItem) => {
    addToCart(item);
    toast({
      title: "Item adicionado!",
      description: `${item.name} foi adicionado ao seu carrinho.`,
    });
  };

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isCartOpen]);

  return (
    <div className="min-h-screen bg-background">
      <Header cartItemsCount={totalItems} onCartOpen={openCart} />
      
      <main>
        <Hero />
        <About />
        <Menu onAddToCart={handleAddToCart} />
        <Reviews />
        <Address />
      </main>
      
      <Footer />
      
      <Cart
        isOpen={isCartOpen}
        onClose={closeCart}
        items={items}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
        onClearCart={clearCart}
      />
    </div>
  );
};

export default Index;
