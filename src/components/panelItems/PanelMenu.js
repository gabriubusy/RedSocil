import './panelMenu.css'
import UserProfile from "../../assets/user.jpg"
import { Link } from "react-router-dom";

export const PanelMenu = () => {
  return (
    <div className="bg-gray-primary absolute shadow-md shadow-gray-secondary w-[450px] top-16 rounded-md right-10">
        <div className=" p-2 bg-white my-2 mx-6 rounded-md shadow-md shadow-gray-secondary font-semibold">
            <Link exact="true" to="/profile" className="flex items-center hover:bg-gray-primary text-xl cursor-pointer rounded-md py-4 px-2">
                <div className="panelMenuImgContainer">
                    <img src={UserProfile} alt="UserProfile" className="topbarImg" />
                </div>
                <span>Cristiano Ronaldo</span>
            </Link>
            <div className="border my-2"></div>
            <div className="flex justify-between items-center hover:bg-gray-primary p-2 rounded-md cursor-pointer">
                <span className="text-blue-primary my-2 text-xl">See all profiles</span>
                <div className="bg-red-600 w-8 h-8 rounded-full flex justify-center items-center font-semibold text-white">
                    <span>10</span>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-between mx-5 hover:bg-[#EAEAEA] cursor-pointer rounded-md my-2.5 py-2">
            <div className="flex items-center text-lg font-semibold gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-settings" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
                <span>Settings and Privacy</span>
            </div>
            <div className="border-t-4 border-r-4 border-gray-secondary w-6 h-6 rotate-45 mr-2"></div>
        </div>
        <div className="flex items-center justify-between mx-5 hover:bg-[#EAEAEA] cursor-pointer rounded-md my-2.5 py-2">
            <div className="flex items-center text-lg font-semibold gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-help" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <circle cx="12" cy="12" r="9" />
                    <line x1="12" y1="17" x2="12" y2="17.01" />
                    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                </svg>
                <span>Help and Technical Support </span>
            </div>
            <div className="border-t-4 border-r-4 border-gray-secondary w-6 h-6 rotate-45 mr-2"></div>
        </div>
        <div className="flex items-center justify-between mx-5 hover:bg-[#EAEAEA] cursor-pointer rounded-md my-2.5 py-2">
            <div className="flex items-center text-lg font-semibold gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-moon" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
                </svg>
                <span>Screen</span>
            </div>
            <div className="border-t-4 border-r-4 border-gray-secondary w-6 h-6 rotate-45 mr-2"></div>
        </div>
        <div className="flex items-center justify-between mx-5 hover:bg-[#EAEAEA] cursor-pointer rounded-md my-2.5 py-2">
            <div className="flex items-center text-lg font-semibold gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-report" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
                    <line x1="12" y1="8" x2="12" y2="11" />
                    <line x1="12" y1="14" x2="12" y2="14.01" />
                </svg>  
                <span>Send Comments</span>
            </div>
        </div>
        <div className="flex items-center justify-between mx-5 hover:bg-[#EAEAEA] cursor-pointer rounded-md my-2.5 py-2">
            <div className="flex items-center text-lg font-semibold gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                </svg>  
                <span >Logout</span>
            </div>
        </div>
        <div className="px-4 text-center flex flex-col pb-4">
            <span>Privacidad  · Condiciones  · Publicidad  · Opciones de anuncios   · Cookies </span>
            <span className="text-blue-800">Meta © 2023</span>
        </div>
    </div>
  )
}
