import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import './assets/styles/Common.sass'
import SearchLine from './components/SearchLine/Index';
import Snippets from './components/Snippets/Index';

const App = () => {
  const styles = useStyles()
  const [snippets, setSnippets] = useState<any []>([])

  return (
    <div className = {styles.root}>
      <div className = {styles.item}>
        <SearchLine setSnippets = {setSnippets}/>
      </div>

      {snippets.length > 0 &&
        <div className = {styles.item}>
          <Snippets snippets = {snippets}/>
        </div>
      }
    </div>
  )

}

const useStyles = createUseStyles({
  root: {
    margin: '0 auto',
    padding: '20px 5%'
  },
  
  item: {
    marginBottom: '20px'
  }
})

export default App;
