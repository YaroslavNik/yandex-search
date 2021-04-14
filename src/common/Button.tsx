import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

interface btnProps {
    children: any,
    classname?: string,
    onClick?: () => void,
}

const Button = ({children, classname, onClick} : btnProps) => {
    const styles = useStyles()

    return (
        <button className = {classNames(styles.root, classname)} onClick = {onClick} >
            {children}
        </button>
    )
}

const useStyles = createUseStyles({
    root: {
        cursor: 'pointer',
    }
})

export default Button
