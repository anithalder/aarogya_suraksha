import React from 'react';

// Shadcn UI Component Stubs - In a real project, these would be imported.
// For this single-file component, we'll define simple functional components
// that mimic the structure and props of actual shadcn/ui components.
// This allows the code to be runnable and demonstrates the intended usage.

const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }) => {
    const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        destructive: "bg-red-500 text-destructive-foreground hover:bg-red-600",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-gray-200 text-secondary-foreground hover:bg-gray-300",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
    };

    return <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button>;
};

const Card = ({ className = '', children }) => <div className={`rounded-xl border bg-white text-card-foreground shadow ${className}`}>{children}</div>;
const CardHeader = ({ className = '', children }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
const CardTitle = ({ className = '', children }) => <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
const CardDescription = ({ className = '', children }) => <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>;
const CardContent = ({ className = '', children }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;
const CardFooter = ({ className = '', children }) => <div className={`flex items-center p-6 pt-0 ${className}`}>{children}</div>;

const Avatar = ({ className = '', children }) => <div className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}>{children}</div>;
const AvatarImage = ({ src, alt, className = '' }) => <img src={src} alt={alt} className={`aspect-square h-full w-full ${className}`} />;
const AvatarFallback = ({ children, className = '' }) => <span className={`flex h-full w-full items-center justify-center rounded-full bg-muted ${className}`}>{children}</span>;

// Helper for SVG Icons
const Icon = ({ name, className }) => {
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

// Main Homepage Component
export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-800">
            <Header />
            <main>
                <HeroSection />
                <HowItWorksSection />
                <FeaturesSection />
                <TestimonialsSection />
                <OurDoctorsSection />
            </main>
            <Footer />
        </div>
    );
}

// Sub-components defined within the same file for simplicity

const Header = () => (
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

const HeroSection = () => (
    <section className="bg-gradient-to-r from-blue-100 via-blue-50 to-white">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-8 text-center md:text-left animate-fade-in">
                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-blue-900 drop-shadow-lg">
                        Healthcare for Every Village.
                    </h1>
                    <div className="mt-4">
                        <span
                            className="block text-5xl md:text-5xl font-extrabold text-blue-600 bg-blue-100 px-6 py-4 rounded-3xl shadow-lg"
                            style={{
                                display: 'inline-block',
                                boxShadow: '4px 8px 18px 0px rgba(59,130,246,0.10)',
                                lineHeight: '1.3',
                                letterSpacing: '-1px',
                            }}
                        >
                            Accessible. Trusted.<br />Local.
                        </span>
                    </div>
                    <p className="text-xl text-blue-700 max-w-xl mx-auto md:mx-0">
                        Instantly connect with caring doctors, get video consultations, and receive digital prescriptions—no matter your internet speed. Your health, your language, your community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:from-blue-700 hover:to-blue-500 shadow-lg">Book an Appointment</Button>
                        <Button size="lg" variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 shadow">I am a Doctor</Button>
                    </div>
                </div>
                <div className="relative animate-fade-in">
                    <img
                        src="logo.png"
                        alt="Doctor consulting a family via telemedicine"
                        className="rounded-3xl shadow-2xl w-full h-auto object-cover border-4 border-blue-200"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white/90 p-6 rounded-2xl shadow-xl border-2 border-blue-100 hidden lg:block">
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-2">
                                <Avatar>
                                    <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Dr. Sharma" />
                                    <AvatarFallback>DS</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="https://i.pravatar.cc/150?img=2" alt="Dr. Verma" />
                                    <AvatarFallback>DV</AvatarFallback>
                                </Avatar>
                                <Avatar>
                                    <AvatarImage src="https://i.pravatar.cc/150?img=3" alt="Dr. Kaur" />
                                    <AvatarFallback>DK</AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <p className="font-semibold text-base text-blue-900">20+ Doctors Online</p>
                                <p className="text-xs text-blue-600">Serving 173 villages</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const HowItWorksSection = () => {
    const steps = [
        { icon: 'smartphone', title: 'Register with Mobile', description: 'Quickly sign up using your phone number with a secure OTP.' },
        { icon: 'calendarDays', title: 'Find Your Doctor', description: 'Browse available specialists and book an appointment slot that works for you.' },
        { icon: 'video', title: 'Start Video Consultation', description: 'Connect with your doctor via a secure, low-bandwidth video call.' },
        { icon: 'fileText', title: 'Get E-Prescription', description: 'Receive your prescription digitally, which you can save and use offline.' },
    ];
    return (
        <section id="how-it-works" className="py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Healthcare in 4 Simple Steps</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Our process is designed to be simple and accessible for everyone, especially for rural communities.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mx-auto bg-blue-100 p-4 rounded-full">
                                    <Icon name={step.icon} className="w-8 h-8 text-blue-600" />
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <CardTitle className="text-xl">{step.title}</CardTitle>
                                <CardDescription>{step.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FeaturesSection = () => {
    const features = [
        { icon: 'brainCircuit', title: 'AI Symptom Checker', description: 'Get an initial assessment of your symptoms, optimized to work even on slow connections.' },
        { icon: 'wifiOff', title: 'Offline Health Records', description: 'Access your prescriptions and health history anytime, without needing an internet connection.' },
        { icon: 'shieldCheck', title: 'Secure & Private', description: 'Your health data is encrypted and stored securely, ensuring complete privacy.' },
    ];
    return (
        <section id="features" className="bg-white py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <img
                            src="https://placehold.co/600x600/FFFFFF/3B82F6?text=Features"
                            alt="Mobile app showing features"
                            className="rounded-2xl shadow-xl w-full h-auto"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <h2 className="text-3xl md:text-4xl font-bold">Built for the Realities of Rural India</h2>
                            <p className="text-lg text-gray-600">We understand the challenges of limited connectivity. Our app is designed to be a reliable health companion, online or offline.</p>
                        </div>
                        <ul className="space-y-6">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-full mt-1">
                                        <Icon name={feature.icon} className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        { name: 'Gurpreet Singh', village: 'Village Bhadson', text: "I saved a whole day of travel and lost wages. Getting advice from a good doctor in Patiala while sitting in my own home was a blessing. The app is very easy to use.", rating: 5 },
        { name: 'Balwinder Kaur', village: 'Nabha Town', text: "My child had a high fever at night. We used the emergency consultation and got a prescription immediately. ArogyaSuraksha is a lifesaver for mothers like me.", rating: 5 },
        { name: 'Jagmel Ram', village: 'Rohti Chhanna', text: "Being able to see my past reports and prescriptions on my phone, even in the fields without internet, is a fantastic feature. Very helpful.", rating: 5 },
    ];

    return (
        <section className="py-20 md:py-28 bg-blue-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">Trusted by Your Community</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Hear from residents of Nabha and surrounding villages who have benefited from our platform.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardContent className="flex-grow pt-6">
                                <p className="text-gray-700">"{testimonial.text}"</p>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between bg-blue-100/50 p-4">
                                <div>
                                    <p className="font-bold">{testimonial.name}</p>
                                    <p className="text-sm text-gray-600">{testimonial.village}</p>
                                </div>
                                <div className="flex items-center">
                                    {[...Array(testimonial.rating)].map((_, i) => <Icon key={i} name="star" className="w-4 h-4 text-yellow-500 fill-current" />)}
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

const OurDoctorsSection = () => {
    const doctors = [
        { name: 'Dr. Ramesh Kumar', specialty: 'General Physician', avatar: 'https://i.pravatar.cc/150?img=5' },
        { name: 'Dr. Sunita Sharma', specialty: 'Pediatrician', avatar: 'https://i.pravatar.cc/150?img=6' },
        { name: 'Dr. Vikram Singh', specialty: 'Cardiologist', avatar: 'https://i.pravatar.cc/150?img=7' },
    ]
    return (
        <section id="doctors" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Dedicated Doctors</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">Consult with experienced and compassionate doctors from our network.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {doctors.map(doctor => (
                        <Card key={doctor.name} className="overflow-hidden">
                            <div className="bg-gray-100 p-6">
                                <Avatar className="h-24 w-24 mx-auto border-4 border-white shadow-md">
                                    <AvatarImage src={doctor.avatar} alt={doctor.name} />
                                    <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                            </div>
                            <CardHeader className="text-center">
                                <CardTitle>{doctor.name}</CardTitle>
                                <CardDescription className="text-blue-600 font-semibold">{doctor.specialty}</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">View Profile</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}


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
