import React from 'react'
import { createUseStyles } from 'react-jss'
import Snippet from './Snippet/Index'

interface snippetsProps {
    setOpenModal: (value: boolean) => void,
    snippets: any [],
    setActiveSnippet: (value: string) => void
}

const Snippets = ({snippets, setActiveSnippet, setOpenModal} : snippetsProps) => {
    const styles = useStyles()
    
    return (
        <div className = {`${styles.root}`}>
            {snippets.map(el => 
                <Snippet 
                    author={el.author_name} 
                    coverId = {el.isbn ? el.isbn[0] : null} 
                    title = {el.title}
                    id = {el.key}
                    setActiveSnippet = {setActiveSnippet}
                    setOpenModal = {setOpenModal}
                    key = {el.key}
                />
            )}
        </div>
    )
}

const useStyles = createUseStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    },

    '@media screen and (max-width: 1024px)': {
        root: {
            display: 'flex',
            flexWrap: 'wrap',

            '& > *': {
                flexBasis: '100%',
            }
        }
    }
})

export default Snippets
