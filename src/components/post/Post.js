import './post.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faThumbsUp, faHeart, faMessage, faShare, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import UserProfile from "../../assets/user.jpg";

export const Post = ({ postUser }) => {
    const [likes, setLikes] = useState(postUser.like)
    const [comment, setComment] = useState(false)
    const [newComment, setNewComment] = useState(false)
    const [like, setLike] = useState(false)
    const [numComment, setNumComment] = useState(postUser.comment)
    const [share, setShare] = useState('')
  
    const handleInputShare = (e) => {
      setShare(e.target.value)
    }
    const sumLike = (e) => {
        e.preventDefault();
        setLikes(like ? likes - 1 : likes + 1 )
        setLike(!like)
    }

    const sumComment = (e) => {
        e.preventDefault()
        setComment(!comment)
    }

    const sendInputShare = (e) => {
        e.preventDefault()
        setNumComment(numComment + 1)
        setComment(!comment)
        setNewComment(!newComment)
    }

  return (
    <div className='post'>
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src={postUser.img} alt="" />
                    <div className='postData'>
                        <span className='postUserName'>{postUser.name}</span>
                        <span className='postDate'>{postUser.datePost}</span>
                    </div>
                </div>
                <div className='postTopRight'>
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </div>
            </div>
            <div className='postCenter'>
                <span className='postText'>{postUser.textPost}</span>
                <img className='postImg' src={postUser.imgPost} /> 
            </div>
            <div className="postBottomContainer">
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <FontAwesomeIcon icon={faThumbsUp} className="likeIcon text-blue-primary pr-1"/>
                        <FontAwesomeIcon icon={faHeart} className="likeIcon text-red-600 pr-2"/>
                        <span className='postLikeCounter text-base text-gray-500'>{likes} people like it</span>
                    </div>
                    <div className='postBottomRight text-base text-gray-500'>
                        <span className='postCommentText'>{numComment} comments</span>
                    </div>
                </div>
                <div className='postOptions'>
                    <button className={`${like ? 'postOptionReverse' : 'postOption'}`} onClick={sumLike}>
                        <FontAwesomeIcon icon={faThumbsUp} className="likeIcon pr-1"/>
                        I like
                    </button>
                    <button className='postOption' onClick={sumComment}>
                        <FontAwesomeIcon icon={faMessage} className="likeIcon pr-1"/>
                        Comment
                    </button>
                    <div className='postOption'>
                        <FontAwesomeIcon icon={faShare} className="likeIcon pr-1"/>
                        Share
                    </div>
                </div>
                <div className={`${newComment ? 'flex duration-500' : 'hidden duration-500'}`}>
                    <div className='newShare'>
                        <div>
                            <div className='shareTop'>
                                <img className='shareProfileImg' src={ UserProfile } alt=""/>
                                <div className='flex flex-col pt-4'>
                                    <input disabled value={share} onChange={handleInputShare}/>
                                    <div className='flex gap-4 text-xs text-gray-500 '>
                                        <button onClick={sumComment}>Edit</button>
                                        <button>I like</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${comment ? 'flex duration-500' : 'hidden duration-500'}`}>
                    <div className='shareTop'>
                        <img className='shareProfileImg' src={ UserProfile } alt=""/>
                        <input placeholder="What's in your mind Safari" className='shareInput' value={share} onChange={handleInputShare}/>
                    </div>
                    <button className='buttonComment' onClick={sendInputShare}>
                        <div className='bg-white rounded-full w-14 h-14 flex items-center justify-center ml-5 mr-8 text-gray-500 hover:bg-gray-500 hover:text-white duration-300'>
                            <FontAwesomeIcon icon={faPaperPlane} className="text-2xl"/>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
