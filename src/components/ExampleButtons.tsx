import { Button } from "@/components/ui/button";
import { examples } from "@/lib/examples";
import { Sparkles } from "lucide-react";

interface ExampleButtonsProps {
  onLoadExample: (exampleKey: keyof typeof examples) => void;
}

export const ExampleButtons = ({ onLoadExample }: ExampleButtonsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <Sparkles className="h-4 w-4" />
        <span className="hidden sm:inline">Examples:</span>
      </div>
      {(Object.keys(examples) as Array<keyof typeof examples>).map((key) => (
        <Button
          key={key}
          variant="outline"
          size="sm"
          onClick={() => onLoadExample(key)}
          className="h-8 border-border/60 bg-card px-3 transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg"
        >
          {key}
        </Button>
      ))}
    </div>
  );
};
