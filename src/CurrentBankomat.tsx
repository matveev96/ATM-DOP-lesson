import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

type CurrentBankomatPropsType = {
    money: MoneyType
}

export const CurrentBankomat = ({money}: CurrentBankomatPropsType) => {
    return (
        <div>
            <Banknote colors={money.banknote === 'USD' ? 'aquamarine' : 'lightskyblue'}>
                <Name>{money.banknote}</Name>
                <Nominal>{money.nominal}</Nominal>
            </Banknote>
        </div>

    );
};

type ColorsBanknoteProps = {
    colors: string
}

const BanknoteGreen = styled.div`
    background-color: aquamarine;
    width: 200px;
    height: 100px;
    margin: 10px;
`

const BanknoteBlue = styled.div`
    background-color: lightskyblue;
    width: 200px;
    height: 100px;
    margin: 10px;
`

const Banknote = styled.div<ColorsBanknoteProps>`
    background-color: ${props => props.colors};
    width: 200px;
    height: 100px;
    margin: 5px;
`


const Name = styled.span`
    display: flex;
    justify-content: center;
    font-size: 15px;
`

const Nominal = styled.span`
    display: flex;
    justify-content: center;
    margin-top: 15px;
    font-size: 45px;
`
