// components/SignInForm.jsx
import React, { useState } from 'react';
import {
    Card, CardHeader, CardTitle, CardDescription,
    CardContent, CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from 'react-toastify';

export default function SignUpForm({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast.error("Please fill in all fields.");
            return;
        }

        // Replace with actual sign-in logic
        console.log("Signing in with:", email, password);
        toast.success("Signed in successfully!");
        onSignIn(); // Callback to redirect or update state
    };

    return (
        <Card className="shadow-xl rounded-2xl border-2 border-blue-100 bg-white/80 backdrop-blur">
            <form onSubmit={handleSubmit}>
                <CardHeader className="text-center pt-6">
                    <CardTitle className="text-blue-900 text-2xl">Sign In</CardTitle>
                    <CardDescription className="text-blue-700 text-base mt-2">
                        Enter your credentials to access your account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 px-6">
                    <div>
                        <Label htmlFor="email" className="text-blue-800">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password" className="text-blue-800">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 rounded-lg"
                        />
                    </div>
                </CardContent>
                <CardFooter className="px-6 pt-4">
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg shadow-md transition-all">
                        Sign In
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}