import type { FC } from "react";

interface CardProps {
    title: string;
    description: string;
}

export const Card : FC<CardProps> = ({ title, description }) => {
    return (
        <div className="card bg-red-400 text-black w-100 h-50 rounded-2xl flex justify-start p-2 items-center flex-col gap-3">
            <div className="card-header w-full flex justify-between items-center">
                <span className="text-black-500 text-xl font-bold ">{title}</span>
                <div className="bg-black rounded-full p-2"><span className="arrow text-xl font-bold text-white"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    fill="currentColor" viewBox="0 0 24 24" >
                    <path d="M17 16V7H8v2h5.59l-6.3 6.29 1.42 1.42 6.29-6.3V16z"></path>
                </svg></span></div>
            </div>
            <div className="card-footer p-4 bg-white w-full h-full rounded-2xl">
                <span className="text-2xl font-bold">{description}</span>
            </div>
        </div>
    );
};


