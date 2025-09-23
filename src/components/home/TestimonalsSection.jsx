import { Card, CardContent, CardFooter } from "../home/Card";
import { Icon } from "../home/Icon";

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
                                <p className="text-gray-700">\"{testimonial.text}\"</p>
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

export default TestimonialsSection;