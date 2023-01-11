import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faVideoCamera, faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import { userFriends } from "../../config/userFriend";

import "./friendBarActive.css";

export const FriendBarActive = () => {
  return (
    <div className='friendBar'>
        <div className='textPrimaryContainer'>
            <div className='font-semibold'>
                <span>Contacts</span>
            </div>
            <div className='flex gap-4'>
                <FontAwesomeIcon icon={faVideoCamera} />
                <FontAwesomeIcon icon={faSearch} />
                <FontAwesomeIcon icon={faEllipsisH} />
            </div>
        </div>
        <div className='mt-14'>
            <div className='friendActiveContainer'>
                <div>
                    <ul className='friendActiveList'>
                        {
                            userFriends.map( item => (
                                item.active && (
                                    <li key={item.id}>
                                        <div className='friendActiveContainer my-2 hover:bg-[#E9ECF0] duration-300 cursor-pointer'>
                                            <div className='relative'>
                                                <div  className='friendActive'>
                                                    <img className='friendActiveImg' src={item.img} alt=""/>
                                                </div>
                                                <div>
                                                    <span className='absolute h-4 w-4 rounded-full bg-green-active top-10 right-3'></span>
                                                </div>
                                            </div>
                                            <span className='friendActiveName'>{item.name}</span>
                                        </div>
                                    </li>
                                )
                                
                            ))
                        }
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
