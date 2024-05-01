import { useState } from "react";
import exis from '../components/assets/exis.png'
import ow from '../components/assets/ow.png'

let [lock, setLock] = useState(false);
const won = (winner) => {
    setLock(true);
    if (winner === "x"){
        titleRef.current.innerHTML = `Congratulations: <img class="custom-image" src=${exis}> wins`
    }
    if (winner === "o") {
        titleRef.current.innerHTML = `Congratulations: <img class="custom-image2" src=${ow} wins`
    }
}

export default won;