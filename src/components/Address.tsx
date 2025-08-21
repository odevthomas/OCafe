import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Address = () => {
  const openGoogleMaps = () => {
    window.open('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58519.9711140389!2d-46.75502065136721!3d-23.550544299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5757726ddc09%3A0x39ec20e62e868b26!2sThe%20Coffee!5e0!3m2!1spt-BR!2sbr!4v1712088182816!5m2!1spt-BR!2sbr', '_blank');
  };

  return (
    <section id="address" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary mb-4">
            Nosso <span className="text-accent">Endereço</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Venha nos visitar e experimente nossos cafés especiais
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-border/50 hover:shadow-soft transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Localização</h3>
                    <p className="text-muted-foreground">
                      Rua dos Cafés, 123<br />
                      Vila Madalena, São Paulo - SP<br />
                      CEP: 05432-000
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-soft transition-all duration-300 bg-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-2">Horário de Funcionamento</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Segunda à Sexta: 7h às 20h</p>
                      <p>Sábado: 8h às 22h</p>
                      <p>Domingo: 8h às 18h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="border-border/50 hover:shadow-soft transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary text-sm">Telefone</h4>
                      <p className="text-muted-foreground text-sm">(11) 9999-9999</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 hover:shadow-soft transition-all duration-300 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-accent/10 p-2 rounded-lg">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary text-sm">E-mail</h4>
                      <p className="text-muted-foreground text-sm">contato@thecoffee.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button 
              onClick={openGoogleMaps}
              className="w-full"
              variant="warm"
              size="lg"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Ver no Google Maps
            </Button>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-warm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58519.9711140389!2d-46.75502065136721!3d-23.550544299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5757726ddc09%3A0x39ec20e62e868b26!2sThe%20Coffee!5e0!3m2!1spt-BR!2sbr!4v1712088182816!5m2!1spt-BR!2sbr"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 lg:h-full min-h-96"
              />
            </div>
            
            {/* Overlay for better interaction */}
            <div className="absolute inset-0 bg-transparent hover:bg-accent/5 transition-colors duration-300 rounded-xl cursor-pointer" onClick={openGoogleMaps} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;