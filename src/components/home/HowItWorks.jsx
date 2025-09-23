import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../home/Card";
import { Icon } from "../home/Icon";

export const HowItWorksSection = () => {
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

export default HowItWorksSection;