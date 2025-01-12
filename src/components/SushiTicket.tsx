import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const SushiTicket: React.FC = () => {
    const [isRedeemed, setIsRedeemed] = useState(false);

    const handleRedeem = () => {
        setIsRedeemed(true);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            {!isRedeemed ? (
                <div
                    onClick={handleRedeem}
                    className="border-2 border-orange-500 rounded-xl shadow-lg p-6 bg-white cursor-pointer hover:shadow-2xl transition-shadow duration-300"
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        TICKET VÁLIDO PARA UN SUSHI
                    </h2>
                    <img
                        src="https://scontent.fuio5-1.fna.fbcdn.net/v/t39.30808-6/313964911_5505792376169233_2425471665725373524_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=aC5o56rbNJ4Q7kNvgFmvw9X&_nc_oc=AdjdaTeeCi2DsGIIax-KwWLuo86yLYnEr15Csr-APR4_XDuNvc6Lx06RcRkcvL-2U5E&_nc_zt=23&_nc_ht=scontent.fuio5-1.fna&_nc_gid=ANKl3rz15fQrpXhbXVEzCtD&oh=00_AYDjDTFoX2vW6NWZfIHc3qHV3F9-sDe5tuEdQ588ksFI7Q&oe=678A1537"
                        alt="Ticket Sushi"
                        className=" w-52 s object-cover rounded-lg place-self-center"
                    />
                    <p className="text-sm text-gray-500 mt-3 text-center">Haz click para canjear</p>
                </div>
            ) : (
                <div className="text-center">
                    <FaCheckCircle className="text-green-500 text-5xl mb-4 text-center" />
                    <h2 className="text-2xl font-bold text-green-600">
                        ¡Felicidades, ya lo canjeaste! 🎉
                    </h2>
                </div>
            )}
        </div>
    );
};

export default SushiTicket;
