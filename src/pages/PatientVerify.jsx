import React, { useEffect, useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';

export default function VerifyPhone({
    phoneNumber,
    otp,
    setOtp,
    onVerify,
    onChangeNumber,
    onResendOtp,
}) {
    const [timer, setTimer] = useState(30); // 30 seconds countdown
    const [canResend, setCanResend] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const handleResend = () => {
        setCanResend(false);
        setTimer(30);
        onResendOtp();
    };

    return (
        <Card className="shadow-xl rounded-2xl border-2 border-blue-100 bg-white/80 backdrop-blur">
            <form onSubmit={onVerify}>
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

                        <Button
                            variant="link"
                            size="sm"
                            type="button"
                            onClick={onChangeNumber}
                            className="text-sm text-blue-600 mt-2"
                        >
                            Change Number
                        </Button>

                        <div className="mt-4 text-sm text-blue-700">
                            {canResend ? (
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    type="button"
                                    onClick={handleResend}
                                    className="text-blue-600 hover:text-blue-800"
                                >
                                    Resend OTP
                                </Button>
                            ) : (
                                <span>Resend available in {timer}s</span>
                            )}
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="pt-6">
                    <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 rounded-lg shadow-md transition-all text-lg"
                    >
                        Verify & Continue
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}