import React from 'react';
import { Button } from "@/components/ui/button";
import { Mic, MicOff, PhoneOff, MessageSquare } from 'lucide-react';

export default function VideoCallRoom() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center justify-center p-4">
            {/* Video Streams */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-5xl mb-6">
                <div className="bg-black rounded-xl overflow-hidden shadow-lg relative">
                    <video
                        autoPlay
                        muted
                        className="w-full h-80 object-cover"
                        // Replace with your local stream
                        src=""
                    />
                    <div className="absolute bottom-2 left-2 text-white font-semibold bg-blue-600 px-2 py-1 rounded">You</div>
                </div>
                <div className="bg-black rounded-xl overflow-hidden shadow-lg relative">
                    <video
                        autoPlay
                        className="w-full h-80 object-cover"
                        // Replace with remote stream
                        src=""
                    />
                    <div className="absolute bottom-2 left-2 text-white font-semibold bg-green-600 px-2 py-1 rounded">Dr. Sunita Sharma</div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4">
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    <Mic className="mr-2 h-5 w-5" />
                    Mute
                </Button>
                <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chat
                </Button>
                <Button className="bg-red-600 text-white hover:bg-red-700 font-bold">
                    <PhoneOff className="mr-2 h-5 w-5" />
                    End Call
                </Button>
            </div>
        </div>
    );
}