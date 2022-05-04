import React from 'react';
import { Card } from '../Card/Card';
import './Board.css';

export const Board = () => {
    return(
        <div className='board'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}