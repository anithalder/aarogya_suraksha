/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { HeartPulse, ArrowLeft } from 'lucide-react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import VerifyPhone from './PatientVerify'; // ✅ imported component
import { useNavigate } from 'react-router-dom';


// --- (Bengali Comment) ---
// Development-er jonno sample user data. Ekhane shob role-er user ache.
// Backend ready hoar por ei section-ti comment out kore dilei hobe.
const sampleUsers = [
    { id: 101, full_name: "Aarav Singh (Patient)", phone: "9876543210", password: "hashed_password_101", role: "PATIENT" },
    { id: 201, full_name: "Dr. Karan Malhotra (Doctor)", phone: "9876543220", password: "hashed_password_201", role: "DOCTOR" },
    { id: 301, full_name: "Paramjit Saini (Pharmacy)", phone: "9876543225", password: "hashed_password_301", role: "PHARMACY_STAFF" },
    { id: 401, full_name: "Usha Rani (Admin)", phone: "9876543229", password: "hashed_password_401", role: "ADMIN" }
];


export default function LoginPage() {
    const { backendUrl, setUserData: setGlobalUserData, setIsLoggedIn } = useContext(AppContext);
    const navigate = useNavigate();

    const [mode, setMode] = useState('Login'); // 'Login' or 'Sign Up'
    const [step, setStep] = useState('form'); // 'form' or 'verify' or 'success'
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // --- (Bengali Comment) ---
        // Prothome hardcoded sample user check kora hocche.
        const hardcodedUser = sampleUsers.find(user => user.phone === phone);

        if (hardcodedUser && mode === 'Login') {
            toast.success(`Welcome back, ${hardcodedUser.full_name}!`);
            setCurrentUser(hardcodedUser);
            setIsLoggedIn(true);
            setGlobalUserData(hardcodedUser);
            setStep('success');
            return; // Hardcoded user peye gele ar API call korar dorkar nei.
        }

        // --- (Bengali Comment) ---
        // Jodi hardcoded user na paoa jay, tahole API call kora hobe.
        // Ei 'try-catch' block-ti backend chalu thaklei kaj korbe.
        try {
            if (mode === 'Sign Up') {
                const { data: existingUsers } = await axios.get(`${backendUrl}/users?phone=${phone}`);
                if (existingUsers.length > 0) {
                    toast.error('A user with this number already exists. Please log in.');
                    return;
                }
                toast.info('OTP has been sent to your mobile number!');
                setStep('verify');
            } else {
                const { data: users } = await axios.get(`${backendUrl}/users?phone=${phone}`);
                if (users && users.length > 0) {
                    setCurrentUser(users[0]);
                    toast.info('OTP sent for verification!');
                    setStep('verify');
                } else {
                    toast.error('No account found with this number. Please sign up.');
                }
            }
        } catch (error) {
            console.error("API Error:", error);
            toast.error('Failed to connect to the server. Please check if the backend is running.');
        }
    };

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        try {
            // NOTE: OTP verification is mocked for hardcoded users.
            // For API flow, this should check against the backend.
            const { data: otpData } = await axios.get(
                `${backendUrl}/otps?phone=${phone}&otp_code=${otp}`
            );

            if (otpData && otpData.length > 0) {
                if (mode === 'Sign Up') {
                    const newUserResponse = await axios.post(`${backendUrl}/users`, {
                        full_name: name,
                        phone: phone,
                        password: password, // In a real app, ALWAYS hash this
                        role: 'PATIENT',
                    });
                    await axios.post(`${backendUrl}/patients`, {
                        user_id: newUserResponse.data.id,
                        address: '',
                        language_preference: 'en',
                    });
                    toast.success('Account created successfully!');
                }

                // Fetch the user data again to be sure
                const { data: users } = await axios.get(`${backendUrl}/users?phone=${phone}`);
                const userToLogin = users[0];

                setCurrentUser(userToLogin);
                setGlobalUserData(userToLogin);
                setIsLoggedIn(true);
                toast.success('Login successful!');
                setStep('success');

            } else {
                toast.error('Invalid OTP. Please try again.');
            }
        } catch (error) {
            console.error("Verification Error:", error);
            toast.error('An error occurred during verification.');
        }
    };

    const handleResendOtp = () => {
        toast.success('A new OTP has been sent!');
        // Add API call logic here if needed
    };

    // Auto-redirect after success
    useEffect(() => {
        if (step === 'success' && currentUser) {
            const timer = setTimeout(() => {
                switch (currentUser.role) {
                    case 'DOCTOR':
                        navigate('/doctor-dashboard');
                        break;
                    case 'ADMIN':
                        // Assuming you have an admin dashboard route
                        navigate('/admin-dashboard');
                        break;
                    case 'PHARMACY_STAFF':
                        // Assuming you have a pharmacy dashboard route
                        navigate('/pharmacy-dashboard');
                        break;
                    default:
                        navigate('/patient-dashboard');
                        break;
                }
            }, 2000); // 2-second delay for the user to see the success message
            return () => clearTimeout(timer);
        }
    }, [step, currentUser, navigate]);

    return (
        <>
            <div className="w-full min-h-screen lg:grid lg:grid-cols-2 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative">
                {/* Left Side */}
                <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-10">
                    <div className="text-center">
                        <img
                            src="Health for Every Village.png"
                            // width={600}
                            // height={200}
                            alt="Illustration of rural healthcare"
                            className="rounded-2xl shadow-2xl mb-8 border-4 border-blue-200"
                        />
                        <h2 className="text-4xl font-extrabold text-blue-900 drop-shadow-lg">
                            Healthcare, now in your hands.
                        </h2>
                        <p className="mt-4 text-lg text-blue-700">
                            Easily log in or sign up to consult with a doctor.
                        </p>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto w-full max-w-md space-y-8">
                        <div className="text-center">
                            <HeartPulse className="h-14 w-14 text-blue-600 mx-auto animate-pulse" />
                            <h1 className="text-4xl font-extrabold tracking-tight text-blue-900 mt-6 drop-shadow-md">
                                {mode === 'Sign Up' ? 'Create Account' : 'Login to ArogyaSuraksha'}
                            </h1>
                            <p className="mt-3 text-blue-700 text-lg">
                                {step === 'form'
                                    ? mode === 'Sign Up'
                                        ? 'Create your account to get started'
                                        : 'Access your account securely with OTP'
                                    : step === 'verify'
                                        ? `Enter the OTP sent to +91 ${phone}`
                                        : 'Login successful! Redirecting...'}
                            </p>
                        </div>

                        {step === 'form' && (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {mode === 'Sign Up' && (
                                    <div className="space-y-1">
                                        <label htmlFor="name" className="text-blue-800 font-medium">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                )}

                                <div className="space-y-1">
                                    <label htmlFor="phone" className="text-blue-800 font-medium">
                                        Mobile Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                                        required
                                        maxLength={10}
                                        placeholder="Enter 10-digit mobile number"
                                        className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>

                                {mode === 'Sign Up' && (
                                    <div className="space-y-1">
                                        <label htmlFor="password" className="text-blue-800 font-medium">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="••••••••"
                                            className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        />
                                    </div>
                                )}
                                <button
                                    type="submit"
                                    className="w-full py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold shadow-md transition-all"
                                >
                                    {mode === 'Login' ? 'Login' : 'Send OTP to Sign Up'}
                                </button>
                            </form>
                        )}

                        {step === 'verify' && (
                            <VerifyPhone
                                phoneNumber={phone}
                                otp={otp}
                                setOtp={setOtp}
                                onVerify={handleVerifyOtp}
                                onChangeNumber={() => setStep('form')}
                                onResendOtp={handleResendOtp}
                            />
                        )}

                        {step === 'success' && (
                            <div className="text-center py-8">
                                <p className="text-green-600 font-bold text-xl">
                                    ✅ Login Successful!
                                </p>
                                <p className="text-gray-600 mt-2">
                                    Redirecting you to your dashboard...
                                </p>
                            </div>
                        )}

                        <div className="text-center text-sm mt-6 space-y-2">
                            {mode === 'Sign Up' ? (
                                <p className="text-blue-700">
                                    Already have an account?
                                    <span
                                        onClick={() => {
                                            setMode('Login');
                                            setStep('form');
                                        }}
                                        className="text-blue-900 font-medium cursor-pointer ml-1"
                                    >
                                        Login
                                    </span>
                                </p>
                            ) : (
                                <p className="text-blue-700">
                                    Don't have an account?
                                    <span
                                        onClick={() => {
                                            setMode('Sign Up');
                                            setStep('form');
                                        }}
                                        className="text-blue-900 font-medium cursor-pointer ml-1"
                                    >
                                        Sign Up
                                    </span>
                                </p>
                            )}
                            <button
                                onClick={() => navigate('/')}
                                className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors font-medium"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Return to Homepage
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    );
}