import React from 'react'
import { useRef } from 'react';

interface Props {
    test?: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const App: React.FC<Props & React.HTMLProps<HTMLInputElement>> = ({handleChange, ...rest }) => {

    

    const inputRef = useRef<HTMLInputElement>(null)
    return <input onChange={handleChange} ref={inputRef} {...rest} />
}


export default App