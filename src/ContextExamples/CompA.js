import React from 'react';
import CompB from './CompB';
import CompC from './CompC';

export const context=React.createContext();

function CompA() {
    return (
        <div>
            <h1>Component A</h1>
            <context.Provider value={'Aakash'}>
             <CompB/>
            </context.Provider>
           
        </div>
    )
}

export default CompA;
