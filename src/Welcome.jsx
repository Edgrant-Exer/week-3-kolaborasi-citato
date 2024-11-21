import React from "react";

const Welcome = () => {
    return (
        <div>
            <div
                className="h-screen w-screen bg-cover bg-center relative"
                style={{
                    backgroundImage: "url('https://picsum.photos/1920/1080')",
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10 m-5 p-5 flex flex-col justify-center h-full text-white">
                    <h1 className="text-4xl font-bold">3 negara. 20+ layanan.</h1>
                    <h1 className="text-4xl font-bold">1 platform on-demand terkemuka.</h1>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
