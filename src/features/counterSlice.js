import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: nanoid(),
        name: 'Counter 1',
        count: 0,
        breaks: [],
        lastBreakedCount: 0,
    },
]

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCount: (state, action) =>{
            state.find(counter => counter.id === action.payload).count += 1
        },
        decrementCount: (state, action) =>{
            state.find(counter => counter.id === action.payload).count -= 1
        },
        resetCount: (state, action) =>{
            const counter = state.find(counter => counter.id === action.payload)
            if (counter){
                counter.count = 0
                counter.breaks = []
            }
        },
        breakCount: (state, action) =>{
            const counter = state.find(counter => counter.id === action.payload)
            if (counter){
                counter.breaks.push(`Break ${counter.breaks.length + 1}: ${counter.count - counter.lastBreakedCount}`)
                counter.lastBreakedCount = counter.count
            }
        },
    }
})



export const {incrementCount, decrementCount, resetCount, breakCount} = counterSlice.actions
export default counterSlice.reducer