"use client";

import React, { useState, useEffect, useRef } from "react";
import { useChat } from "ai/react";
import { IoSend } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { marked } from "marked"; // Importamos la librería 'marked'

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useChat();

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    // Ref para el contenedor de mensajes
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Efecto para desplazar el scroll hacia el final cuando hay nuevos mensajes
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);

    return (
        <div className="fixed bottom-4 right-4 ">
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="bg-green-500 text-white p-3 w-14 h-14 rounded-full shadow-lg"
                >
                    <FiMessageSquare className="w-full" />
                </button>
            )}

            {isOpen && (
                <div className="mt-4 w-96 h-[500px] bg-white border dark:bg-gray-dark rounded-lg shadow-lg flex flex-col">
                    <div className="flex justify-between items-center bg-green-500 rounded-lg p-3 text-white">
                        <h3 className="font-bold">Yacu Bot</h3>
                        <button onClick={toggleChat} className="text-xl">
                            &times;
                        </button>
                    </div>
                    <div className="flex-1 p-4 overflow-auto">
                        {/* Mensaje de bienvenida */}
                        <div className="bg-green-200 dark:text-black p-2 rounded-lg mb-2 self-start me-10">
                            <p className="text-sm">Hola, ¿en qué puedo ayudarte?</p>
                        </div>
                        {/* Mapeo de mensajes */}
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`text-sm p-2 rounded-lg mb-2 ${message.role === "user"
                                        ? "bg-blue-200 self-end text-right ms-10 dark:text-black"
                                        : "bg-green-200 self-start text-left me-10 dark:text-black"
                                    }`}
                            >
                                {/* Convertimos el Markdown a HTML usando 'marked' */}
                                <div
                                    className="message-content"
                                    dangerouslySetInnerHTML={{
                                        __html: marked(message.content).toString()
                                    }}
                                />
                            </div>
                        ))}
                        {/* Ref para el último mensaje */}
                        <div ref={messagesEndRef}></div>
                    </div>
                    <div className="p-3 border-t">
                        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
                            <input
                                name="prompt"
                                value={input}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-lg focus:border-blue-400 focus:outline-none"
                                placeholder="Escribe un mensaje..."
                            />
                            <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg">
                                <IoSend />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
