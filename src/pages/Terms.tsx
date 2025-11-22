import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card className="border-border/50 bg-card p-8 shadow-elegant animate-slide-up">
          <div className="prose prose-sm max-w-none dark:prose-invert">
            <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
            <p className="text-muted-foreground mb-6">
              By using TOON Converter, you agree to these terms.
            </p>

            <h3 className="text-xl font-semibold mb-3">Use of Service</h3>
            <p className="text-muted-foreground mb-6">
              TOON Converter is provided as-is for free use. You may use this service 
              for any lawful purpose, including commercial applications.
            </p>

            <h3 className="text-xl font-semibold mb-3">No Warranty</h3>
            <p className="text-muted-foreground mb-6">
              While we strive for accuracy, we provide this tool without any warranty. 
              We are not liable for any errors in conversion or any consequences of using this service.
            </p>

            <h3 className="text-xl font-semibold mb-3">Open Source</h3>
            <p className="text-muted-foreground mb-6">
              This project is open source. You are free to inspect, modify, and distribute 
              the code according to the project license.
            </p>

            <h3 className="text-xl font-semibold mb-3">Fair Use</h3>
            <p className="text-muted-foreground mb-6">
              Please use this service responsibly and do not attempt to overload or 
              exploit the service in ways that could harm other users.
            </p>

            <h3 className="text-xl font-semibold mb-3">Modifications</h3>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Continued use 
              of the service constitutes acceptance of modified terms.
            </p>
          </div>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
