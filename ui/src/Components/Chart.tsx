import React from 'react'
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'

interface User {
    _id: string,
    firstName: string,
    lastName: string,
    participation: number
}

interface TableProps {
    users: User[]
}

const Chart = (props: TableProps) => {

    const getUsers = (props: TableProps) => props.users.map(user => [user.firstName, user.participation])

    return (
        <div>
            <PieChart data={getUsers(props)} />
        </div>
    )
}

export default Chart