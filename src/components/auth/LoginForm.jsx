// components/LoginForm.jsx
import React from 'react';
import {
    Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";

export default function LoginForm({ step, setStep, phoneNumber, setPhoneNumber, otp, setOtp, handleSendOtp, handleLogin }) {
    return (
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
                                    {[...Array(6)].map((_, i) => (
                                        <InputOTPSlot key={i} index={i} />
                                    ))}
                                </InputOTPGroup>
                            </InputOTP>
                            <Button variant="link" size="sm" type="button" onClick={() => setStep('phone')} className="text-sm text-blue-600 mt-2">
                                Change Number
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="pt-6">
                        <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 rounded-lg shadow-md transition-all text-lg">
                            Login
                        </Button>
                    </CardFooter>
                </form>
            )}
        </Card>
    );
}