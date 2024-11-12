import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { endpoint } from "../utils/APIRoutes";
import toast from 'react-hot-toast';

const Registration = () => {
    const navigate = useNavigate();
    const initialValue = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }
    const fk = useFormik({
        initialValues: initialValue,
        enableReinitialize: true,

        onSubmit: () => {
            const reqbody = {
                username: fk.values.username,
                email: fk.values.email,
                password: fk.values.password,
                confirmPassword: fk.values.confirmPassword,
            }
            // RegistrationFn(reqbody)
            console.log(reqbody)
        }
    })
    const RegistrationFn = async (reqbody) => {
        try {
            const response = await axios.post(endpoint?.registration_api, reqbody, {
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            })
            if (response?.data?.msg === "Registration Successfully") {
                toast(response?.data?.msg)
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#075E54] via-[#128C7E] to-[#25D366]">
            <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-[#25D366] mb-6">Create Account</h2>

                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={fk.values.username}
                            onChange={fk.handleChange}
                            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={fk.values.email}
                            onChange={fk.handleChange}
                            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={fk.values.password}
                            onChange={fk.handleChange}
                            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={fk.values.confirmPassword}
                            onChange={fk.handleChange}
                            className="w-full p-3 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#25D366]"
                            required
                        />
                    </div>
                    <button
                          onClick={() => fk.handleSubmit()}
                        className="w-full py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#128C7E] focus:outline-none focus:ring-2 focus:ring-[#128C7E]"
                    >
                        Register
                    </button>
                <div className="mt-4 text-center">
                    <p className="text-sm text-gray-700">
                        Already have an account?{" "}
                        <span
                            className="text-[#25D366] cursor-pointer hover:underline"
                            onClick={() => navigate('/')}
                        >
                            Login
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
