import SongCard from "./components/SongCard";
import SushiTicket from "./components/SushiTicket.tsx";

export default function App() {
    return (
        <div className="min-h-screen  text-white container mx-auto justify-self-center">
            <header className="p-6 text-2xl font-bold">🎵 Nuestro Spoty</header>
            <main className="p-6">
                <h1 className="text-4xl font-bold mb-8">Pedacitos de lo nuestro</h1>
                <p className="text-neutral-400"> Esta lista de canciones destaca momentos especiales que hemos
                    compartido y recuerdos personales que han moldeado mi perspectiva de nuestra relación. </p>
                <p className="text-neutral-400"> Cada canción guarda una parte de nuestra historia. </p>
                <p className="text-neutral-400 mb-8"> Al ver "Te amo.exe", recordé lo hermoso que es crear estos
                    detalles. Expresar mis sentimientos así es único, aunque a veces me he frenado por miedo al rechazo
                    o a parecer insignificante. </p>

                <SongCard/>
                <SushiTicket/>
            </main>
            <footer className="p-6 text-center text-neutral-400">
                <p>Hecho con ❤️ para mi bonita</p>
            </footer>
        </div>
    );
}
