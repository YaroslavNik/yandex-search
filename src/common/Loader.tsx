import React from 'react';
import ReactLoading from 'react-loading';

interface loaderProps {
    type: any,
    color: string,
    height: number,
    width: number
}

const Loader = ({ type, color, height, width }: loaderProps) => (
	<ReactLoading type={type} color={color} height={height} width={width}/>
);

export default Loader;