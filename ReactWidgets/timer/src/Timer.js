import React, { useState } from 'react';

const Timer = ({ initialTotalSeconds }) => {
    let [ totalSeconds, setTotalSeconds ] = useState(initialTotalSeconds);
    const [ intervalId, setIntervalId ] = useState(null);
    const [ hasBegun, setStart] = useState(false);
    const [ isFinished, setFinished ] = useState(false);
    const [ currentTime, setCurrentTime ] = useState("00:00:00")

    const toggleTime = () => {
        // play/pause button should be hidden if not begun or finished, but just in ase
        if (isFinished || !hasBegun) return;

        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        } else {
            setIntervalId(setInterval(countdown, 1000));
        }
    }

    // temporarily show a start button before countdown initiated instead of play/pause
    const handleBegin = () => {
        setStart(true);
        toggleTime();
    }

    const countdown = () => {
        setTotalSeconds(totalSeconds--);
        updateTimeDisplay();

        if (totalSeconds === 0) {
            setFinished(true);
        }
    }

    const updateTimeDisplay = () => {
        // convert totalSeconds to hours and minutes

        let hours = formatAsText(parseInt(totalSeconds / (60 * 60)));
        let minutes = formatAsText(parseInt(totalSeconds / 60 - (hours * 60)));
        let seconds = formatAsText(parseInt(totalSeconds - (hours * 60 * 60) - (minutes * 60)));

        const time = `${hours}: ${minutes} : ${seconds}`;

        setCurrentTime(time);
    }

    const formatAsText = (num) => {
        return num < 10 ? `0${num}` : `${num}`;
    }

    return (
        <div className="Timer">
            <button onClick={handleBegin}>Start!</button>
            <button onClick={toggleTime}>Start/Stop</button>
            <p>{currentTime}</p>
        </div>
    )

}

export default Timer;