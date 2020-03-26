import React from 'react'
import styled from 'styled-components'

interface User {
    _id: string,
    firstName: string,
    lastName: string,
    participation: number
}

interface TableProps {
    users: User[]
}

const Table = (data: TableProps) => {

    const render = () => {
        return data.users.map((user, i) => {
            return (
                <tr key={user._id}>
                    <td>{i+1}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td className="participation">{user.participation}%</td>
                </tr>
            )
        })
    }

    return (
        <Wrapper>
            <table>
                <thead>
                    <tr>
                        <th></th>    
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th className="participation">Participation</th>
                    </tr>
                </thead>
                <tbody>
                    {render()}
                </tbody>
            </table>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    text-align: left;

    th, td {
        padding: 0 10px;
    }

    .participation {
        text-align: center;
    }
`

export default Table