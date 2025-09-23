import { Icon } from "../home/Icon";
import Button from "../home/Button";

const Footer = () => (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <a href="#" className="flex items-center gap-2">
                        <Icon name="heartPulse" className="h-7 w-7 text-blue-500" />
                        <span className="text-xl font-bold">ArogyaSuraksha</span>
                    </a>
                    <p className="text-gray-400 text-sm">
                        Bringing quality healthcare to rural India, one consultation at a time.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
                        <li><a href="#doctors" className="text-gray-400 hover:text-white">Find a Doctor</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">Support</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-white">Help Center</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4">For Healthcare Providers</h4>
                    <p className="text-sm text-gray-400 mb-4">Join our network to serve patients in rural areas.</p>
                    <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white">Join as a Doctor</Button>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
                <p>&copy; 2025 ArogyaSuraksha. A social initiative for a healthier Bharat. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;