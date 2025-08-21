import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import customer1 from "@/assets/reviews/customer-1.jpg";
import customer2 from "@/assets/reviews/customer-2.jpg";
import customer3 from "@/assets/reviews/customer-3.jpg";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Julio Chaves",
      image: customer1,
      rating: 5,
      comment: "Ambiente acolhedor e cafés deliciosos. O atendimento é excepcional e sempre volto aqui quando preciso de um momento especial. Recomendo a todos!"
    },
    {
      id: 2,
      name: "Carlos Barreto",
      image: customer2,
      rating: 4,
      comment: "Atendimento impecável e café de qualidade superior. Os baristas realmente sabem o que fazem, e cada xícara é uma experiência única."
    },
    {
      id: 3,
      name: "Bruna Oliveira",
      image: customer3,
      rating: 5,
      comment: "Ambiente muito agradável e aconchegante! O cappuccino é simplesmente perfeito. Um lugar ideal para relaxar e apreciar um bom café. Recomendo demais!"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? 'text-accent fill-accent' 
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-gradient-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Avaliações <span className="text-accent">de Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            O que nossos clientes dizem sobre nossa experiência
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.id} 
              className="relative overflow-hidden border-border/50 hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-accent/20 group-hover:text-accent/30 transition-colors duration-300">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Review Text */}
                <p className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{review.comment}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img 
                      src={review.image} 
                      alt={`Foto de ${review.name}`}
                      className="w-12 h-12 rounded-full object-cover border-2 border-accent/20 group-hover:border-accent/40 transition-colors duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">
                      {review.name}
                    </h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute -bottom-2 -left-2 w-16 h-16 bg-gradient-to-br from-accent/10 to-transparent rounded-full transform group-hover:scale-110 transition-transform duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">4.8</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">9</div>
            <div className="text-sm text-muted-foreground">Anos de Experiência</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
            <div className="text-sm text-muted-foreground">Café Premium</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;