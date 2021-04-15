import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import './assets/styles/Common.sass'
import Modal from './components/Modal/Index';
import SearchLine from './components/SearchLine/Index';
import Snippets from './components/Snippets/Index';

const App = () => {
  const styles = useStyles()
  const [snippets, setSnippets] = useState<any []>([])
  const [openModal, setOpenModal] = useState(false)
  const [activeSnippet, setActiveSnippet] = useState('')

  return (
    <div className = {styles.root}>

      <SearchLine setSnippets = {setSnippets}/>

      {snippets.length > 0 &&
        <Snippets 
          snippets = {snippets} 
          setActiveSnippet = {setActiveSnippet}
          setOpenModal = {setOpenModal}
        />
      }

      {openModal && 
        <Modal 
          snippet = {snippets.find(el => el.key === activeSnippet)}
          setOpenModal = {setOpenModal}
        />
      }
    </div>
  )

}

const useStyles = createUseStyles({
  root: {
    margin: '0 auto',
    padding: '20px 10px',
    height: 'auto',
    minHeight: '100vh',
    position: 'relative',
    
    '& > div:not(:last-of-type)': {
      marginBottom: '20px'
    }
  },
  
  item: {
    marginBottom: '20px'
  }
})

export default App;
