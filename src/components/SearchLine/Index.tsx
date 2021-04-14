import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { appAPI } from '../../API/API'
import Button from '../../common/Button'
import Input from '../../common/Input'

const SearchLine = ({setSnippets} : {setSnippets: ([]) => void}) => {
    const styles = useStyles()
    const [input, setInput] = useState('')

    const changeHandler = (value: string) => {
        setInput(value);
    }

    const submitHandler = async () => {
        const response = await appAPI.searchBooks(input);
        setSnippets(response.docs)
    }

    return (
        <div className = {styles.root}>
            <Input placeholder = 'Название книги' type = 'text' onChange = {changeHandler}/>
            <Button children = {<p>Найти</p>} onClick = {submitHandler}/>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        '& > input': {
            marginRight: '10px',
        }
    }
})

export default SearchLine
