const Card = ({ className = "", children }) => (
    <div
        className={`rounded-xl border bg-white text-card-foreground shadow ${className}`}
    >
        {children}
    </div>
);
const CardHeader = ({ className = "", children }) => (
    <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>
);
const CardTitle = ({ className = "", children }) => (
    <h3
        className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    >
        {children}
    </h3>
);
const CardDescription = ({ className = "", children }) => (
    <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
);
const CardContent = ({ className = "", children }) => (
    <div className={`p-6 pt-0 ${className}`}>{children}</div>
);
const CardFooter = ({ className = "", children }) => (
    <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>
);

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };