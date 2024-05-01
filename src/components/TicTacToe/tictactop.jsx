import React, { useState, useRef } from 'react';
import './tictactoe.css'
import exis from '../assets/exis.png'
import ow from '../assets/ow.png'

let data = ["", "", "", "", "", "", "", "", ""];


const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);

    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2,box3, box4, box5, box6, box7, box8, box9];


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
            won(data[2]); 
        }
        else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
            console.log("Win condition met: Row 1");
            won(data[5]);
        }
        else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
            console.log("Win condition met: Row 1");
            won(data[8]);
        }
        else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
            console.log("Win condition met: Row 1");
            won(data[6]);
        }
        else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
            console.log("Win condition met: Row 1");
            won(data[7]);
        }
        else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
            console.log("Win condition met: Row 1");
            won(data[8]);
        }
        else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
            console.log("Win condition met: Row 1");
            won(data[8]);
        }
        else if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
            console.log("Win condition met: Row 1");
            won(data[2]);
        }
        else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
            console.log("Win condition met: Row 1");
            won(data[6]);
        }  
    }
    const won = (winner) => {
        setLock(true);
        if (winner === "x"){
            titleRef.current.innerHTML = `Congratulations: <img class="custom-image" src=${exis}> wins`
        }
        if (winner === "o") {
            titleRef.current.innerHTML = `Congratulations: <img class="custom-image2" src=${ow} wins`
        }
    }
    const reset = () => {
        setLock(false);
        
        titleRef.current.innerHTML = "Tic Tac Toe <span>Game</span>"
        box_array.map((w)=>{
            w.current.innerHTML = "";
        })
    }
       
    return(
        <div className='container'>
            <h1 className='title' ref={titleRef}> Tic Tac Toe <span>Game</span></h1>
            <div className='board'>
                <div className='row1'>
                    <div className='boxes' ref={box1} onClick={(e)=> {toggole(e,0)}}></div>
                    <div className='boxes' ref={box2} onClick={(e)=> {toggole(e,1)}}></div>
                    <div className='boxes' ref={box3} onClick={(e)=> {toggole(e,2)}}></div>
                </div>
                <div className='row2'>
                    <div className='boxes' ref={box4} onClick={(e)=> {toggole(e,3)}}></div>
                    <div className='boxes' ref={box5} onClick={(e)=> {toggole(e,4)}}></div>
                    <div className='boxes' ref={box6} onClick={(e)=> {toggole(e,5)}}></div>
                </div>
                <div className='row3'>
                    <div className='boxes' ref={box7} onClick={(e)=> {toggole(e,6)}}></div>
                    <div className='boxes' ref={box8} onClick={(e)=> {toggole(e,7)}}></div>
                    <div className='boxes' ref={box9} onClick={(e)=> {toggole(e,8)}}></div>
                </div>
            </div>
            <button className='reset' onClick={()=>{reset()}}> Play Again</button>
        </div>
    )
};

export default TicTacToe;