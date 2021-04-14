import React from 'react'
import { createUseStyles } from 'react-jss'
import { coverURL } from '../../../API/API';

interface SnippetProps {
    author?: [],
    coverId: [] | null,
    title: string 
}

const Snippet = ({author, coverId, title} : SnippetProps) => {
    const styles = useStyles()

    return (
        <div className = {`${styles.root} `}>
            <ul className = 'flex-row'>
                <li className = 'flex-row'>{author}</li>
                <li className = 'flex-row'>
                    {coverId !== null &&
                        <img src = {`${coverURL}${coverId}-S.jpg`}/>
                    }
                </li>
                <li className = 'flex-row'>{title}</li>
            </ul>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        '&:not(:last-child)': {
            marginBottom: '10px',
        },

        '& > ul': {
            minHeight: '40px',
            height: 'auto',
            padding: '5px 10px',
            border: '1px solid black',
            borderRadius: '5px'
        }
    }
})

export default Snippet
