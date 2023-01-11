import { Post } from '../post/Post'
import { Share } from '../share/Share'
import { userFriends } from "../../config/userFriend";
import './feed.css'

export const Feed = () => {
  return (
    <div className='feed'>
        <div className='feedWrapper'>
            <Share /> 
            {
                userFriends.map(item => <Post postUser={item} key={item.id} />)
            }
        </div>
    </div>
  )
}
