import React, { useState } from 'react'
import styled from 'styled-components'

import { http } from '../config/http'

interface User {
    firstName: string,
    lastName: string,
    participation: number
}

const Header: React.FC = () => {
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [participation, setParticipation] = useState<number>(0)
    const [showModal, setShowModal] = useState<boolean>(false)
    const [alertMsg, setAlertMsg] = useState<any>({})

    const submit = async (user: User) => {
        try {
            await http.post('/users', user)
            setAlertMsg('User participant saved!')
            setShowModal(true)
        } catch (error) {
            const err = { code: error?.response?.data?.code ?? 500, message: error?.response?.data?.error?.name ?? 'Connection Refused' }
            setAlertMsg(err)
            setShowModal(true)
        }
    }

    const renderModal = (modal: boolean, alertMsg: string) => {
        setShowModal(false)
        return console.log(alertMsg)
    }

    return (
        <Wrapper>
            <div className="input">
                <input type="text" placeholder="Firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>  
            <div className="input">
                <input type="text" placeholder="Lastname" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div className="input">
                <input type="number" placeholder="Participation" value={participation} onChange={(e) => setParticipation(+e.target.value)}/>
            </div>
            <div className="btn">
                <button type="submit" onClick={() => submit({firstName, lastName, participation} as User)}>SEND</button>
            </div>
            
            { showModal && renderModal(showModal, alertMsg) }
        </Wrapper>
    )
}

const Wrapper = styled.header`
    display: flex;
    background-color: #00B8E2;
    padding: 40px 300px;
    width: auto;
    flex-flow: row;
    justify-content: space-around;
    flex-wrap: wrap;

    .input {
        flex: 2;

        input {
            width: 170px;
            padding: 10px 0;
            outline: 0;
            font-size: 14px;
            text-indent: 10px;
        }
    }

    .btn {
        flex: 1;

        button {
            background: transparent;
            border: 1px solid #fff;
            color: #000;
            padding: 12px 0;
            width: 120px;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            outline: none;
            cursor: pointer;
        }
    }
`

export default Header