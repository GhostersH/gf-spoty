import SongCard from "./components/SongCard";

export default function App() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <header className="p-6 text-2xl font-bold">🎵 Mi Spotify</header>
            <main className="p-6">
                <h1 className="text-4xl font-bold mb-8">Canciones Populares</h1>
                <SongCard />
            </main>
            <footer className="p-6 text-center text-neutral-400">
                <p>Hecho con ❤️ para una experiencia tipo Spotify</p>
            </footer>
        </div>
    );
}
