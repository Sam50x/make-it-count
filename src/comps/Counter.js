import { useSelector } from 'react-redux'

const Counter = () => {

    const counters = useSelector(store => store.counter)

    const counterItems = counters.map(counter => {
        const { id, name, count, breaks } = counter

        return(
            <div className='counter' key={id}>
                <input type="text" value={name} />
                <h1 className='count'>{count}</h1>
                <div className='btn-container'>
                    <button>
                        -
                    </button>
                    <button>
                        +
                    </button>
                    <button>
                        Reset
                    </button>
                </div>
                <button>Take a Break</button>
                <div className='breaks'>
                    {breaks.map(item =>{
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
            <div className='counters'></div>
            {counterItems}
        </div>
    )
}

export default Counter
