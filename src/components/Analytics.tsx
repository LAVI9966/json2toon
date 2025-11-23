import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { initGtag, gtagPageview } from "../lib/analytics";

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        const id = import.meta.env.VITE_GA_ID as string | undefined;
        if (id) initGtag(id);
    }, []);

    useEffect(() => {
        const id = import.meta.env.VITE_GA_ID as string | undefined;
        if (id) gtagPageview(location.pathname + location.search, id);
    }, [location]);

    return null;
};

export default Analytics;
