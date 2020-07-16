import React, { useState } from 'react';
import Footer from './footer'

const ErrorPage = () => {

    const [test, setTest] = useState(0);

    return(
        <>
            <div className="error-page">
                <span role="img" aria-label="icones">
                    😰<h1>404</h1>😰
                </span>
                <h2>Page Not Found!</h2>
                <h3>Score: {test}</h3>
                <section>
                    <button onClick={() => setTest(test + 1)}>+</button>
                    <button onClick={() => setTest(0)}>INITIAL</button>
                    <button onClick={() => setTest(test - 1)}>-</button>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ErrorPage;
