import React, { useState } from 'react';
import './tictactoe.css'
import exis from '../assets/exis.png'
import ow from '../assets/ow.png'

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let playerX = "";
    let playerO = "";
    const toggole = (w, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2===0) {
            w.target.innerHTML = `<img src = '${exis}'>`;
            data[num]="x";
            setCount(++count);
        } else {
            w.target.innerHTML = `<img src = '${ow}'>`;
            data[num]="o";
            setCount(++count);
        }
        checkWin();
    }
    

    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
            console.log("Win condition met: Row 1");
            won(data); 
        }
        else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
            console.log("Win condition met: Row 1");
            won(data);
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
            console.log("Win condition met: Row 1");
            won(data);
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
            console.log("Win condition met: Row 1");
            won(data);
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
            console.log("Win condition met: Row 1");
            won(data);
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
            console.log("Win condition met: Row 1");
            won(data);
        }
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
            console.log("Win condition met: Row 1");
            won(data);
        }
        else if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
            console.log("Win condition met: Row 1");
            won(data);
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
            console.log("Win condition met: Row 1");
            won(data);
        }  
    }
    const won = (winner) => {
        setLock(true);
    }

   
    


   
    return(
        <div className='container'>
            <h1 className='title'> Tic Tac Toe <span>Game</span></h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' onClick={(e)=> {toggole(e,0)}}></div>
                    <div className='boxes' onClick={(e)=> {toggole(e,1)}}></div>
                    <div className='boxes' onClick={(e)=> {toggole(e,2)}}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' onClick={(e)=> {toggole(e,3)}}></div>
                    <div className='boxes' onClick={(e)=> {toggole(e,4)}}></div>
                    <div className='boxes' onClick={(e)=> {toggole(e,5)}}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' onClick={(e)=> {toggole(e,6)}}></div>
                    <div className='boxes' onClick={(e)=> {toggole(e,7)}}></div>
                    <div className='boxes' onClick={(e)=> {toggole(e,8)}}></div>
                </div>
            </div>
            <button className='reset'> Play Again</button>
        </div>
    )
};

export default TicTacToe;