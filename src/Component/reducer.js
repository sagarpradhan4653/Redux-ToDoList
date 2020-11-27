import React from 'react'

export default function reducer(state = {}, action) {
    switch (action.type) {


        
        case 'USER_VERIFY': {
            localStorage.setItem('information', JSON.stringify(action.payload))
            return { ...state, userVerify: [action.payload] }
        }


        case 'ONLOAD_PAGE_USER_DETAILS': {
            const passInfo = localStorage.getItem('informations') ? localStorage.getItem('informations') : null
            if (passInfo) {
                return { ...state, userDetails: [JSON.parse(passInfo)] }

            }
            return state
        }

        case 'TODO_ITEM': {
            localStorage.setItem('informations', JSON.stringify(action.payload))

            return { ...state, userDetails: [...state.userDetails, action.payload] }

        }


        case 'TODO_DELETE': {
           
            const { index } = action.payload
            return { ...state, userDetails: [...state.userDetails.slice(0, index), ...state.userDetails.slice(index + 1)] }
        }
        case 'DONE_LOGOUT': {
            localStorage.clear()
            return { ...state, userVerify: [], userDetails: [] }
        }

        case 'EDIT_VALUE': {
            const { ind, obj } = action.payload
            return { ...state, userDetails: [...state.userDetails.slice(0, ind), obj, ...state.userDetails.slice(ind + 1)] }
        }

        case 'CHECK_BOX': {
            const { obj, inda } = action.payload
            return {
                ...state, userDetails: [...state.userDetails.slice(0, inda), { ...state.userDetails[inda], ...obj }, ...state.userDetails.slice(inda + 1)]
            }
        }




        default: {
            return state
        }
    }
}



