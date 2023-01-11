
import './share.css'
import { useState } from "react";
import UserProfile from "../../assets/user.jpg";

export const Share = () => {
  const [share, setShare] = useState('')
  
  const handleInputShare = (e) => {
    setShare(e.target.value)
  }
  return (
    <div className={`share duration-500 ${share.length > 0 ? ' h-[230px]' : ' h-[170px]'} `} >
        <div className='shareWrapper'>
            <div className='shareTop'>
                <img className='shareProfileImg' src={ UserProfile } alt=""/>
                <input placeholder="What's in your mind Safari" className='shareInput' value={share} onChange={handleInputShare}/>
            </div>
            <div className='shareBottom'>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-video-plus" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F81A1A" fill="none" strokeLinecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z" />
                                <rect x="3" y="6" width="12" height="12" rx="2" />
                                <line x1="7" y1="12" x2="11" y2="12" />
                                <line x1="9" y1="10" x2="9" y2="14" />
                            </svg>
                        </div>
                        <span className='shareOptionText'>Live Video</span>
                    </div>
                </div>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#21CB16" fill="none" strokeLinecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <line x1="15" y1="8" x2="15.01" y2="8" />
                                <rect x="4" y="4" width="16" height="16" rx="3" />
                                <path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
                                <path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
                            </svg>
                        </div>
                        <span className='shareOptionText'>Photo/Video</span>
                    </div>
                </div>
                <div className='shareOptions'>
                    <div className='shareOption'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-happy" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#F8D303" fill="none" strokeLinecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="12" r="9" />
                                <line x1="9" y1="9" x2="9.01" y2="9" />
                                <line x1="15" y1="9" x2="15.01" y2="9" />
                                <path d="M8 13a4 4 0 1 0 8 0m0 0h-8" />
                            </svg>
                        </div>
                        <span className='shareOptionText'>Sentiment</span>
                    </div>
                </div>
            </div>
            <div className={`shareButtonContainer ${share.length > 0 ? 'duration-500' : 'hidden duration-500'}`}>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div >
  )
}
