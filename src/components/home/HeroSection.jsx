import Button from "./Button";
import { Avatar, AvatarImage, AvatarFallback } from "./Avatar";

export const HeroSection = () => (
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

export default HeroSection;