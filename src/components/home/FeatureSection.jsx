import { Icon } from "../home/Icon";

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

export default FeaturesSection;