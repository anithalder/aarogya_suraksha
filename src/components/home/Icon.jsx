// Helper for SVG Icons
export const Icon = ({ name, className }) => {
    const icons = {
        heartPulse: <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />,
        menu: <path d="M4 6h16M4 12h16M4 18h16" />,
        smartphone: <><rect width="14" height="20" x="5" y="2" rx="2" ry="2" /><path d="M12 18h.01" /></>,
        calendarDays: <><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /></>,
        video: <><path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" /></>,
        fileText: <><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /><line x1="16" x2="8" y1="13" y2="13" /><line x1="16" x2="8" y1="17" y2="17" /><line x1="10" x2="8" y1="9" y2="9" /></>,
        brainCircuit: <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 10 10 10 10 0 0 0 10-10 10 10 0 0 0-10-10ZM5.2 11h-.9a2.3 2.3 0 0 1-2.3-2.3v0A2.3 2.3 0 0 1 4.3 6.4h.9m13.6 4.6h.9a2.3 2.3 0 0 0 2.3-2.3v0a2.3 2.3 0 0 0-2.3-2.3h-.9M8 17.8a2.3 2.3 0 0 1-2.3-2.3v0a2.3 2.3 0 0 1 2.3-2.3h0m8 4.6a2.3 2.3 0 0 0 2.3-2.3v0a2.3 2.3 0 0 0-2.3-2.3h0M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />,
        wifiOff: <path d="M12 20h.01M8.5 16.4a5 5 0 0 1 7 0M5 12.8A9 9 0 0 1 12 10a9 9 0 0 1 7 2.8M2 8.8A14.7 14.7 0 0 1 12 5M1 1l22 22" />,
        shieldCheck: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></>,
        star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
    };
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{icons[name] || ''}</svg>;
};

export default Icon;