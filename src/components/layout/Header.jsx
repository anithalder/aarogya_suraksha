/* eslint-disable no-unused-vars */
import { Button, Icon } from "@/components/home"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

export const Header = () => {

    const navigate = useNavigate()
    const { userData, backendUrl, setUserData, setIsLoggedIn } = useContext(AppContext)

    const logout = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(backendUrl + '/api/auth/logout')
            data.success && setIsLoggedIn(false)
            data.success && setUserData(false)
            navigate('/')
        } catch (error) {
            toast.error(error.message)
        }
    }

    const sendVerificationOtp = async () => {
        try {
            axios.defaults.withCredentials = true;
            const { data } = await axios.post(backendUrl + '/api/auth/send-verify-otp')
            if (data.success) {
                toast.success(data.message)
                navigate('/email-verify')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-white via-blue-50 to-white/80 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <a href="#" className="flex items-center gap-2">
                    {/* <Icon name="heartPulse" className="h-7 w-7 text-blue-600" /> */}
                    <img src="favicon.png" alt="ArogyaSuraksha Logo" className="h-8 w-8 object-contain" />
                    <span className="text-xl font-bold text-gray-900">ArogyaSuraksha</span>
                </a>
                <nav className="hidden items-center gap-6 md:flex">
                    <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">How it Works</a>
                    <a href="#features" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                    <a href="#doctors" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">Find a Doctor</a>
                </nav>
                <div className="flex items-center gap-2">
                    <Button variant="ghost" onClick={() => navigate('/login')}>Login</Button>
                    <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => navigate('/login')}>Register</Button>
                    <Button variant="ghost" size="icon" className="md:hidden">
                        <Icon name="menu" className="h-6 w-6" />
                    </Button>
                </div>
            </div>
        </header>
    )
};

export default Header;