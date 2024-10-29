import React, { useState, useEffect } from 'react';

const Quote = () => {
    const [quote, setQuote] = useState('Loading...'); // Initial state for the quote

    const fetchRandomQuote = async () => {
        try {
            const response = await fetch('http://api.forismatic.com/api/1.0/?method=getQuote&format=json');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setQuote(data.quoteText); // Set the quote in state
            console.log(data.quoteText);
        } catch (error) {
            console.error('Error fetching the quote:', error);
            setQuote('Keep pushing forward!'); // Fallback quote
        }
    };

    useEffect(() => {
        fetchRandomQuote(); // Fetch a quote when the component mounts
    }, []);

    return (
        <blockquote className="quote">
            {quote} {/* Display the fetched quote */}
        </blockquote>
    );
};

export default Quote;




