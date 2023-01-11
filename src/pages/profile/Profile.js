import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import UserProfile from "../../assets/user.jpg"

import './profile.css'
import { useState } from "react";

export const Profile = () => {
  const [picture, setPicture] = useState([])

  const onChangePicture = (e) => {
    setPicture([...picture, URL.createObjectURL(e.target.files[0])]);
};
  return (
    <div className="">
      <div className="imgContainer">
          <div className='w-9/12 rounded-b-2xl relative z-0 '>
            <img src={picture.length ? picture : 'https://cnnespanol.cnn.com/wp-content/uploads/2022/11/ronaldo-accuses-manchester-united-of-betrayal.jpeg?quality=100&strip=info'} className='imgSize rounded-b-2xl'/>
            <div className='file-select w-full absolute flex justify-end items-end top-[385px]'>
              <div className="border border-conexoo-primary relative mb-4 mr-6 rounded-lg px-2 py-2 flex items-center justify-center bg-white overflow-hidden font-semibold">
                <FontAwesomeIcon icon={ faCamera } className="pr-2"/>
                Edit profile photo
                <div className="absolute rounded-full h-full w-full top-0 left-0 flex justify-center items-center opacity-0 text-white x transition-all duration-500">
                    <label className="file-select w-full p-14 cursor-pointer">
                        <input onChange={ onChangePicture } accept="image/x-png,image/gif,image/jpeg" type="file" className="cursor-pointer" />    
                    </label>
                </div>
              </div>
            </div>
            <div className="absolute top-[395px] ml-10 flex items-center">
              <div className="flex overflow-hidden rounded-full items-center  justify-center w-48 h-48  z-50  border-4">
                <img src={UserProfile} alt="UserProfile" className="topbarImg" />
              </div> 
              <div className="flex flex-col pl-2">
                <span className="font-bold text-3xl ">Cristiano Ronaldo</span>
                <span className="font-semibold text-xl text-slate-500">825 amigos</span>
              </div>
            </div>
          </div>
      </div>  
    </div>
  )
}
