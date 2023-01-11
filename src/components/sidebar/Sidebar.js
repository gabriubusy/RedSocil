import './sidebar.css'
// import friend1 from "../../assets/friend1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserFriends, faAngleDown } from "@fortawesome/free-solid-svg-icons";
// import { userFriends } from "../../config/userFriend";
import UserProfile from "../../assets/user.jpg"
import { useState } from 'react';

export const Sidebar = () => {
  const [showMore, setShowMore] = useState(false)
  const handleShowMore = (e) => {
    e.preventDefault();
    setShowMore(!showMore)
  }

  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <ul className='sidebarList border-b '>
                <li className='sidebarImgProfile'>
                    <div className="topbarImgContainer">
                        <img src={UserProfile} alt="UserProfile" className="topbarImg" />
                    </div>
                    <span className='sidebarListItemText'>Cristiano Ronaldo</span>
                    {/* <FontAwesomeIcon icon={faRss} className="sidebarIcon"/>
                    <span className='sidebarListItemText'>Feed</span> */}
                </li>
                <li className='sidebarListItem'>
                    <FontAwesomeIcon icon={faUserFriends} className="sidebarIcon text-3xl pl-1 pr-4 text-blue-primary"/>
                    <span className='sidebarListItemText'>Friends</span>
                </li>
                <li className='sidebarListItem'>
                    <FontAwesomeIcon icon={faClock} className="sidebarIcon text-3xl pl-1 pr-4 text-blue-primary"/>
                    <span className='sidebarListItemText'>Recents</span>
                </li>
                <li className='sidebarListItem'>
                    <div className='text-transparent bg-gradient-to-r from-blue-600 to-[#1AF1A9] w-10 h-10 rounded-full flex justify-center items-center mr-4'>
                        <FontAwesomeIcon icon={faUserFriends} className="sidebarIcon text-xl text-white"/>
                    </div>
                    <span className='sidebarListItemText'>Groups</span>
                </li>
                <li className='sidebarListItem'>
                    <div className='text-transparent bg-gradient-to-r from-blue-600 to-[#1AF11D] w-10 h-10 rounded-full flex justify-center items-center mr-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 icon icon-tabler icon-tabler-building-store" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke='#ffffff' fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <line x1="3" y1="21" x2="21" y2="21" />
                            <path d="M3 7v1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1m0 1a3 3 0 0 0 6 0v-1h-18l2 -4h14l2 4" />
                            <line x1="5" y1="21" x2="5" y2="10.85" />
                            <line x1="19" y1="21" x2="19" y2="10.85" />
                            <path d="M9 21v-4a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v4" />
                        </svg>
                    </div>
                    <span className='sidebarListItemText'>Marketplace</span>
                </li>
                <li className='sidebarListItem'>
                    <div className="text-transparent bg-blue-primary w-10 h-10 rounded-full flex justify-center items-center mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 icon icon-tabler icon-tabler-device-analytics" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke='#ffffff' fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <rect x="3" y="4" width="18" height="12" rx="1" />
                            <line x1="7" y1="20" x2="17" y2="20" />
                            <line x1="9" y1="16" x2="9" y2="20" />
                            <line x1="15" y1="16" x2="15" y2="20" />
                            <path d="M8 12l3 -3l2 2l3 -3" />
                        </svg>
                    </div>
                    <span className='sidebarListItemText'>Watch</span>
                </li>
                <li>
                    <button onClick={handleShowMore} className='sidebarListItem w-full'>
                        <div className={`bg-gray-300 w-10 h-10 rounded-full flex justify-center items-center mr-4 `}>
                            <FontAwesomeIcon icon={faAngleDown} className={`sidebarIcon text-xl duration-300 ${showMore && 'rotate-180' }`}/>
                        </div>
                        <span className='sidebarListItemText'>Show More</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  )
}
