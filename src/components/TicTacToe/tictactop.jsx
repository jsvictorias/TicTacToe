import React from 'react';
import './tictactoe.css'
import exis from '../assets/exis.png'
import ow from '../assets/ow.png'


const TicTacToe = () => {
    return(
        <div className='container'>
            <h1 className='title'> Tic Tac Toe <span>Game</span></h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                </div>
                <div className='row2'>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                </div>
                <div className='row3'>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                    <div className='boxes'></div>
                </div>
            </div>
            <button className='reset'> Play Again</button>
        </div>
    )
};

export default TicTacToe;