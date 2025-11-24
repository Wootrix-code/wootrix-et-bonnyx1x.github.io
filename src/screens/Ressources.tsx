import { BsLink } from 'react-icons/bs';

export const Ressources = () => {
    return (
        <div>
            <h1 className='font-extrabold text-3xl mb-4'>Ressources de ma chaine</h1>

            <ul>
                <li className='flex items-center'><BsLink className='mr-3'/><a className='hover:underline' href="https://obsproject.com/fr">Téléchargé obs</a></li>
                <li className='flex items-center'><BsLink className='mr-3'/><a className='hover:underline' href="https://www.youtube.com/watch?v=nAwLnKPM4rk">Regardé notre derniere vidéo</a></li>
            </ul>
        </div>
    )
}