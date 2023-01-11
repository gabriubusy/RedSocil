import { FriendBarActive } from '../panelItems/FriendBarActive'
import './rightbar.css'

export const Rightbar = () => {
  return (
    <div className='flex justify-end mr-12'>
        <div className='rightbar'> 
            <div className='righbarWrapper'>
                <div className='birthdayContainer'>
                    <span className='text-xl font-bold text-gray-500'>Birthday</span>
                    <div className='birthdayInfo'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gift" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ED2004" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <rect x="3" y="8" width="18" height="4" rx="1" />
                                <line x1="12" y1="8" x2="12" y2="21" />
                                <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
                                <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
                            </svg>
                        </div>
                        <span className='birthdayText'>
                            <b>Sergio Ramos</b> and <b>3 other friends</b> have a birthday today
                        </span>
                    </div>
                </div>
                <div className='border-b mt-4'></div>
                <div className='birthdayContainer '>
                    <span className='text-xl font-bold text-gray-500'>Friend requests</span>
                    <div className='birthdayInfo'>
                        <div className=''>
                            <div className='flex items-center pb-2.5'>
                                <div className='postTopLeft'>
                                    <img className='postProfileImg' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltfa502e556a89d51c/60da7531ed93bb0fb1956401/461d0dd99d7e159159e36cf441a118102dabab89.jpg" alt="" />
                                </div>
                                <div className='pl-4'>
                                    <span className='font-semibold'>Brahin Diaz</span>
                                    <div className='flex items-center'>
                                        <div className='rightbarFriend'>
                                            <img className='rightbarFriendImg' src="https://img.olympicchannel.com/images/image/private/t_social_share_thumb/f_auto/primary/wfrhxc0kh2vvq77sonki" alt="" />
                                        </div>
                                        <div className='rightbarFriend'>
                                            <img className='rightbarFriendImg' src="https://fotografias.lasexta.com/clipping/cmsimages01/2022/10/15/038A15A5-CE0A-4BD0-88C7-DF3FAA43D123/thibaut-courtois-real-madrid_103.jpg?crop=1383,1037,x169,y0&width=1200&height=900&optimize=low&format=webply" alt="" />
                                        </div>
                                        <span className='text-xs text-gray-500'>4 friends in common</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='bg-blue-primary text-white p-2 w-40 rounded-xl font-semibold'>Confirm</button>
                                <button className='border duration-300 ml-2 p-2 w-40 rounded-xl font-semibold'>Cancel</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='border-b my-4'></div>
                <FriendBarActive />
            </div>
        </div>
    </div>
  )
}
