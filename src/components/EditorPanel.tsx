import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface EditorPanelProps {
  title: string;
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

export const EditorPanel = ({ title, value, onChange, readOnly, placeholder }: EditorPanelProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        duration: 2000,
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card shadow-elegant transition-all duration-300 hover:shadow-glow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 border-b border-border/50 bg-muted/30 px-4 py-3 backdrop-blur-sm sm:px-6">
        <h3 className="text-sm font-semibold text-foreground sm:text-base">{title}</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleCopy}
          className="h-8 gap-1.5 text-xs transition-all hover:bg-primary/10 hover:text-primary"
          disabled={!value}
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          readOnly={readOnly}
          placeholder={placeholder}
          className="h-[500px] w-full resize-none overflow-y-auto border-0 bg-code-bg px-4 py-4 font-mono text-[13px] leading-relaxed text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 sm:h-[550px] sm:px-6"
          spellCheck={false}
        />
      </CardContent>
    </Card>
  );
};
