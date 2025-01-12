import React, { useState } from "react";
import Modal from "./Modal";

const SongCard: React.FC = () => {
    const [selectedSong, setSelectedSong] = useState<{
        title: string;
        artist: string;
        videoId: string;
    } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const songs = [
        { title: "Bohemian Rhapsody", artist: "Queen", videoId: "fJ9rUzIMcZQ" },
        { title: "Imagine", artist: "John Lennon", videoId: "YkgkThdzX-8" },
        { title: "Billie Jean", artist: "Michael Jackson", videoId: "Zi_XLOBDo_Y" },
        { title: "Like a Rolling Stone", artist: "Bob Dylan", videoId: "IwOfCgkyEj0" },
        { title: "Smells Like Teen Spirit", artist: "Nirvana", videoId: "hTWKbfoikeg" },
        { title: "Purple Rain", artist: "Prince", videoId: "TvnYmWpD_T8" },
    ];

    const handleCardClick = (song: { title: string; artist: string; videoId: string }) => {
        setSelectedSong(song);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSong(null);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {songs.map((song, index) => (
                <div
                    key={index}
                    onClick={() => handleCardClick(song)}
                    className="bg-neutral-800 text-white rounded-lg p-4 hover:bg-neutral-700 transition-colors duration-300 cursor-pointer shadow-lg"
                >
                    <div className="relative">
                        <div className="rounded-lg w-full h-48 object-cover bg-cover bg-center" style={{ backgroundImage: `url(https://i.ytimg.com/vi/${song.videoId}/hqdefault.jpg)` }}></div>
                    </div>
                    <div className="mt-4">
                        <h2 className="font-bold text-lg truncate">{song.title}</h2>
                        <p className="text-sm text-neutral-400">{song.artist}</p>
                    </div>
                </div>
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal} song={selectedSong} />
        </div>
    );
};

export default SongCard;
