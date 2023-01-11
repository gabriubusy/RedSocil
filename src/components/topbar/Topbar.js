import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faTh } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { OptionsBar } from "../panelItems/OptionsBar"
import UserProfile from "../../assets/user.jpg"

import "./topbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { PanelMenu } from "../panelItems/PanelMenu";

export const Topbar = () => {
  const [panelMenu, setPanelMenu] = useState(false)

  const showPanelMenu =(e) => {
    e.preventDefault()
    setPanelMenu(!panelMenu)
  }

  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <Link exact="true" to="/home" >
                <FontAwesomeIcon icon={faFacebook} className="pl-5 text-blue-primary text-5xl left-0" />
            </Link>
            <div className="topbarSearch">
                <div className="searchbar">
                    <FontAwesomeIcon icon={faSearch} className="searchIcon left-0" />
                    <input type="text" placeholder="Search in Facebook" className="searchInput py-2.5 pl-14 pr-5 w-72 bg-gray-200 text-xl text-gray-500" />
                </div> 
            </div>
        </div>
        <div className="topbarCenter my-2">
            <OptionsBar />
        </div>
        <div className="topbarRight">
           <div className="flex items-center">
                <div className="topbarIcons pr-3">
                    <div className='relative'>
                        <div  className=' bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full'>
                            <FontAwesomeIcon className='friendActiveImg w-5' icon={faTh}/>
                        </div>
                        <div>
                            <div className='absolute h-6 w-6 rounded-full bg-red-600 bottom-7 left-8 flex items-center justify-center text-white'>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div  className='bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full'>
                            <FontAwesomeIcon className='friendActiveImg w-5' icon={faFacebookMessenger}/>
                        </div>
                        <div>
                            <div className='absolute h-6 w-6 rounded-full bg-red-600 bottom-7 left-8 flex items-center justify-center text-white'>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                    <div className='relative'>
                        <div  className='bg-gray-200 w-12 h-12 flex items-center justify-center rounded-full'>
                            <FontAwesomeIcon className='friendActiveImg w-4' icon={faBell}/>
                        </div>
                        <div>
                            <div className='absolute h-6 w-6 rounded-full bg-red-600 bottom-7 left-8 flex items-center justify-center text-white'>
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={ showPanelMenu } className="topbarImgContainer">
                    <img src={UserProfile} alt="UserProfile" className="topbarImg" />
                </button>
                </div>
                {
                     panelMenu && <PanelMenu />
                }
        </div>
    </div>
  )
}
