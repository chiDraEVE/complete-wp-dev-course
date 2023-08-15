import React from "react"

export function Counter() {
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (localStorage.getItem('count')) {
            setCount(parseInt(localStorage.getItem('count')))
        }
    }, [])

    React.useEffect(() => {
        localStorage.setItem('count', count);
    }, [count])

    function handleClick(event) {
        event.preventDefault()

        setCount(previousValue => previousValue + 1)
    }
    
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a href="#" onClick={handleClick}>Count: {count}</a>
}