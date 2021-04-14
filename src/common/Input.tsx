import React, { useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

interface btnProps {
    classname?: string,
    onChange?: (value: string) => void;
    value?: string,
    placeholder?: string,
    type: string
}

const Input = ({classname, onChange, value, placeholder, type} : btnProps) => {
    const styles = useStyles()
    const handleChange = useCallback((e) => onChange && onChange(e.target.value), [onChange]);

    return (
        <input
            className = {classNames(styles.root, classname)}
            type = {type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}

const useStyles = createUseStyles({
    root: {
        border: '1px solid black',
        borderRadius: '5px',
        padding: '5px 7px'
    }
})

export default Input
