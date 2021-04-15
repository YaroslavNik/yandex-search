import React from 'react'
import { createUseStyles } from 'react-jss'
import { coverURL } from '../../API/API';
import {ReactComponent as EmptyBookImg} from '../../assets/images/bookEmpty.svg'

interface modalProps {
    snippet: any ,
    setOpenModal: (value: boolean) => void
}

const Modal = ({snippet, setOpenModal}: modalProps) => {
    const styles = useStyles()

    const closeModal = () => {
        setOpenModal(false)
    }

    return (
        <div className = {styles.root} onClick = {(e) => e.currentTarget.children && closeModal()}>
            <div className = {styles.modal}>
                <h1>{snippet.title}</h1>
                {snippet.isbn
                    ? <img src = {`${coverURL}${snippet.isbn[0]}-L.jpg`}/>
                    : <EmptyBookImg/>
                }
                <p>{snippet.author_name?.join(', ')}</p>
                <p>{snippet.first_publish_year}</p>
                <p>{snippet.publisher?.join(', ')}</p>
                <p>{snippet.isbn?.join(', ')}</p>
            </div>
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        position: 'fixed',
        top: 0, 
        left: 0,
        zIndex: 1,
        height: '100vh',
        width: '100%',
        backdropFilter: 'blur(14px)',
        cursor: 'pointer'
    },
    
    modal: {
        margin: 'auto',
        background: 'white',
        boxShadow: '0 0px 13px rgb(0, 0, 0, 0.25)',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        cursor: 'auto',
        minWidth: '280px',
        maxWidth: '640px',
        overflowY: 'scroll',
        maxHeight: '100vh',

        '& > *:not(:last-child)': {
            marginBottom: '20px',
        },

        '& > h1': {
            textAlign: 'center'
        },

        '& > img, & > svg': {
            height: '600px',
            width: '60%',
            objectFit: 'cover',
        },

        '& > img': {
            background: 'lightgray',
        }
    }
})

export default Modal

