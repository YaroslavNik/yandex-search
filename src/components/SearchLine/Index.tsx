import React, { useEffect, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { appAPI } from '../../API/API'
import Button from '../../common/Button'
import Input from '../../common/Input'
import Loader from '../../common/Loader'

const SearchLine = ({setSnippets} : {setSnippets: ([]) => void}) => {
    const styles = useStyles()
    const [input, setInput] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    const [timer, setTimer] = useState(false)
    const [callTimer, setCallTimer] = useState(0)
    const timeoutRef = useRef(null as any)

    const changeHandler = (value: string) => {
        setTimer(true);
        setCallTimer(prev => prev + 1)
        setInput(value);
    }

    const submitHandler = async () => {
        setIsFetching(true);
        const response = await appAPI.searchBooks(input);
        setIsFetching(false);
        setSnippets(response.docs)
    }

    console.log('render')

    useEffect(() => {
        if (timer) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => submitHandler(), 1000)
        }
    }, [timer, callTimer])

    return (
        <div className = {`${styles.root} flex-row`}>
            
            <div className = {styles.search}>
                {isFetching &&
                    <div className = {styles.loader}>
                        <Loader type = 'bubbles' color = '#000' height = {38} width = {38}/>
                    </div>
                }
                
                <Input 
                    placeholder = 'Название книги' 
                    type = 'text' 
                    onChange = {changeHandler} 
                    className = 'input-search'
                />
            </div>
          
            <Button 
                children = {<p>Найти</p>} 
                onClick = {submitHandler}
                className = 'btn-search'
            />
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        justifyContent: 'center',

       
    },

    search: {
        marginRight: '10px',
        width: '100%',
        maxWidth: '300px',
        position: 'relative',
    },

    loader: {
        position: 'absolute',
        width: '96%',
        height: '36px',
        background: 'white',
        top: '2px',
        left: '50%',
        transform: 'translateX(-50%)',
        '& > div': {
            margin: '0 auto'
        }
    }
})

export default SearchLine
