import React from 'react'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/NavBar'
import Footer from '../components/Footer';
import {
    ArrowRight,
    Play,
    Zap,
    Calendar,
    CheckCircle,
    Sparkles,
    Clock,
    BarChart3,
    Upload,
} from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Tell us your niche & goals",
        description:
            "Pick your niche, set your growth goals, and choose how often you want to post.",
    },
    {
        number: "02",
        title: "Get your 90-day plan",
        description:
            "We generate a full content calendar with daily tasks, captions, and posting times.",
    },
    {
        number: "03",
        title: "Approve & grow",
        description:
            "Review each post, approve it, and watch ReelPilot handle the rest automatically.",
    },
];
const features = [
    {
        icon: Calendar,
        title: "90-Day Content Plan",
        description:
            "Get a personalized plan based on your niche and goals. Just follow the daily tasks.",
    },
    {
        icon: Sparkles,
        title: "AI Caption Generator",
        description:
            "Hooks, captions, and hashtags — all generated for your niche and content type.",
    },
    {
        icon: Clock,
        title: "Auto Scheduling",
        description:
            "Bulk upload your content and let ReelPilot post it daily at the best time.",
    },
    {
        icon: CheckCircle,
        title: "Approval System",
        description:
            "Nothing goes live without your OK. Approve, edit, or skip — you're always in control.",
    },
    {
        icon: BarChart3,
        title: "Simple Analytics",
        description:
            "Track consistency, posts published, and engagement — no data overwhelm.",
    },
    {
        icon: Upload,
        title: "Media Library",
        description:
            "Upload reels and videos in bulk. Organize your content in one place.",
    },
];


const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <section className="relative min-h-screen bg-gradient-to-br from-[#0b1a3a] to-[#0a1630] overflow-hidden flex items-center">

                {/* Background Effects */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-8"
                    >
                        <Zap className="h-4 w-4 text-orange-400" />
                        <span className="text-sm text-gray-300">
                            Your 90-day content autopilot
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6"
                    >
                        <span className="text-white">Grow your content on</span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                            autopilot for 90 days
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                    >
                        We plan, optimize, and post your content — you just sit back and
                        watch your growth. Built for beginners with 0–1000 followers.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                    >
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg transition-all duration-300"
                        >
                            Start your 90-day journey
                            <ArrowRight className="h-5 w-5" />
                        </button>

                        <button
                            onClick={() => {
                                const el = document.getElementById("how-it-works");
                                if (el) el.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="flex items-center justify-center gap-2 border border-orange-500 text-orange-400 px-8 py-4 rounded-xl text-base font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300"
                        >
                            <Play className="h-5 w-5" />
                            Watch demo
                        </button>
                    </motion.div>

                    {/* Features */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex flex-wrap gap-6 justify-center text-gray-400 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-orange-400" />
                            <span>90-day content plan</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-orange-400" />
                            <span>Approve before posting</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4 text-orange-400" />
                            <span>AI-powered captions</span>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* PART 2 */}
            <section className="py-24 bg-white" id='features'>
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                            Everything you need to{" "}
                            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                                grow on autopilot
                            </span>
                        </h2>

                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            No complexity. No guessing. Just a system that works for beginners.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-6 rounded-xl border border-gray-200 bg-white hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1"
                            >

                                {/* Icon */}
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {feature.description}
                                </p>

                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
            {/* Third section How it works */}
            <section className="py-24 bg-gradient-to-br from-[#0b1a3a] to-[#0a1630]" id='howItWork'>

                <div className="max-w-5xl mx-auto px-6">

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                            How it works
                        </h2>

                        <p className="text-gray-400 text-lg">
                            Three steps. Zero confusion.
                        </p>
                    </motion.div>

                    {/* Steps */}
                    <div className="grid md:grid-cols-3 gap-10 relative">
                        {steps.map((step, i) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="text-center relative"
                            >

                                {/* Number */}
                                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent mb-4">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>

                                {/* Line Connector */}
                                {i < steps.length - 1 && (
                                    <div className="hidden md:block absolute top-10 right-[-40px] w-20 border-t border-orange-500/30"></div>
                                )}

                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
            {/* TRAIL BUTTON SECTION */}
            {/* <section className="py-24 bg-gradient-to-br from-[#0b1a3a] to-[#0a1630]"> */}
            <section className="py-24 bg-gradient-to-br from-[#ffffff] to-[#f4f7ff]">

                <div className="max-w-4xl mx-auto px-6 bg-gradient-to-br from-[#0b1a3a] to-[#0a1630] rounded-2xl">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative text-center p-12 rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
                    >

                        {/* Glow Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.15)_0%,_transparent_70%)] "></div>

                        <div className="relative z-10 ">

                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                                Ready to grow on autopilot?
                            </h2>

                            {/* Subtext */}
                            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                                Join hundreds of beginners who stopped guessing and started growing with ReelPilot.
                            </p>

                            {/* Button */}
                            <button
                                onClick={() => navigate("/dashboard")}
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-xl text-base font-semibold shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                            >
                                Start your 90-day journey
                                <ArrowRight className="h-5 w-5" />
                            </button>

                        </div>
                    </motion.div>

                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Home
