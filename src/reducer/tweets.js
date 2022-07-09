import {RECIEVE_TWEETS} from '../action/tweets'

export default function tweets(state = {}, action){
    switch(action.type){
        case RECIEVE_TWEETS:
            return{
                ...state,
                ...action.tweets
            }
        default:
            return state
    }

}