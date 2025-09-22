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
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
    Video,
    FileText,
    Phone,
    Pill,
    Siren,
    ClipboardList,
    Bell,
    UserCheck,
    Stethoscope,
    MessageCircle,
} from 'lucide-react';

// --- Mock Data ---
const doctorData = {
    name: "Dr. Sunita Sharma",
    specialty: "Pediatrician",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
};

const todaysAppointments = [
    {
        id: "appt_1",
        patientName: "Balwinder Kaur",
        time: "11:30 AM",
        reason: "Fever & Cough",
        avatarUrl: "https://i.pravatar.cc/150?img=6",
    },
    {
        id: "appt_2",
        patientName: "Gurpreet Singh",
        time: "12:15 PM",
        reason: "Follow-up",
        avatarUrl: "https://i.pravatar.cc/150?img=7",
    },
];

const recentConsults = [
    {
        id: "consult_1",
        patientName: "Jagmel Ram",
        date: "Sept 20, 2025",
        diagnosis: "General Check-up",
        notes: "Advised to monitor BP weekly.",
    },
    {
        id: "consult_2",
        patientName: "Sukhdeep Kaur",
        date: "Sept 18, 2025",
        diagnosis: "Seasonal Allergy",
        notes: "Prescribed antihistamines.",
    },
];

const notifications = [
    { id: 1, text: "New message from admin.", icon: MessageCircle },
    { id: 2, text: "Emergency call requested.", icon: Siren },
];

export default function DoctorDashboard() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
            <div className="container mx-auto p-4 md:p-8">
                <WelcomeHeaderOld name={doctorData.name} specialty={doctorData.specialty} avatarUrl={doctorData.avatarUrl} />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                    <div className="lg:col-span-2 space-y-8">
                        <TodaysAppointments />
                        <QuickActionsOld />
                    </div>
                    <div className="lg:col-span-1 space-y-8">
                        <Notifications />
                        <RecentConsults />
                    </div>
                </div>
            </div>
        </div>
    );
}

const WelcomeHeaderOld = ({ name, specialty, avatarUrl }) => (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-4 border-blue-200 shadow-lg">
                <AvatarImage src={avatarUrl} alt={name} />
                <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-blue-900 drop-shadow">Welcome, {name}</h1>
                <p className="text-blue-700 font-semibold">{specialty}</p>
            </div>
        </div>
        <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold shadow-md hover:from-blue-700 hover:to-blue-500">
            <Stethoscope className="mr-2 h-5 w-5" />
            Start Consultation
        </Button>
    </div>
);

const TodaysAppointments = () => (
    <Card className="shadow-xl border-blue-200 border-2 rounded-2xl bg-white/80 backdrop-blur">
        <CardHeader className="pb-2">
            <CardTitle className="text-blue-900 text-2xl font-bold">Today's Appointments</CardTitle>
            <CardDescription className="text-blue-700">Your scheduled patient consultations for today.</CardDescription>
        </CardHeader>
        <CardContent>
            {todaysAppointments.length > 0 ? (
                <div className="space-y-4">
                    {todaysAppointments.map(appt => (
                        <div key={appt.id} className="flex items-center gap-4 p-4 rounded-xl bg-blue-50">
                            <Avatar className="h-12 w-12 border-2 border-blue-200">
                                <AvatarImage src={appt.avatarUrl} alt={appt.patientName} />
                                <AvatarFallback>{appt.patientName.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="flex-grow">
                                <p className="font-bold text-lg text-blue-900">{appt.patientName}</p>
                                <p className="text-blue-700 text-sm">{appt.reason}</p>
                                <p className="text-xs text-blue-500 mt-1">{appt.time}</p>
                            </div>
                            <Button className="bg-gradient-to-r from-green-600 to-green-400 text-white font-bold shadow-md hover:from-green-700 hover:to-green-500">
                                <Video className="mr-2 h-4 w-4" />
                                Join Call
                            </Button>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-sm text-center text-blue-700 py-4">No appointments scheduled for today.</p>
            )}
        </CardContent>
    </Card>
);

const QuickActionsOld = () => {
    const actions = [
        { title: "View Patient Records", icon: FileText, color: "text-yellow-600", bgColor: "bg-yellow-100" },
        { title: "Write Prescription", icon: Pill, color: "text-green-600", bgColor: "bg-green-100" },
        { title: "Emergency Call", icon: Siren, color: "text-red-600", bgColor: "bg-red-100" },
        { title: "Call Patient", icon: Phone, color: "text-blue-600", bgColor: "bg-blue-100" },
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

const RecentConsults = () => (
    <Card className="shadow-xl rounded-2xl bg-white/80 backdrop-blur border-2 border-blue-100">
        <CardHeader>
            <CardTitle className="text-blue-900 text-2xl font-bold">Recent Consultations</CardTitle>
            <CardDescription className="text-blue-700">Your recent patient visits.</CardDescription>
        </CardHeader>
        <CardContent>
            {recentConsults.length > 0 ? (
                <Accordion type="single" collapsible className="w-full">
                    {recentConsults.map(consult => (
                        <AccordionItem value={consult.id} key={consult.id}>
                            <AccordionTrigger>
                                <div className="text-left">
                                    <p className="font-semibold text-blue-900">{consult.patientName}</p>
                                    <p className="text-sm text-blue-700">{consult.date}</p>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-3">
                                    <div>
                                        <p className="text-xs font-medium text-blue-700">Diagnosis</p>
                                        <p className="text-sm">{consult.diagnosis}</p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-blue-700">Notes</p>
                                        <p className="text-sm">{consult.notes}</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            ) : (
                <p className="text-sm text-center text-blue-700 py-4">No recent consultations found.</p>
            )}
        </CardContent>
    </Card>
);

const Notifications = () => (
    <Card className="shadow-xl rounded-2xl bg-white/80 backdrop-blur border-2 border-blue-100">
        <CardHeader>
            <CardTitle className="text-blue-900 text-2xl font-bold">Notifications</CardTitle>
            <CardDescription className="text-blue-700">System alerts and new messages.</CardDescription>
        </CardHeader>
        <CardContent>
            {notifications.length > 0 ? (
                <ul className="space-y-4">
                    {notifications.map(note => (
                        <li key={note.id} className="flex items-center gap-3 p-3 rounded-lg bg-blue-50">
                            <note.icon className="h-6 w-6 text-blue-600" />
                            <span className="text-blue-900 font-medium">{note.text}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-sm text-center text-blue-700 py-4">No notifications.</p>
            )}
        </CardContent>
    </Card>
);
