import './tictactoe.css'
import exis from '../assets/exis.png'
import ow from '../assets/ow.png'

const Won = (winner, setLock, titleRef) => {
    setLock(true);
    if (winner === "x"){
        titleRef.current.innerHTML = `Congratulations <img src ='${exis}' class='custom-image'> wins`
    } else {
        titleRef.current.innerHTML = `Congratulations <img src ='${ow}' class='custom-image'> wins`
    }
} 

export default Won;
