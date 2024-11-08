import { useDispatch, useSelector } from 'react-redux'
import { incrementCount, decrementCount, resetCount, breakCount, changeCounterName, addNewCounter } from '../features/counterSlice'

const Counter = () => {

    const counters = useSelector(store => store.counter)
    const dispatch = useDispatch()

    const counterItems = counters.map(counter => {
        const { id, name, count, breaks } = counter

        return (
            <div className='counter' key={id}>
                <input type="text" value={name} 
                    onChange={() =>{
                        dispatch(changeCounterName(id))
                    }}
                />
                <h1 className='count'>{count}</h1>
                <div className='btn-container'>
                    <button
                        onClick={() => {
                            if (count > 0) {
                                dispatch(decrementCount(id))
                            }
                        }}
                    >
                        -
                    </button>
                    <button
                        onClick={() => dispatch(incrementCount(id))}
                    >
                        +
                    </button>
                </div>
                <button
                    onClick={() => dispatch(resetCount(id))}
                >
                    Reset
                </button>
                <button
                    onClick={() => dispatch(breakCount(id))}
                >
                    Take a Break
                </button>
                <div className='breaks'>
                    {breaks.map(item => {
                        return (
                            <p>{item}</p>
                        )
                    })}
                </div>
            </div>
        )
    })

    return (
        <div className='container all-in'>
            <h1 className='header'>MAKE IT COUNT</h1>
            <div className='counters'>
                {counterItems}
            </div>
            <button className='add-counter-btn' onClick={() => dispatch(addNewCounter())}>Add another Counter</button>
        </div>
    )
}

export default Counter
