import React from 'react'
import s from './CardItem.module.sass'
import {Link} from "react-router-dom";

function CardItem(props) {
    const typeStyle = props.type === 'IndependentLiving' ? `${s.blue} ${s.label}` : `${s.orange} ${s.label}`
    const img = window.innerWidth < 860 ? 'https://via.placeholder.com/300x150' : 'https://via.placeholder.com/350x150'

    return (
        <Link to={`/details/${props.id}`} className={s.item}>
            <img src={img} alt=""/>
            <div className={typeStyle}>{props.type}</div>
            <div className={s.itemDescription}>
                <span className={s.itemTitle}>{props.title}</span>
                <span className={s.itemAddress}>{props.address}</span>
                <span className={s.itemPrice}>New Properties for Sale from <strong>£{props.price}</strong></span>
                <span>Shared Ownership Available</span>
            </div>
        </Link>
    )
}

export default CardItem