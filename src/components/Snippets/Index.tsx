import React from 'react'
import { createUseStyles } from 'react-jss'
import Snippet from './Snippet/Index'

const Snippets = ({snippets} : {snippets: any []}) => {
    const styles = useStyles()
    
    return (
        <div className = {styles.root}>
            {snippets.map(el => 
                <Snippet 
                    author={el.author_name} 
                    coverId = {el.isbn ? el.isbn[0] : null} 
                    title = {el.title} 
                    key = {el.key}
                />
            )}
        </div>
    )
}

const useStyles = createUseStyles({
    root: {

    },
})

export default Snippets
