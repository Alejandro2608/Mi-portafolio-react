import React from 'react';

import '../assets/style/index.css'

const Main =({children})=>(
    <div className="Main">
        <div className="Main__container">
            {children}
        </div>

    </div>
);
export default Main;

