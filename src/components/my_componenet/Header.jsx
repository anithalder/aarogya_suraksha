import { Icon } from "lucide-react";
import { Button } from "./Button";

export const Header = () => (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-white via-blue-50 to-white/80 backdrop-blur-sm shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <a href="#" className="flex items-center gap-2">
                {/* <Icon name="heartPulse" className="h-7 w-7 text-blue-600" /> */}
                <img src="favicon.png" alt="ArogyaSuraksha Logo" className="h-8 w-8 object-contain" />
                <span className="text-xl font-bold text-gray-900">ArogyaSuraksha</span>
            </a>
            <nav className="hidden items-center gap-6 md:flex">
                <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
                <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#doctors" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Find a Doctor</a>
            </nav>
            <div className="flex items-center gap-2">
                <Button variant="ghost">Login</Button>
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Sign Up</Button>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Icon name="menu" className="h-6 w-6" />
                </Button>
            </div>
        </div>
    </header>
);