import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EditorPanel } from "@/components/EditorPanel";
import { StatsBar } from "@/components/StatsBar";
import { ExampleButtons } from "@/components/ExampleButtons";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle2 } from "lucide-react";
import { jsonToToon } from "@/lib/jsonToToon";
import { toonToJson } from "@/lib/toonToJson";
import { examples } from "@/lib/examples";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [toonOutput, setToonOutput] = useState("");
  const { toast } = useToast();

  const handleJsonToToon = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      const toon = jsonToToon(parsed);
      setToonOutput(toon);
      toast({
        title: "✨ Converted to TOON",
        description: "Your data is now token-optimized",
      });
    } catch (error) {
      toast({
        title: "Conversion Error",
        description: error instanceof Error ? error.message : "Invalid JSON",
        variant: "destructive",
      });
    }
  };

  const handleToonToJson = () => {
    try {
      const parsed = toonToJson(toonOutput);
      const json = JSON.stringify(parsed, null, 2);
      setJsonInput(json);
      toast({
        title: "✨ Converted to JSON",
        description: "Your data is ready to use",
      });
    } catch (error) {
      toast({
        title: "Conversion Error",
        description: error instanceof Error ? error.message : "Invalid TOON format",
        variant: "destructive",
      });
    }
  };

  const handleLoadExample = (key: keyof typeof examples) => {
    const example = examples[key];
    setJsonInput(JSON.stringify(example.json, null, 2));
    setToonOutput(example.toon);
    toast({
      title: `Example ${key} loaded`,
      description: "Ready to explore",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        {/* Hero Section */}
        <div className="mb-8 animate-fade-in text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>AI-Optimized Data Format</span>
          </div>
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Transform Your Data
          </h1>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
            Convert between JSON and TOON formats instantly. Save 20-40% tokens for AI applications.
          </p>
        </div>

        {/* Example Buttons */}
        <div className="mb-6 flex animate-slide-up justify-center sm:mb-8" style={{ animationDelay: '0.1s' }}>
          <ExampleButtons onLoadExample={handleLoadExample} />
        </div>

        {/* Editor Grid */}
        <div className="mb-6 grid gap-4 animate-slide-up sm:mb-8 sm:gap-6 lg:grid-cols-[1fr,auto,1fr]" style={{ animationDelay: '0.2s' }}>
          <EditorPanel
            title="JSON Input"
            value={jsonInput}
            onChange={setJsonInput}
            placeholder='Paste JSON here...\n\nExample:\n{\n  "name": "Alice",\n  "age": 30\n}'
          />

          {/* Conversion Buttons */}
          <div className="flex items-center justify-center gap-3 lg:flex-col">
            <Button
              onClick={handleJsonToToon}
              disabled={!jsonInput.trim()}
              className="gradient-primary h-11 flex-1 gap-2 border-0 font-semibold shadow-elegant transition-all hover:scale-105 hover:shadow-glow disabled:opacity-50 disabled:hover:scale-100 sm:h-12 lg:flex-none lg:w-full"
              size="lg"
            >
              <span className="hidden sm:inline">To TOON</span>
              <span className="sm:hidden">TOON</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            <Button
              onClick={handleToonToJson}
              disabled={!toonOutput.trim()}
              variant="outline"
              className="h-11 flex-1 gap-2 border-border/60 bg-card font-semibold transition-all hover:scale-105 hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg disabled:opacity-50 disabled:hover:scale-100 sm:h-12 lg:flex-none lg:w-full"
              size="lg"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">To JSON</span>
              <span className="sm:hidden">JSON</span>
            </Button>
          </div>

          <EditorPanel
            title="TOON Output"
            value={toonOutput}
            onChange={setToonOutput}
            placeholder="TOON format appears here..."
          />
        </div>

        {/* Stats Bar */}
        <div className="mb-8 animate-slide-up sm:mb-12" style={{ animationDelay: '0.3s' }}>
          <StatsBar jsonValue={jsonInput} toonValue={toonOutput} />
        </div>

        {/* About Section */}
        <div className="animate-slide-up overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card to-card/50 shadow-elegant" style={{ animationDelay: '0.4s' }}>
          <div className="border-b border-border/50 bg-muted/30 px-6 py-4 backdrop-blur-sm">
            <h3 className="text-lg font-bold sm:text-xl">About TOON Format</h3>
          </div>
          <div className="p-6 sm:p-8">
            <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              TOON is a compact, human-readable data format optimized for token efficiency—perfect for AI applications where every token counts.
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "CSV Headers", desc: "Uniform arrays use compact headers" },
                { title: "Indentation", desc: "Nested structures via indents" },
                { title: "Smart Escaping", desc: "Reduces quote usage" },
                { title: "Token Savings", desc: "20-40% typical reduction" }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="group rounded-xl border border-border/50 bg-card p-4 transition-all hover:scale-105 hover:border-primary/50 hover:shadow-lg"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
