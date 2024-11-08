import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: nanoid(),
        name: 'Counter 1',
        count: 0,
        breaks: [],
        lastBreakedCount: 0,
        total: 0,
    },
]

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incrementCount: (state, action) => {
            state.find(counter => counter.id === action.payload).count += 1
        },
        decrementCount: (state, action) => {
            state.find(counter => counter.id === action.payload).count -= 1
        },
        resetCount: (state, action) => {
            const counter = state.find(counter => counter.id === action.payload)
            if (counter) {
                counter.count = 0
                counter.breaks = []
            }
        },
        breakCount: (state, action) => {
            const counter = state.find(counter => counter.id === action.payload)
            if (counter && counter.count && counter.count - counter.lastBreakedCount) {
                counter.breaks.push(`Break ${counter.breaks.length + 1}: ${counter.count - counter.lastBreakedCount}`)
                counter.lastBreakedCount = counter.count
            }
        },
        changeCounterName: (state, action) => {
            const counter = state.find(counter => counter.id === action.payload)

            counter.name = action.payload.value
        },
        addNewCounter: (state) => {
            state.push({
                id: nanoid(),
                name: `Counter ${state.length + 1}`,
                count: 0,
                breaks: [],
                lastBreakedCount: 0,
            })
        },
        deleteCounter: (state, action) =>{
            const newState = state.filter(counter => counter.id !== action.payload)

            return newState
        },
        calculateTotal: (state) =>{
            let total = 0

            state.forEach(counter =>{
                total += counter.count
            })

            state[0].total = total
        }
    }
})



export const { incrementCount, decrementCount, resetCount, breakCount, changeCounterName, addNewCounter, deleteCounter, calculateTotal } = counterSlice.actions
export default counterSlice.reducer