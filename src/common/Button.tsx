import React from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

interface btnProps {
    children: any,
    className?: string,
    onClick?: () => void,
}

const Button = ({children, className, onClick} : btnProps) => {
    const styles = useStyles()

    return (
        <button className = {classNames(styles.root, className)} onClick = {onClick} >
            {children}
        </button>
    )
}

const useStyles = createUseStyles({
    root: {
        cursor: 'pointer',
        width: '100%',
        borderRadius: '5px',
    }
})

export default Button
