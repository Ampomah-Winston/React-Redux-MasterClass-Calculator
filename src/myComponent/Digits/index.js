import React from 'react'

import store from '../../Store'
import Button from '../Button/Button'


export const Digits = () =>{
    return(
        <div>
            <section className="buttons--digits">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0,]
                .map(nr => <Button key={nr} text={nr} clickHandler={digitClickHandler}/>)}
            </section>
        </div>
    )
}
    
export const digitClickHandler = (num) => {
        if (!store.curExpression) {
            return store.newExpression = num;
        }

        return store.newExpression = `${store.curExpression}${num}`;
    }


export default Digits