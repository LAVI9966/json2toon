export function initGtag(measurementId?: string) {
    if (!measurementId) return;

    // If gtag already exists (e.g. injected by host or manual snippet), don't inject again.
    // Configure existing gtag to avoid automatic page_view (we send pageviews manually).
    if (typeof (window as any).gtag === 'function') {
        try {
            (window as any).gtag('config', measurementId, { send_page_view: false });
        } catch (e) {
            /* ignore */
        }
        (window as any).gtagInitialized = true;
        return;
    }

    if ((window as any).gtagInitialized) return;

    // inject gtag script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${measurementId}', {send_page_view: false});`;
    document.head.appendChild(script2);

    (window as any).gtagInitialized = true;
}

export function gtagPageview(path: string, measurementId?: string) {
    if (!(window as any).gtagInitialized) return;
    try {
        (window as any).gtag('event', 'page_view', {
            page_path: path,
        });
    } catch (e) {
        // ignore
    }
}
