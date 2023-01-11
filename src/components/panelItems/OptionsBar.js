import { NavLink, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUsers } from '@fortawesome/free-solid-svg-icons'

import "./optionsBar.css";

export const OptionsBar = () => {
  const { pathname } = useLocation()

  return (
    <>
        <NavLink className={({ isActive }) => isActive ? 'text-blue-primary px-3 border-b-4 border-blue-primary' : 'text-gray-toopbar px-3 text-2xl hover:bg-slate-200 duration-300'} exact="true" to="/home">
            <div className={`topbarCenterIconContainer ${pathname.includes('home') ? 'py-[18px]' : 'py-3'}`}>
                <FontAwesomeIcon icon={faHome} className="" />
            </div>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-blue-primary px-3 border-b-4 border-blue-primary' : 'text-gray-toopbar px-3 text-2xl hover:bg-slate-200 duration-300 rounded-lg h-full'} exact="true" to="/wath">
            <div className="topbarCenterIconContainer py-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 icon icon-tabler icon-tabler-device-analytics" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={ pathname.includes('wath') ? '#0978FD' : "#2c3e50" } fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="3" y="4" width="18" height="12" rx="1" />
                    <line x1="7" y1="20" x2="17" y2="20" />
                    <line x1="9" y1="16" x2="9" y2="20" />
                    <line x1="15" y1="16" x2="15" y2="20" />
                    <path d="M8 12l3 -3l2 2l3 -3" />
                </svg>
            </div>
        </NavLink>    
        <NavLink className={({ isActive }) => isActive ? 'text-blue-primary px-3 border-b-4 border-blue-primary' : 'text-gray-toopbar px-3 text-2xl hover:bg-slate-200 duration-300 rounded-lg h-full'} exact="true" to="/building">
            <div className="topbarCenterIconContainer py-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 icon icon-tabler icon-tabler-building-store" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={ pathname.includes('building') ? '#0978FD' : "#2c3e50" } fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <line x1="3" y1="21" x2="21" y2="21" />
                    <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                    <line x1="5" y1="21" x2="5" y2="10.85" />
                    <line x1="19" y1="21" x2="19" y2="10.85" />
                    <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                </svg>
            </div>
        </NavLink> 
        <NavLink className={({ isActive }) => isActive ? 'text-blue-primary px-3 border-b-4 border-blue-primary' : 'text-gray-toopbar px-3 text-2xl hover:bg-slate-200 duration-300 rounded-lg'} exact="true" to="/group">
            <div className={`topbarCenterIconContainer ${pathname.includes('group') ? 'py-[18px]' : 'py-3'}`}>
                <FontAwesomeIcon icon={faUsers} className="" />
            </div>
        </NavLink>
        <NavLink className={({ isActive }) => isActive ? 'text-blue-primary border-b-4 px-3 border-blue-primary' : 'text-gray-toopbar px-3 text-2xl hover:bg-slate-200 duration-300 rounded-lg h-full'} exact="true" to="/games">
            <div className="topbarCenterIconContainer py-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-board" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={ pathname.includes('games') ? '#0978FD' : "#2c3e50" } fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                    <path d="M4 9h8" />
                    <path d="M12 15h8" />
                    <path d="M12 4v16" />
                </svg>
            </div>
        </NavLink> 
    </>
  )
}
