import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { http } from '../config/http'
import Table from './Table'
import Chart from './Chart'

interface User {
    _id: string,
    firstName: string,
    lastName: string,
    participation: number
}

const Data: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const result = await http.get('/users')
                setUsers(result.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchUsers()
    }, [])

    return (
        <React.Fragment>
            <Wrapper>
                <div className="title">
                    <h1>DATA</h1>
                    <p>User's participation's in anything.</p>
                </div>
            </Wrapper>
            <Wrapper>
                <div className="data">
                    <div className="item">
                        {!!users.length && <Chart users={users}></Chart>}
                    </div>
                    <div className="item">
                        {!!users.length && <Table users={users}></Table>}
                    </div>
                </div>
            </Wrapper>
        </React.Fragment>
    )
}

const Wrapper = styled.section`
    display: flex;
    width: 100%;

    .title {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 10px 0;

        h1, p {
            line-height: 0;
        }
    }

    .data {
        display: flex;
        width: 100%;

        .item {
            display: flex;
            flex: 1;
            min-width: 50%;
            align-items: flex-start;
            justify-content: center;
        }
    }
`

export default Data