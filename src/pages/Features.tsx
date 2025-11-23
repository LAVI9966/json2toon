import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Zap, Code2, Shield, Sparkles, Database, ArrowDownUp } from "lucide-react";

import Head from "@/components/Head";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Conversion",
      description: "Convert between JSON and TOON formats instantly with our optimized conversion engine. No delays, no waiting."
    },
    {
      icon: Code2,
      title: "Token Optimization",
      description: "Save 20-40% tokens compared to standard JSON format. Perfect for AI applications where token efficiency matters."
    },
    {
      icon: Shield,
      title: "Client-Side Processing",
      description: "All conversions happen in your browser. Your data never leaves your device, ensuring complete privacy and security."
    },
    {
      icon: Sparkles,
      title: "Human-Readable Format",
      description: "TOON format is designed to be both compact and easy to read, making it perfect for developers and AI systems alike."
    },
    {
      icon: Database,
      title: "Lossless Conversion",
      description: "Convert back and forth between JSON and TOON without any data loss. Perfect round-trip conversion guaranteed."
    },
    {
      icon: ArrowDownUp,
      title: "Bidirectional Support",
      description: "Seamlessly convert from JSON to TOON and back. Full support for both directions with accurate parsing."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Head
        title="Features — JSON2TOON Converter"
        description="Explore features like token optimization, fast conversion, and privacy-first client-side processing."
        url="https://www.json2toon.online/features"
        image="https://www.json2toon.online/opengraph.png"
      />
      <Header />

      <main className="container mx-auto flex-1 max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Powerful Features
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Everything you need to work with token-optimized data formats
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 animate-slide-up">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border/50 bg-card p-6 shadow-elegant transition-all hover:scale-105 hover:shadow-glow"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Features;
