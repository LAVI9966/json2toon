import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Simple Pricing
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Free forever. No hidden costs.
          </p>
        </div>

        <div className="mx-auto max-w-md animate-slide-up">
          <Card className="border-border/50 bg-gradient-to-br from-card to-card/50 p-8 shadow-glow">
            <div className="mb-6 text-center">
              <h3 className="mb-2 text-2xl font-bold">Free Plan</h3>
              <div className="mb-4">
                <span className="text-5xl font-bold">$0</span>
                <span className="text-muted-foreground">/forever</span>
              </div>
            </div>

            <ul className="mb-8 space-y-3">
              {[
                "Unlimited conversions",
                "Client-side processing",
                "No account required",
                "All features included",
                "Privacy guaranteed",
                "Open source",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </div>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button 
              className="gradient-primary w-full font-semibold shadow-elegant hover:shadow-glow"
              size="lg"
              onClick={() => window.location.href = '/'}
            >
              Get Started
            </Button>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
