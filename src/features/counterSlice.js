import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from '@reduxjs/toolkit'

const initialState = [
    {
        id: nanoid(),
        name: 'Counter 1',
        count: 0,
        breaks: ['break 1: 5', 'break 2: 19'],
    },
]

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    }
})

export default counterSlice.reducer