import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Documentation = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Documentation
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Complete guide to the TOON format
          </p>
        </div>

        <div className="space-y-8 animate-slide-up">
          <Card className="border-border/50 bg-card p-8 shadow-elegant">
            <h2 className="mb-4 text-2xl font-bold">What is TOON?</h2>
            <p className="mb-4 text-muted-foreground">
              TOON is a compact, human-readable data format optimized for token efficiency. 
              It's designed specifically for AI applications where reducing token count can 
              significantly lower costs and improve performance.
            </p>
          </Card>

          <Card className="border-border/50 bg-card p-8 shadow-elegant">
            <h2 className="mb-4 text-2xl font-bold">Format Specification</h2>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Uniform Arrays</h3>
                <p className="mb-2">Arrays with uniform objects use CSV-like headers:</p>
                <pre className="rounded-lg bg-code-bg p-4 font-mono text-sm">
{`users[2]{name,age}:
  Alice,30
  Bob,25`}
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">Nested Objects</h3>
                <p className="mb-2">Nested structures use indentation:</p>
                <pre className="rounded-lg bg-code-bg p-4 font-mono text-sm">
{`user:
  name: Alice
  address:
    city: NYC
    zip: 10001`}
                </pre>
              </div>

              <div>
                <h3 className="mb-2 font-semibold text-foreground">String Escaping</h3>
                <p className="mb-2">Smart escaping reduces quote usage. Only quote when necessary for special characters.</p>
              </div>
            </div>
          </Card>

          <Card className="border-border/50 bg-card p-8 shadow-elegant">
            <h2 className="mb-4 text-2xl font-bold">Benefits</h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>20-40% token reduction compared to JSON</li>
              <li>Human-readable and easy to edit</li>
              <li>Lossless conversion to and from JSON</li>
              <li>Perfect for AI API calls and responses</li>
              <li>Reduces costs for LLM applications</li>
            </ul>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Documentation;
