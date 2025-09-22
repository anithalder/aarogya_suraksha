import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { HeartPulse, ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function LoginPage() {
    const [step, setStep] = useState('phone'); // 'phone' or 'otp'
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');

    const handleSendOtp = (e) => {
        e.preventDefault();
        // In a real app, you would call Firebase here to send the OTP.
        console.log('Sending OTP to:', phoneNumber);
        if (phoneNumber.length === 10) {
            setStep('otp');
        } else {
            alert('Please enter a valid 10-digit phone number.');
        }
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // In a real app, you would verify the OTP with Firebase.
        console.log('Verifying OTP:', otp);
        if (otp.length === 6) {
            toast.success(`Logged in successfully with phone: ${phoneNumber}`);
            // Redirect to dashboard on successful login
        } else {
            toast.error('Please enter the 6-digit OTP.');
        }
    };

    return (
        <>
            <div className="w-full min-h-screen lg:grid lg:grid-cols-2 bg-gradient-to-br from-blue-50 via-white to-blue-100">
                <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-10">
                    <div className="text-center">
                        <img
                            src="https://placehold.co/600x400/E9F5FF/3B82F6?text=Health+for+Every+Village"
                            alt="Illustration of rural healthcare"
                            className="rounded-2xl shadow-2xl mb-8 border-4 border-blue-200"
                        />
                        <h2 className="text-4xl font-extrabold text-blue-900 drop-shadow-lg">Healthcare, now in your hands.</h2>
                        <p className="mt-4 text-lg text-blue-700">
                            Easily log in with your mobile number to consult with a doctor.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto w-full max-w-md space-y-8">
                        <div className="text-center">
                            <HeartPulse className="h-14 w-14 text-blue-600 mx-auto animate-pulse" />
                            <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 mt-6 drop-shadow-md">
                                Welcome <br /> to <br /> ArogyaSuraksha
                            </h1>
                            <p className="mt-3 text-blue-700 text-lg">
                                Login or register to your account
                            </p>
                        </div>

                        <Card className="shadow-xl rounded-2xl border-2 border-blue-100 bg-white/80 backdrop-blur">
                            {step === 'phone' && (
                                <form onSubmit={handleSendOtp}>
                                    <CardHeader className="pt-6 justify-center text-center mb-2">
                                        <CardTitle className="text-blue-900">Enter your mobile number</CardTitle>
                                        <CardDescription className="text-blue-700">We will send an OTP to your number.</CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4 justify-center align-center">
                                        <div className="space-y-2 mt-3">
                                            <Label htmlFor="phone" className="text-blue-800 mb-3">Mobile Number</Label>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-semibold p-2 bg-blue-50 border border-blue-200 rounded-md text-blue-700">+91</span>
                                                <Input
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="xxxxxxxxxx"
                                                    maxLength={10}
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                                                    required
                                                    className="focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                                                />
                                            </div>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-4">
                                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg shadow-md transition-all">Send OTP</Button>
                                    </CardFooter>
                                </form>
                            )}

                            {step === 'otp' && (
                                <form onSubmit={handleLogin}>
                                    <CardHeader className="pb-2 text-center">
                                        <CardTitle className="text-blue-900 text-2xl">Verify OTP</CardTitle>
                                        <CardDescription className="text-blue-700 text-base mt-2">
                                            Enter the code sent to your mobile number <strong>+91 {phoneNumber}</strong>.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex flex-col items-center space-y-6 bg-blue-50/60 rounded-xl p-6 mt-2 shadow-inner">
                                        <div className="flex flex-col items-center w-full">
                                            <InputOTP
                                                maxLength={6}
                                                value={otp}
                                                onChange={(value) => setOtp(value)}
                                                className="mb-4 text-2xl"
                                            >
                                                <InputOTPGroup>
                                                    <InputOTPSlot index={0} />
                                                    <InputOTPSlot index={1} />
                                                    <InputOTPSlot index={2} />
                                                    <InputOTPSlot index={3} />
                                                    <InputOTPSlot index={4} />
                                                    <InputOTPSlot index={5} />
                                                </InputOTPGroup>
                                            </InputOTP>
                                            <Button variant="link" size="sm" type="button" onClick={() => setStep('phone')} className="text-sm text-blue-600 mt-2">
                                                Change Number
                                            </Button>
                                        </div>
                                    </CardContent>
                                    <CardFooter className="pt-6">
                                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 rounded-lg shadow-md transition-all text-lg">Login</Button>
                                    </CardFooter>
                                </form>
                            )}
                        </Card>
                        <div className="text-center text-sm mt-6">
                            <Link href="/" className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors font-medium">
                                <ArrowLeft className="w-4 h-4" />
                                Return to Homepage
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="colored" />
        </>
    );
}

