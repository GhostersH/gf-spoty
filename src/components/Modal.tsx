import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: {
        title: string;
        description: string;
        artist: string;
        videoId: string;
    } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, song }) => {
    // Cerrar modal al presionar ESC
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && isOpen) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]);

    // Si el modal no está abierto, no se renderiza nada
    if (!isOpen || !song) return null;

    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose(); // Cerrar modal al hacer clic fuera del contenido
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={handleOverlayClick} // Detecta el clic en el fondo
        >
            <div className="bg-neutral-900 text-white rounded-lg p-6 shadow-lg max-w-lg w-full relative">
                {/* Header del modal */}
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{song.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-neutral-400 hover:text-white text-2xl"
                        aria-label="Cerrar"
                    >
                        <FaTimes/>
                    </button>
                </div>
                {/* Artista */}
                <p className="text-neutral-400 mt-2">Artista: {song.artist}</p>
                <div className="mt-4">
                    <p>{song.description}</p>
                    <iframe
                        className="w-full h-64 rounded-lg"
                        src={`https://www.youtube.com/embed/${song.videoId}`}
                        title={song.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Modal;
