import { useEffect } from "react";

type HeadProps = {
    title: string;
    description: string;
    url?: string;
    image?: string;
    jsonLd?: object | null;
};

export default function Head({ title, description, url, image, jsonLd }: HeadProps) {
    useEffect(() => {
        document.title = title;

        const setMeta = (name: string, content: string | null) => {
            let el = document.querySelector(`meta[name='${name}']`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('name', name);
                document.head.appendChild(el);
            }
            if (content) el.setAttribute('content', content);
        };

        const setProp = (prop: string, content: string | null) => {
            let el = document.querySelector(`meta[property='${prop}']`);
            if (!el) {
                el = document.createElement('meta');
                el.setAttribute('property', prop);
                document.head.appendChild(el);
            }
            if (content) el.setAttribute('content', content);
        };

        setMeta('description', description);
        setProp('og:title', title);
        setProp('og:description', description);
        if (image) setProp('og:image', image);
        if (url) setProp('og:url', url);

        // canonical
        if (url) {
            let link = document.querySelector("link[rel='canonical']");
            if (!link) {
                link = document.createElement('link');
                link.setAttribute('rel', 'canonical');
                document.head.appendChild(link);
            }
            link.setAttribute('href', url);
        }

        // JSON-LD
        if (jsonLd) {
            let script = document.getElementById('json-ld-script');
            if (!script) {
                script = document.createElement('script');
                script.setAttribute('type', 'application/ld+json');
                script.setAttribute('id', 'json-ld-script');
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(jsonLd);
        }

        return () => {
            // do not remove tags on unmount to keep single-page parity
        };
    }, [title, description, url, image, jsonLd]);

    return null;
}
