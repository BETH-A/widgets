import React from 'react';

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }

    //Prevents full page reload
        event.preventDefault();
    //changes URL w/OUT rerendering page
        window.history.pushState({}, '', href)
    //tells Route components that the URL has changed
       const navEvent = new PopStateEvent('popstate');
       window.dispatchEvent(navEvent); 
    }

    return (
        <a 
            className={className} 
            href={href} 
            onClick={onClick}
        >
            {children}
        </a>
    );
};

export default Link;