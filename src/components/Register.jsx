import React, { useState } from "react";

const Register = ({ onClose }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        registrationNumber: "",
        email: "",
        branch: "",
        events: [],
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setFormData((prevData) => {
            const events = checked
                ? [...prevData.events, value]
                : prevData.events.filter((event) => event !== value);
            return { ...prevData, events };
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";

        if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

        const registrationNumberPattern = /^(202[1-4])[A-Za-z]{2}[A-Za-z]{2}\d{3}$/;
        if (!formData.registrationNumber.trim().toUpperCase()) {
            newErrors.registrationNumber = "Registration Number is required";
        } else if (!registrationNumberPattern.test(formData.registrationNumber)) {
            newErrors.registrationNumber = "Invalid Registration Number";
        }

        const emailPattern = /^[0-9]{4}[A-Za-z]{2}[a-zA-Z]{2}\d{3}@nitjsr\.ac\.in$/i;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailPattern.test(formData.email)) {
            newErrors.email = "Please use your college email";
        }

        if (!formData.branch) newErrors.branch = "Branch is required";

        if (formData.events.length === 0) newErrors.events = "Select at least one event";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            
            setLoading(true);
            const urls = [
                import.meta.env.VITE_FORMSPREE_ENDPOINT,
                import.meta.env.VITE_FORMSPREE_ENDPOINT_2,
                import.meta.env.VITE_FORMSPREE_ENDPOINT_3,
            ];
    
            let submissionSuccessful = false;
    
            for (const url of urls) {
                try {
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(formData),
                    });
    
                    if (response.ok) {
                        alert("Registration Successful!");
                        setFormData({
                            firstName: "",
                            lastName: "",
                            registrationNumber: "",
                            email: "",
                            branch: "",
                            events: [],
                        });
                        onClose();
                        submissionSuccessful = true;
                        break;
                    } else {
                        const errorData = await response.json();
                        console.error("Submission failed:", errorData.errors[0].message);
                    }
                } catch (error) {
                    console.error("Error submitting form:", error);
                }
            }
    
            if (!submissionSuccessful) {
                alert("All submissions failed. Please try again later.");
            }
    
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
                Register for Events
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.firstName ? "border-red-500" : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.lastName ? "border-red-500" : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Registration Number
                    </label>
                    <input
                        type="text"
                        name="registrationNumber"
                        placeholder="Registration Number"
                        value={formData.registrationNumber}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.registrationNumber ? "border-red-500" : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.registrationNumber && (
                        <p className="text-red-500 text-sm mt-1">{errors.registrationNumber}</p>
                    )}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.email ? "border-red-500" : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Branch</label>
                    <select
                        name="branch"
                        value={formData.branch}
                        onChange={handleChange}
                        className={`w-full p-2 border ${errors.branch ? "border-red-500" : "border-gray-300"
                            } rounded focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    >
                        <option value="">Select Branch</option>
                        <option value="ME">Mechanical Engineering</option>
                        <option value="ECM">Engineering & Computational Mechanics</option>
                        <option value="CSE">Computer Science & Engineering</option>
                        <option value="EE">Electrical Engineering</option>
                        <option value="ECE">Electronics & Communication Engineering</option>
                        <option value="PIE">Production & Industrial Engineering</option>
                        <option value="META">Metallurgical & Materials Science Engineering</option>
                        <option value="CE">Civil Engineering</option>
                    </select>
                    {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch}</p>}
                </div>

                <div>
                    <h3 className="block text-sm font-medium text-gray-700 mb-2">Select Events:</h3>
                    <div className="space-y-2">
                        {["Elevator Pitch", "Quriosity", "Assemblage", "Place Station", "Dictum Symposium", "Shoot at Sight", "Protoverse", "Row-Boat-Ics", "Sell-a-Thon", "Open Stage"].map((event) => (
                            <label key={event} className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    value={event}
                                    checked={formData.events.includes(event)}
                                    onChange={handleCheckboxChange}
                                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <span>{event}</span>
                            </label>
                        ))}
                    </div>
                    {errors.events && <p className="text-red-500 text-sm mt-1">{errors.events}</p>}
                </div>

                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={loading}
                >
                    {loading ? "Submitting..." : "Register"}
                </button>
            </form>
        </div>
    );
};

export default Register;