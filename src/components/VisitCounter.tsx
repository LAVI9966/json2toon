import { useEffect, useState } from "react";

// Simple visit counter using CountAPI (no backend required)
// Namespace/key can be changed if you want a separate counter
const NAMESPACE = "json2toon";
const KEY = "visits";

export default function VisitCounter() {
    const [count, setCount] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;
        const url = `https://api.countapi.xyz/hit/${NAMESPACE}/${KEY}`;

        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                if (!mounted) return;
                if (typeof json.value === "number") setCount(json.value);
            })
            .catch(() => {
                if (!mounted) return;
                setCount(null);
            })
            .finally(() => {
                if (!mounted) return;
                setLoading(false);
            });

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="rounded-lg border border-border/50 bg-card p-4 text-center">
                <div className="text-sm text-muted-foreground">Visitors</div>
                <div className="mt-1 text-2xl font-semibold">
                    {loading ? "Loading..." : (count !== null ? count.toLocaleString() : "—")}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">Total page views (approx)</div>
            </div>
        </div>
    );
}
