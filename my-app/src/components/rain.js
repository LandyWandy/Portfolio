import React, { useEffect, useState } from 'react';
import './rain.css';

const Rain = () => {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        const makeItRain = () => {
            document.querySelector('.rain').innerHTML = '';

            let increment = 0;
            let drops = "";
            let backDrops = "";

            while (increment < 100) {
                let randomHundred = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
                let randomFive = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
                increment += randomFive;
                drops += `<div class="drop" style="left: ${increment}%; bottom: ${(randomFive + randomFive - 1 + 100)}%; animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"><div class="stem" style="animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"></div><div class="splat" style="animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"></div></div>`;
                backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${(randomFive + randomFive - 1 + 100)}%; animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"><div class="stem" style="animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"></div><div class="splat" style="animation-delay: 0.${randomHundred}s; animation-duration: 0.5${randomHundred}s;"></div></div>`;
            }

            document.querySelector('.rain.front-row').innerHTML = drops;
            document.querySelector('.rain.back-row').innerHTML = backDrops;
        }

        const rainToggle = () => {
            let rainElement = document.querySelector('.rain.front-row');
            if (rainElement.style.display === "none") {
                rainElement.style.display = "block";
                document.querySelector('.rain.back-row').style.display = "block";
                makeItRain();
                setIsActive(true);
            } else {
                rainElement.style.display = "none";
                document.querySelector('.rain.back-row').style.display = "none";
                setIsActive(false);
            }
        }
    
        document.querySelector('.rain-toggle.toggle').addEventListener('click', rainToggle);
    
        const timeoutId = setTimeout(makeItRain, 2000);

        return () => {
            document.querySelector('.rain-toggle.toggle').removeEventListener('click', rainToggle);
            clearTimeout(timeoutId)
        };
    }, []); 
    

    return (
        <div>
            <div className="rain front-row"></div>
            <div className="rain back-row"></div>
            <div className="toggles">
                <div className={`rain-toggle toggle ${isActive ? 'active' : ''}`}>RAIN</div>
            </div>
        </div>
    );
};

export default Rain;
