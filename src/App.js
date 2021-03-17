import s from './App.module.sass';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {fetchCardsTC} from "./redux/Cards-reducer";
import CardItem from "./components/CardItem";

function App() {
    const dispatch = useDispatch()
    const cards = useSelector(state => state.Cards)
    const [text, setText] = useState('')

    useEffect(() => {
        dispatch(fetchCardsTC())
    }, [dispatch])

    let cardsItem = text.length > 2 ? cards.filter(f => f.title.toLowerCase().startsWith(text.toLowerCase())) : cards
    let cardRender = cardsItem.map(card => <CardItem key={card.id}
                                                     id={card.id}
                                                     title={card.title}
                                                     address={card.address}
                                                     type={card.type}
                                                     price={card.price}
    ></CardItem>)

    return (
        <div className={s.App}>
            <h1 className={s.appTitle}>Our Latest Developments</h1>
            <div className={s.filter}>Filter <input className={s.filterInput} type="text" value={text}
                                                    onChange={(e) => setText(e.currentTarget.value)}/></div>
            <div className={s.wrapper}>{cardRender.length ? cardRender :
                <span className={s.error}>Ничего не найдено</span>}</div>
            <div className={s.btn}>See more
                <svg xmlns="http://www.w3.org/2000/svg" width="7" height="17" viewBox="0 0 7 17" fill="none">
                    <path id="Chevron" d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" strokeWidth="2"
                          strokeLinecap="round"/>
                </svg>
            </div>
        </div>
    );
}

export default App;
