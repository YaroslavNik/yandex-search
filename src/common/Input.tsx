import React, { useCallback } from 'react'
import { createUseStyles } from 'react-jss'
import classNames from 'classnames';

interface inputProps {
    className?: string,
    onChange?: (value: string) => void;
    value?: string,
    placeholder?: string,
    type: string
}

const Input = ({className, onChange, value, placeholder, type} : inputProps) => {
    const styles = useStyles()
    const handleChange = useCallback((e) => onChange && onChange(e.target.value), [onChange]);

    return (
        <input
            className = {classNames(styles.root, className)}
            type = {type}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}

const useStyles = createUseStyles({
    root: {
        borderRadius: '5px',
        padding: '5px 7px',
        width: '100%'
    }
})

export default Input
