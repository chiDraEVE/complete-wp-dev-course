import React from "react"
import { Header } from "./Header"
import {Counter} from "./Counter"
export default function Page() {
    const name = 'John'
    return (
        <>
            <Header name={name}/>
            <p>Hey</p>
            <p>Hi</p>
            <Counter />
        </>
    )
}

// const age = 10