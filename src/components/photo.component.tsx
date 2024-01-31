import photo from '../images/photo.png';
import React from 'react';
import styled from 'styled-components';

export const Photo = () => {
    return (
        <PhotoComponent src={photo} alt={'photo'}/>
    )
}

const PhotoComponent = styled.img`
    //max-width: 280px;
    width: 100%;
    height: 170px;
`