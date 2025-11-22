import { Card } from "@/components/ui/card";
import { countTokens } from "@/lib/tokenCounter";
import { ArrowDown, Zap, FileJson } from "lucide-react";

interface StatsBarProps {
  jsonValue: string;
  toonValue: string;
}

export const StatsBar = ({ jsonValue, toonValue }: StatsBarProps) => {
  const jsonTokens = countTokens(jsonValue);
  const toonTokens = countTokens(toonValue);
  const reduction = jsonTokens > 0 ? Math.round(((jsonTokens - toonTokens) / jsonTokens) * 100) : 0;

  return (
    <Card className="overflow-hidden border-border/50 bg-gradient-to-br from-card to-card/50 shadow-elegant">
      <div className="grid grid-cols-1 gap-4 p-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border/50 sm:p-0">
        <div className="flex items-center justify-center gap-3 sm:flex-col sm:py-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <FileJson className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col items-start sm:items-center">
            <span className="text-xs font-medium text-muted-foreground">JSON Tokens</span>
            <span className="mt-1 text-2xl font-bold text-foreground sm:text-3xl">{jsonTokens}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-3 sm:flex-col sm:py-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Zap className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col items-start sm:items-center">
            <span className="text-xs font-medium text-muted-foreground">TOON Tokens</span>
            <span className="mt-1 text-2xl font-bold text-primary sm:text-3xl">{toonTokens}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-3 sm:flex-col sm:py-6">
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
            reduction > 0 ? 'bg-accent/10' : 'bg-muted'
          }`}>
            <ArrowDown className={`h-6 w-6 ${reduction > 0 ? 'text-accent' : 'text-muted-foreground'}`} />
          </div>
          <div className="flex flex-col items-start sm:items-center">
            <span className="text-xs font-medium text-muted-foreground">Reduction</span>
            <span className={`mt-1 text-2xl font-bold sm:text-3xl ${
              reduction > 0 ? 'text-accent' : 'text-foreground'
            }`}>
              {reduction > 0 ? '-' : ''}{Math.abs(reduction)}%
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};
