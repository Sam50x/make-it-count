import { useDispatch, useSelector } from 'react-redux'
import { incrementCount, decrementCount, resetCount, breakCount, changeCounterName, addNewCounter, deleteCounter, calculateTotal } from '../features/counterSlice'
import { FaTimes } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Counter = () => {

    const counters = useSelector(store => store.counter)
    const dispatch = useDispatch()
    const [message, setMessage] = useState('Add another Counter')


    const handleIncrement = (id) => {
        dispatch(incrementCount(id))
    }

    const handleDecrement = (id, count) => {
        if (count > 0) {
            dispatch(decrementCount(id))
        }
    }

    const handleReset = (id) => {
        dispatch(resetCount(id))
    }

    const handleNewBreak = (id) => {
        dispatch(breakCount(id))
    }

    const handleNewCounter = () => {
        dispatch(addNewCounter())
    }

    const handleDeleteCounter = (id) => {
        dispatch(deleteCounter(id))
    }

    const handleNameChange = ({ id, newName }) => {
        dispatch(changeCounterName({ id, newName }))
    }

    const counterItems = counters.map(counter => {
        const { id, name, count, breaks } = counter

        return (
            <div className='counter' key={id}>
                <p
                    className='trash'
                    onClick={() => {
                        handleDeleteCounter(id)
                    }}
                ><FaTimes /></p>
                <input type="text" value={name}
                    onChange={(e) => handleNameChange({ id, newName: e.target.value })}
                />
                <h1 className='count'>{count}</h1>
                <div className='btn-container'>
                    <button
                        onClick={() => handleDecrement(id, count)}
                    >
                        -
                    </button>
                    <button
                        onClick={() => handleIncrement(id)}
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => handleReset(id)}
                >
                    Reset
                </button>
                <button
                    onClick={() => handleNewBreak(id)}
                >
                    Take a Break
                </button>
                <div className='breaks'>
                    {breaks.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    })}
                </div>
            </div>
        )
    })

    useEffect(() => {
        if (counters.length === 0) {
            setMessage('Start by adding a counter')
        }
        else {
            setMessage('Add another Counter')
        }

        if (counters.length > 0) {
            dispatch(calculateTotal())
        }

    }, [counters, dispatch])

    return (
        <div className='container all-in'>
            <h1 className='header'>MAKE IT COUNT</h1>
            <div className='counters'>
                {counterItems}
                {counters.length > 1 &&
                    <div className='counter'>
                        <input type="text" value='Total' />
                        <h1 className='count'>{counters[0].total}</h1>
                    </div>
                }
            </div>
            <button className='add-counter-btn' onClick={handleNewCounter}>{message}</button>
        </div>
    )
}

export default Counter
