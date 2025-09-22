import React from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    PlusCircle,
    Video,
    Pill,
    FileText,
    BrainCircuit,
    Siren,
    Phone
} from 'lucide-react';
import { Link } from 'wouter';

// --- Mock Data ---
// In a real application, this data would come from a Firestore database.
const patientData = {
    name: "Balwinder Kaur",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
};

const upcomingAppointment = {
    doctorName: "Dr. Sunita Sharma",
    specialty: "Pediatrician",
    date: "September 23, 2025",
    time: "11:30 AM",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
};

const pastConsultations = [
    {
        id: "consult_1",
        doctorName: "Dr. Ramesh Kumar",
        date: "August 15, 2025",
        diagnosis: "Seasonal Flu",
        prescription: "Paracetamol 500mg (1 tablet after meals, 3 times a day for 3 days). Rest and drink plenty of fluids.",
    },
    {
        id: "consult_2",
        doctorName: "Dr. Vikram Singh",
        date: "July 02, 2025",
        diagnosis: "General Check-up",
        prescription: "No medication prescribed. Advised to monitor blood pressure weekly.",
    },
];

// Main Dashboard Component
export default function PatientDashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <div className="container mx-auto p-4 md:p-8">
                <WelcomeHeader name={patientData.name} avatarUrl={patientData.avatarUrl} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 space-y-8">
                        <UpcomingAppointment />
                        <QuickActions />
                    </div>
                    <div className="lg:col-span-1">
                        <RecentActivity />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Sub-components for better organization

const WelcomeHeader = ({ name, avatarUrl }) => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-4 border-blue-200 shadow-lg">
                <AvatarImage src={avatarUrl} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 drop-shadow">Welcome, {name}</h1>
                <p className="text-blue-700">Here is your health summary.</p>
            </div>
        </div>
        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-md hover:from-blue-700 hover:to-blue-500">
            <PlusCircle className="mr-2 h-5 w-5" />
            Book a New Appointment
        </Button>
    </div>
);

const UpcomingAppointment = () => (
    <Card className="shadow-xl border-blue-200 border-2 rounded-2xl bg-white/80 backdrop-blur">
        <CardHeader className="pb-2">
            <CardTitle className="text-blue-900 text-2xl font-bold">Upcoming Appointment</CardTitle>
            <CardDescription className="text-blue-700">Your next scheduled video consultation.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-blue-200">
                    <AvatarImage src={upcomingAppointment.avatarUrl} alt={upcomingAppointment.doctorName} />
                    <AvatarFallback>{upcomingAppointment.doctorName.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-grow">
                    <p className="font-bold text-lg">{upcomingAppointment.doctorName}</p>
                    <p className="text-gray-600">{upcomingAppointment.specialty}</p>
                    <p className="text-sm text-gray-500 mt-1">{upcomingAppointment.date} at {upcomingAppointment.time}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto mt-4 sm:mt-0">
                    <Button className="w-full sm:w-auto flex-1 bg-gradient-to-r from-green-600 to-green-400 text-white font-bold shadow-md hover:from-green-700 hover:to-green-500">
                        <Video className="mr-2 h-4 w-4" />
                        Join Call
                    </Button>
                    <Button variant="outline" className="w-full sm:w-auto flex-1 border-blue-200">Reschedule</Button>
                </div>
            </div>
        </CardContent>
    </Card>
);

const QuickActions = () => {
    const actions = [
        { title: "AI Symptom Checker", icon: BrainCircuit, color: "text-purple-600", bgColor: "bg-purple-100" },
        { title: "Find Medicines", icon: Pill, color: "text-green-600", bgColor: "bg-green-100" },
        { title: "View Health Records", icon: FileText, color: "text-yellow-600", bgColor: "bg-yellow-100" },
        { title: "Call Ambulance", icon: Siren, color: "text-red-600", bgColor: "bg-red-100" },
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-900">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {actions.map(action => (
                    <Card key={action.title} className="hover:shadow-xl transition-shadow cursor-pointer rounded-xl bg-white/80 backdrop-blur border-2 border-blue-100">
                        <CardContent className="flex flex-col items-center justify-center text-center p-6">
                            <div className={`p-3 rounded-full ${action.bgColor} mb-3 shadow-md`}>
                                <action.icon className={`h-8 w-8 ${action.color}`} />
                            </div>
                            <p className="font-semibold text-base text-blue-900">{action.title}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

const RecentActivity = () => {
    const handleViewPrescription = (prescriptionText) => {
        // In a real app, this would also save the data to IndexedDB for offline access.
        console.log("Saving for offline:", prescriptionText);
        alert(`Prescription Details:\n\n${prescriptionText}`);
    };

    return (
        <Card className="shadow-xl rounded-2xl bg-white/80 backdrop-blur border-2 border-blue-100">
            <CardHeader>
                <CardTitle className="text-blue-900 text-2xl font-bold">Recent Consultations</CardTitle>
                <CardDescription className="text-blue-700">Your past medical history.</CardDescription>
            </CardHeader>
            <CardContent>
                {pastConsultations.length > 0 ? (
                    <Accordion type="single" collapsible className="w-full">
                        {pastConsultations.map(consult => (
                            <AccordionItem value={consult.id} key={consult.id}>
                                <AccordionTrigger>
                                    <div className="text-left">
                                        <p className="font-semibold text-blue-900">{consult.doctorName}</p>
                                        <p className="text-sm text-blue-700">{consult.date}</p>
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="space-y-3">
                                        <div>
                                            <p className="text-xs font-medium text-blue-700">Diagnosis</p>
                                            <p className="text-sm">{consult.diagnosis}</p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="w-full border-blue-200"
                                            onClick={() => handleViewPrescription(consult.prescription)}
                                        >
                                            View E-Prescription
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                ) : (
                    <p className="text-sm text-center text-blue-700 py-4">No past consultations found.</p>
                )}
            </CardContent>
        </Card>
    );
};
