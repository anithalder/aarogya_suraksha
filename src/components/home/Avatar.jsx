const Avatar = ({ className = "", children }) => (
    <div
        className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
    >
        {children}
    </div>
);
const AvatarImage = ({ src, alt, className = "" }) => (
    <img
        src={src}
        alt={alt}
        className={`aspect-square h-full w-full ${className}`}
    />
);
const AvatarFallback = ({ children, className = "" }) => (
    <span
        className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}
    >
        {children}
    </span>
);

export { Avatar, AvatarImage, AvatarFallback };