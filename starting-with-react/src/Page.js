import React from "react"
import { Header } from "./Header"
export default function Page() {
    const name = 'John'
    return (
        <>
            <Header name={name}/>
            <p>Hey</p>
            <p>Hi</p>
        </>
    )
}