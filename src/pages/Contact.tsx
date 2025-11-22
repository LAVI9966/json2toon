import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="container mx-auto flex-1 max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 animate-slide-up">
          <Card className="border-border/50 bg-card p-8 shadow-elegant">
            <h2 className="mb-6 text-2xl font-bold">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">Name</label>
                <Input placeholder="Your name" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Email</label>
                <Input type="email" placeholder="your@email.com" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Message</label>
                <Textarea 
                  placeholder="Tell us what's on your mind..." 
                  rows={6}
                  required
                />
              </div>
              <Button 
                type="submit"
                className="gradient-primary w-full gap-2 font-semibold shadow-elegant hover:shadow-glow"
                size="lg"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="border-border/50 bg-card p-6 shadow-elegant">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Email</h3>
              <p className="text-sm text-muted-foreground">
                Reach out to us directly at
              </p>
              <a 
                href="mailto:hello@toonconverter.com"
                className="text-sm font-medium text-primary hover:underline"
              >
                hello@toonconverter.com
              </a>
            </Card>

            <Card className="border-border/50 bg-card p-6 shadow-elegant">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary">
                <MessageSquare className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Community</h3>
              <p className="text-sm text-muted-foreground">
                Join our community discussions and get help from other users.
              </p>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
