import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="border-border/50 bg-card p-8 shadow-elegant animate-slide-up">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Matters</h2>
            <p className="text-muted-foreground mb-6">
              At TOON Converter, we take your privacy seriously. This policy outlines how we handle your data.
            </p>

            <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
            <p className="text-muted-foreground mb-6">
              All conversions happen entirely in your browser using client-side JavaScript. 
              We do not send your data to any server, and we do not store any of your data.
            </p>

            <h3 className="text-xl font-semibold mb-3">What We Don't Collect</h3>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Your JSON or TOON data</li>
              <li>Personal information</li>
              <li>Usage patterns or conversion history</li>
              <li>IP addresses or device information</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p className="text-muted-foreground mb-6">
              We may use privacy-friendly analytics to understand general usage patterns, 
              but these do not track individual users or their data.
            </p>

            <h3 className="text-xl font-semibold mb-3">Third-Party Services</h3>
            <p className="text-muted-foreground mb-6">
              We do not integrate any third-party services that could access your data.
            </p>

            <h3 className="text-xl font-semibold mb-3">Security</h3>
            <p className="text-muted-foreground">
              Since all processing happens in your browser and we don't store any data, 
              your information is as secure as your own device.
            </p>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
