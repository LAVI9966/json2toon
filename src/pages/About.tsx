import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Users, Zap } from "lucide-react";

const About = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            About TOON Converter
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built for developers working with AI applications
          </p>
        </div>

        <div className="space-y-8 animate-slide-up">
          <Card className="border-border/50 bg-card p-8 shadow-elegant">
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              We built TOON Converter to help developers optimize their data for AI applications. 
              With the rising costs of API calls to large language models, every token counts. 
              TOON format provides a practical solution that's both human-readable and token-efficient.
            </p>
          </Card>

          <div className="grid gap-6 sm:grid-cols-3">
            <Card className="border-border/50 bg-card p-6 text-center shadow-elegant">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-semibold">Purpose</h3>
              <p className="text-sm text-muted-foreground">
                Help developers save costs and improve efficiency
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-6 text-center shadow-elegant">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-semibold">Community</h3>
              <p className="text-sm text-muted-foreground">
                Open-source tool built for the developer community
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-6 text-center shadow-elegant">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <Zap className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 font-semibold">Performance</h3>
              <p className="text-sm text-muted-foreground">
                Fast, efficient, and privacy-focused processing
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
