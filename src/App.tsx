import React from 'react';
import './App.css';
import {ButtonDiv, MainDiv, TextDiv} from './components/div.component';
import {Photo} from './components/photo.component';
import {Header} from './components/header.component';
import {Text} from './components/text.component';
import {FirstButton, SecondButton} from './components/button.component';

function App() {
    return (
        <MainDiv>
            <Photo/>
            <TextDiv>
                <Header/>
                <Text/>
                <ButtonDiv>
                    <FirstButton bgcColor={'#4E71FE'} textColor={'#fff'}/>
                    <SecondButton textColor={'#4E71FE'}/>
                </ButtonDiv>
            </TextDiv>
        </MainDiv>
    );
}

export default App;



//1) Не скукоживается карточка
//2) снизу под кнопками захаркодил маржин, если его убрать то общая высота карточки как будто меньше
