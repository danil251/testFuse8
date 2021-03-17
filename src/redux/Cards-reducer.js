import {cardsAPI} from "../api/api";

const initialState = []

export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET-CARDS': {
            return action.cards.map(c => c)
        }
        default:
            return [...state]
    }
}

export const setCards = (cards) => ({type: 'SET-CARDS', cards})

export const fetchCardsTC = () => {
    return (dispatch) => {
        cardsAPI.getCards()
            .then((res) => {
                dispatch(setCards(res.data))
            })
    }
}