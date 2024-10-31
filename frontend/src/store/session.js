import { csrfFetch } from "./csrf"

const SET_USER = "session/set_user"
const REMOVE_USER = "session/remove_user"

// action creators
const setUser = user => {
    return {
        type: SET_USER,
        user
    }
}

const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}

// thunks
export const loginBackend = (login) => async dispatch => {
    const response = await csrfFetch("/api/session", {
        method: "POST",
        body: JSON.stringify({ ...login })
    })

    if (response.ok) {
        const user = await response.json()
        await dispatch(setUser(user))
    }
    return response
}

const defaultState = { user: null }

const sessionReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_USER:
            return {...state, ...action.user}

        case REMOVE_USER:
            return { ...state, user: null }

        default:
            return state;
    }
}

export default sessionReducer;
