import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const useUser = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)

    const validateUser = (dataForm) => {
        const data = {
            email: 'admin@gmail.com',
            password: '1234'
        }
        let validate = []

        for(let index in data) {
            validate.push(data[index] == dataForm[index])
        }

        if(validate[0] && validate[1]) addUser(dataForm)
        else return false
    }

    const addUser = (data) => {
        localStorage.setItem('userFa', JSON.stringify(data))
        navigate('/home')
    }

    const getUser = () => {
        const user = JSON.parse(localStorage.getItem('userFa'))

        return user
    }

    return {
        loading,
        validateUser,
        getUser
    }
}