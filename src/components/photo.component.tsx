import photo from '../images/photo.png';
import React from 'react';
import styled from 'styled-components';

export const Photo = () => {
    return (
        <PhotoComponent src={photo} alt={'photo'}/>
    )
}

const PhotoComponent = styled.img`
    width: 300px;
    height: 190px;
    padding: 10px 10px 0 10px;
`