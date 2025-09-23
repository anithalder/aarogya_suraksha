import { Avatar, AvatarFallback, AvatarImage } from "../home/Avatar";
import { Button } from "../home/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../home/Card";

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

export default OurDoctorsSection;