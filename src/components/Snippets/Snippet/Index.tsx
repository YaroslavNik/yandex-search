import React from 'react'
import { createUseStyles } from 'react-jss'
import { coverURL } from '../../../API/API';
import {ReactComponent as EmptyBookImg} from '../../../assets/images/bookEmpty.svg'

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
        <div className = {`${styles.root} flex-row`} onClick = {() => {setActiveSnippet(id); setOpenModal(true);}}>
            <ul className = 'flex-row'>
                <li className = {`${styles.img}`}>
                    {coverId !== null 
                        ? <img src = {`${coverURL}${coverId}-S.jpg`}/>
                        : <EmptyBookImg/>
                    }
                </li>
                <li className = {`${styles.title}`}>{title}</li>
                <li >{author?.join(', ')}</li>
            </ul>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        borderRadius: '5px',
        width: '90%',
        justifyContent: 'center',
        padding: '0 10px',
        cursor: 'pointer',

        '&:hover': {
            boxShadow: '0 0px 13px rgb(0, 0, 0, 0.25)'
        },

        '& > ul': {
            minHeight: '120px',
            boxSizing: 'content-box',
            justifyContent: 'space-between',
            display: 'grid', 
            gridTemplateColumns: '1fr 2fr 2fr',
        },

        '& li': {
            // width: 'auto'
        },

        '& li:not(:last-child)': {
            marginRight: '10px'
        }
    },

    title: {
        fontWeight: 'bold',
    },

    img: {
        '& > img, & > svg': {
            width: '60px',
            height: '100%',
            objectFit: 'cover'
        }
    }
})

export default React.memo(Snippet)
