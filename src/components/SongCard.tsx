import React, {useState} from "react";
import Modal from "./Modal";
import {FaPlay} from "react-icons/fa";

const SongCard: React.FC = () => {
    const [selectedSong, setSelectedSong] = useState<{
        title: string;
        description: string; // Descripción como obligatoria
        artist: string;
        videoId: string;
    } | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const songs = [
        {
            title: "Akureyri",
            artist: "Aitana, Sebastián Yatra",
            description: "Esta canción me hace pensar en lo especial que eres para mí. Aunque al principio no era mi estilo, me conquistó porque tú me la mostraste. La letra y su significado se han vuelto parte de nuestra historia, como si cada verso hablara de nosotros.",
            videoId: "2FOYmlLW1bw"
        },
        {
            title: "Sanctuary",
            artist: "Joji",
            description: "Cuando empezamos a conocernos, esta canción era como un refugio que me hacía soñar contigo. Me imaginaba abrazándote y compartiendo este momento, porque refleja la sensación de seguridad y calidez que siento cuando estoy a tu lado.",
            videoId: "YWN81V7ojOE"
        },
        {
            title: "Thank You",
            artist: "Tesla",
            description: "Es una canción clásica y llena de amor. Este cover de Led Zeppelin me recuerda cuánto agradezco tu existencia en mi vida. Sueño con que suene en nuestra boda, porque sus palabras expresan lo profundo de lo que siento por ti.",
            videoId: "-rRIiYbf8t8"
        },
        {
            title: "LOVE",
            artist: "Kendrick Lamar",
            description: "Aunque no soy muy fan del artista, me gusta descubrir cosas nuevas contigo. Esta canción representa ese amor fresco, inesperado, que me recuerda a ti y a la emoción de compartir cada pequeño descubrimiento juntos.",
            videoId: "ox7RsX1Ee34"
        },
        {
            title: "Only You, And You Alone",
            artist: "The Platters",
            description: "Una canción atemporal que siempre me ha acompañado. Me gusta imaginar cómo sería bailar contigo, perderme en el momento, y sentir que somos los únicos en el mundo al ritmo de esta melodía.",
            videoId: "rAUJSc6unAg"
        },
        {
            title: "Ciudad de las Luces",
            artist: "LATIN MAFIA",
            description: "Es una canción que significa mucho porque viene de ti. Me encanta la manera en que haces que cada canción se convierta en una película en mi mente. Invento historias en las que somos protagonistas de un futuro que aspiro a construir contigo.",
            videoId: "K5jlSC1mKhs"
        },
        {
            title: "I Wanna Be Yours",
            artist: "Arctic Monkeys",
            description: "Esta canción es pura pasión, una declaración intensa y directa. Me hace pensar en todo lo que quiero ser para ti y lo mucho que me haces sentir.",
            videoId: "nyuo9-OjNNg"
        },
        {
            title: "The Other Side",
            artist: "Ruelle",
            description: "Es una balada melancólica, pero tus canciones, aunque tristes, siempre me han traído alegría. Solías enviarme muchas, y cada una se sentía como un mensaje de amor escondido en melodías. Espero que nunca perdamos ese lazo musical que nos une.",
            videoId: "rJk7RGtWgP4"
        },
        {
            title: "Next To Me",
            artist: "Imagine Dragons",
            description: "Es una canción para llorar y recordar cuánto te amo. Cada vez que la escucho, siento que mi corazón se llena de gratitud por tenerte cerca, porque estar contigo es el mayor regalo de todos.",
            videoId: "Txlk7PiHaGk"
        },
        {
            title: "Miss Atomic Bomb",
            artist: "The Killers",
            description: "Esta canción es muy personal. En nuestros primeros días, dudaba si abrir mi corazón o quedarme estancado en mis miedos. Pero tú me diste el valor para ser yo mismo y no quedarme perdido. Gracias por ser la constante que me rescata en los momentos más difíciles de mi vida.",
            videoId: "Qok9Ialei4c"
        }
    ];

    const handleCardClick = (song: { title: string; artist: string; description: string; videoId: string }) => {
        setSelectedSong(song);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedSong(null);
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {songs.map((song) => (
                <div
                    key={song.videoId}  // Se usa `videoId` como clave única
                    className="bg-neutral-800 text-white rounded-lg overflow-hidden hover:bg-neutral-700 transform transition duration-300 cursor-pointer shadow-lg relative"
                    onClick={() => handleCardClick(song)}
                >
                    <div className="relative w-full h-40">
                        <img
                            className="w-full h-full object-cover rounded-t-lg"
                            src={`https://i.ytimg.com/vi/${song.videoId}/hqdefault.jpg`}
                            alt={song.title}
                        />
                        <div className="absolute bottom-2 right-2 bg-green-500 p-3 rounded-full shadow-lg">
                            <FaPlay className="text-white text-lg"/>
                        </div>
                    </div>

                    <div className="p-4">
                        <h2 className="font-semibold text-base truncate">{song.title}</h2>
                        <p className="text-sm text-neutral-400 truncate">{song.artist}</p>
                    </div>
                </div>
            ))}
            <Modal isOpen={isModalOpen} onClose={closeModal} song={selectedSong}/>
        </div>
    );
};

export default SongCard;
