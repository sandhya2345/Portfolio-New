"use client";
import React, { useEffect, useState } from "react";
import { questions } from "@/lib/data/projects";
import { MessageCircle, Plus, Stars, X } from "lucide-react";

const Questions = () => {
    const [stars, setStars] = useState([]);
    const [openId, setOpenId] = useState(null);

    useEffect(() => {
        const createRandomStars = (count) => {
            const stars = [];
            for (let i = 0; i < count; i++) {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                const size = Math.random() * 2 + 2;
                const duration = Math.random() * 20 + 10;
                const delay = Math.random() * 5;
                stars.push({ top, left, size, duration, delay });
            }
            return stars;
        };

        setStars(createRandomStars(150));
    }, []);

    const toggleQuestion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <div className="relative min-h-screen overflow-hidden text-white">
            <style jsx>{`
        @keyframes moveStar {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translate(-50px, -50px);
            opacity: 1;
          }
        }
      `}</style>

            {stars.map((star, index) => (
                <div
                    key={index}
                    style={{
                        position: "absolute",
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        backgroundColor: "black",
                        borderRadius: "50%",
                        boxShadow: "0 0 6px rgba(255, 255, 255, 0.8)",
                        animation: `moveStar ${star.duration}s linear infinite`,
                        animationDelay: `${star.delay}s`,
                    }}
                />
            ))}

            <section className="py-12 relative  text-black">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h1 className="flex justify-center items-center gap-2 text-2xl sm:text-4xl  text-gray-900 mb-4">
                            <Stars className="w-6 h-6" />
                            Quick Answers
                            <Stars className="w-6 h-6" />
                        </h1>
                    </div>


                    <div className="space-y-4">
                        {questions.map((item) => (
                            <div
                                key={item.id}
                                className="bg-gray-100 text-gray-900 rounded-md overflow-hidden"
                            >

                                <button
                                    onClick={() => toggleQuestion(item.id)}
                                    className="w-full flex justify-between items-center px-6 py-2 mt-4 text-left text-xl font-medium"
                                >
                                    <span>{item.question}</span>
                                    {openId === item.id ? (
                                        <X className="w-8 h-8" />
                                    ) : (
                                        <Plus className="w-8 h-8" />
                                    )}
                                </button>


                                <div
                                    className={`pb-4 text-gray-800 px-6 py-2  text-xl border-t border-gray-200 transition-all duration-300 ease-in-out ${openId === item.id
                                        ? "max-h-96 opacity-100"
                                        : "max-h-0 opacity-0 overflow-hidden"
                                        }`}
                                >
                                    {item.answer}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Questions;
