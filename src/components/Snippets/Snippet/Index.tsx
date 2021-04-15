import React from 'react'
import { createUseStyles } from 'react-jss'
import { coverURL } from '../../../API/API';

interface SnippetProps {
    author?: [],
    coverId: [] | null,
    title: string,
    id: string,
    setActiveSnippet: (value: string) => void
    setOpenModal: (value: boolean) => void
}

const Snippet = ({author, coverId, title, id, setActiveSnippet, setOpenModal} : SnippetProps) => {
    const styles = useStyles()

    return (
        <div className = {`${styles.root} `} onClick = {() => {setActiveSnippet(id); setOpenModal(true);}}>
            <ul className = 'flex-row'>
                <li className = 'flex-row'>
                    {coverId !== null &&
                        <img src = {`${coverURL}${coverId}-S.jpg`}/>
                    }
                </li>
                <li className = {`${styles.title} flex-row`}>{title}</li>
                <li className = 'flex-row'>{author}</li>
            </ul>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        cursor: 'pointer',
        borderRadius: '5px',

        '&:hover': {
            boxShadow: '0 0px 13px rgb(0, 0, 0, 0.25)'
        },

        '& > ul': {
            height: '70px',
            padding: '5px 10px',
        },

        '& li:not(:last-child)': {
            marginRight: '10px'
        }
    },

    title: {
        fontWeight: 'bold'
    }
})

export default React.memo(Snippet)
