import { useRef } from 'react';

const Reset = ({ setLock, titleRef, boxRefs }) => {
    setLock(false);
    titleRef.current.innerHTML = "Tic Tac Toe <span>Game</span>";
    boxRefs.forEach((ref) => {
        ref.current.innerHTML = "";
    });
};

export default Reset;
