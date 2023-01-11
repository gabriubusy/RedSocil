import { useState } from 'react'
import { useUser } from '../../hooks/useUser'
import './login.css'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [validate, setValidate] = useState(true)
  const [password, setPassword] = useState('')
  const { validateUser } = useUser()

  const handleEmail = (e) => {
    let value = e.target.value
    setEmail(value) 
  }

  const handlePassword = (e) => {
    let value = e.target.value
    setPassword(value)
  }

  const sendForm = (e) => {
    e.preventDefault()
    const validate = validateUser({email, password})

    setValidate(validate)
  }

  return (
    <>
        <div className="flex justify-center items-center h-[80vh] mb-32">
            <div className="h-96 pt-16 -ml-10 mr-10">
                <div className="flex flex-col">
                    <div className="w-[300px] pb-5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/2560px-Facebook_Logo_%282019%29.svg.png"/>           
                    </div>
                    <div className="text-rale w-[600px]">
                        Facebook helps you connect and share with the people in your life.
                    </div>
                </div>
            </div>
            <div className="text-center ml-20">
                <div className="bg-white w-[480px] rounded-md shadow-md shadow-gray-400">
                    <form className="flex flex-col p-5 text-center justify-center" onSubmit={sendForm}>
                        <input type="email" placeholder="Email address or phone number" className="inputLogin mb-5" value={email} onChange={ handleEmail } />
                        <input type="password" placeholder="Password" className="inputLogin" value={password} onChange={ handlePassword }/>
                        {
                            !validate && (
                                <div className=" border border-[#DF061A] bg-[#FEDFE2] mt-4">
                                    <div className="flex flex-col">
                                        <span className="font-bold">Wrong credentials</span>
                                        <span>Invalid username or password</span>
                                    </div>
                                </div>
                            )
                        }
                        <button className="bg-[#1877F2] text-3xl text-white font-semibold rounded-md mt-5 py-2.5">
                            Log In
                        </button>
                        <span className="py-5 text-[#1877F2] border-b">Forgotten password?</span>
                        <div>
                            <button className="bg-[rgb(66,183,42)] text-xl text-white font-semibold rounded-md mt-5 w-52 py-2.5">
                                Create New Account
                            </button>
                        </div>
                    </form>
                </div>
                <div className="py-5 text-xl">
                    <span className='font-semibold cursor-pointer'>Create a Page</span> for a celebrity, brand or business.
                </div>
            </div>
        </div>
        <div className='bg-white text-gray-500 flex flex-col items-center justify-center'>
            <div className='flex gap-6 border-b py-5'>
                <span className='cursor-pointer'>English (UK)</span>
                <span className='cursor-pointer'>Español (España)</span>
                <span className='cursor-pointer'>العربية</span>
                <span className='cursor-pointer'>中文(简体)</span>
                <span className='cursor-pointer'>Italiano</span>
                <span className='cursor-pointer'>Français (France)</span>
                <span className='cursor-pointer'>Português (Brasil)</span>
                <span className='cursor-pointer'>Deutsch</span>
                <span className='cursor-pointer'>हिन्दी</span>
                <span className='cursor-pointer'>日本語</span>
            </div>
            <div className='flex gap-4 w-9/12 flex-wrap justify-center'>
                <span className='cursor-pointer'>Sign Up</span>
                <span className='cursor-pointer'>Log in</span>
                <span className='cursor-pointer'>Messenger</span>
                <span className='cursor-pointer'>Facebook Lite</span>
                <span className='cursor-pointer'>Watch</span>
                <span className='cursor-pointer'>Places</span>
                <span className='cursor-pointer'>Games</span>
                <span className='cursor-pointer'>Marketplace</span>
                <span className='cursor-pointer'>Meta Pay</span>
                <span className='cursor-pointer'>Oculus</span>
                <span className='cursor-pointer'>Portal</span>
                <span className='cursor-pointer'>Instagram</span>
                <span className='cursor-pointer'>Bulletin</span>
                <span className='cursor-pointer'>Fundraisers</span>
                <span className='cursor-pointer'>Services</span>
                <span className='cursor-pointer'>Voting Information Centre</span>
                <span className='cursor-pointer'>Privacy Policy</span>
                <span className='cursor-pointer'>Privacy Centre</span>
                <span className='cursor-pointer'>About</span>
                <span className='cursor-pointer'>Create Page</span>
                <span className='cursor-pointer'>Developers</span>
                <span className='cursor-pointer'>Create ad</span>
                <span className='cursor-pointer'>Careers</span>
                <span className='cursor-pointer'>Cookies</span>
                <span className='cursor-pointer'>AdChoices</span>
                <span className='cursor-pointer'>Terms</span>
                <span className='cursor-pointer'>Help</span>
                <span className='cursor-pointer'>Contact uploading and non-users</span>
                <span className='cursor-pointer'>Settings</span>
                <span className='cursor-pointer'>Activity log</span>
            </div>
            <div className='text-sky-800 py-5'>
                Meta © 2023
            </div>
        </div>
    </>
  )
}
