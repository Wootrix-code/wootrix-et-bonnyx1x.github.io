import { FaYoutube, FaDiscord} from "react-icons/fa"

export const SocialsLink = () => {
    return (
        <div>
            <h3 className='text-2xl font-extrabold mt-5'>Mes Réseau Sociaux</h3>
            <ul>
                <li className='flex items-center'><FaYoutube className='mr-3'/><a className='hover:text-[#F54927]' href="https://www.youtube.com/@wootrix_ytb.Bonnyx1x">Ma Chaine</a></li>
                <li className='flex items-center'><FaDiscord className='mr-3'/><a className='hover:text-[#F54927]' href="https://discord.gg/dpPBU354jg">Discord</a></li>
            </ul>

        </div>
    )
}