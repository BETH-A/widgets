import React, { useState } from 'react';

const Accordion = ({ items }) => {
    //Initilize State
    const [activeIndex, setActiveIndex] = useState(null);

    //helper function
    const onTitleClicked = (index) => {
        setActiveIndex(index)
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    onClick={() => onTitleClicked(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p> {item.content} </p>
                </div>
            </React.Fragment>
        )
    })

    return (
        <div className="ui container">
            <div className="ui styled accordion">
                {renderedItems}
            </div>
        </div>
        
    )
};

export default Accordion;