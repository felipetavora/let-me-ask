import { FormEvent, useState } from 'react';
import illustrationImg from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {

    const history = useHistory();
    const { user } = useAuth();
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(e: FormEvent) {
        e.preventDefault();
        if (newRoom.trim() === '') {
            alert('Invalid room name.');
            return;
        }
        const roomRef = database.ref('rooms');
        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id
        });
        history.push(`/rooms/${firebaseRoom.key}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration question and answers" />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={e => setNewRoom(e.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}