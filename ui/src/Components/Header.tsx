import React from 'react'
import styled from 'styled-components'

const Header: React.FC = () => {

    return (
        <Wrapper>
            <div className="input">
                <input type="text" placeholder="Firstname"/>
            </div>
            <div className="input">
                <input type="text" placeholder="Lastname"/>
            </div>
            <div className="input">
                <input type="text" placeholder="Participation"/>
            </div>
            <div className="btn">
                <button type="submit">SEND</button>
            </div>
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

    .input {
        flex: 2;

        input {
            width: 90%;
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
            padding: 11px 0;
            width: 90%;
            color: #fff;
            font-size: 12px;
            font-weight: bold;
            outline: none;
            cursor: pointer;
        }
    }
`

export default Header