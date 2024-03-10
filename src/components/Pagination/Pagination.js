import React from "react";
import { useState, useEffect } from 'react';
import './Pagination.css';

const Pagination = ({ pages=10, setCurrentPage}) => {
    
    const numberOfPages = [];

    for(let i=1; i<=pages; i++){
        numberOfPages.push(i);
    }

    const [currentButton, setCurrentButton] = useState(1);
    const [arrayOfCurrentButtons, setArrayOfCurrentButtons] = useState([]);

    useEffect(() => {
        let tempNumOfPages = [...arrayOfCurrentButtons];

        let dotsInitial = '...';
        let dotsLeft = '... ';
        let dotsRight = ' ...';

        if(currentButton>=1 && currentButton<=3){
            tempNumOfPages = [1, 2, 3, 4, dotsInitial, numberOfPages.length];
        }
        else if(currentButton === 4){
            const sliced = numberOfPages.slice(0, 5);
            tempNumOfPages = [...sliced, dotsInitial, numberOfPages.length];
        }
        else if(currentButton > 4 && currentButton <= numberOfPages.length - 2){
            const sliced1 = numberOfPages.slice(currentButton-2, currentButton);
            const sliced2 = numberOfPages.slice(currentButton, currentButton + 1);
            tempNumOfPages = ([1, dotsLeft, ...sliced1, ...sliced2, dotsRight, numberOfPages.length])
        }
        else if(currentButton > numberOfPages.length - 3){
            const sliced = numberOfPages.slice(numberOfPages.length - 4);
            tempNumOfPages = ([1, dotsLeft, ...sliced]);
        }
        else if(currentButton === dotsInitial){
            setCurrentButton(arrayOfCurrentButtons[arrayOfCurrentButtons.length-3]+1);
        }
        else if(currentButton === dotsLeft){
            setArrayOfCurrentButtons(arrayOfCurrentButtons[3]-2);
        }
        else if(currentButton === dotsRight){
            setArrayOfCurrentButtons(arrayOfCurrentButtons[3]+2);
        }
        setArrayOfCurrentButtons(tempNumOfPages);
        setCurrentPage(currentButton);
    }, [currentButton])

    return (
        <div className='pagination-container'>
            <div className='prev-btn'>
                <button className={`${currentButton === 1 ? 'disabled' : ''}`}
                    onClick={ () => setCurrentButton((prev) => prev === 1 ? prev: prev - 1)}
                >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#9ea1a7'><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/></svg>
                    </span>
                </button>
            </div>
            
            {arrayOfCurrentButtons.map((page, index) => {
                return(
                    <div className="page-num-btn">
                        <button 
                            key={index} 
                            className={currentButton === page ? 'active' : ''}
                            onClick={() => setCurrentButton(page)}
                        ><span>{page}</span></button>
                    </div>
                )
            })}
            <div className='next-btn'>
                <button
                    className={`${currentButton === numberOfPages.length ? 'disabled' : ''}`}
                    onClick={ () => setCurrentButton((prev) => prev === numberOfPages.length ? prev : prev + 1)}
                >
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill='#9ea1a7'><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>
                    </span>   
                </button>
            </div>
        </div>
    )
}

export default Pagination;