import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    song: {
        title: string;
        artist: string;
        videoId: string;
    } | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, song }) => {
    if (!isOpen || !song) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-neutral-900 text-white rounded-lg p-6 shadow-lg max-w-lg w-full">
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{song.title}</h2>
                    <button
                        onClick={onClose}
                        className="text-neutral-400 hover:text-white text-2xl font-bold"
                    >
                        ✖
                    </button>
                </div>
                <p className="text-neutral-400 mt-2">Artista: {song.artist}</p>
                <div className="mt-4">
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
