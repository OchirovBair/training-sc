import React from 'react';
import './App.css';
import {ButtonsDiv, MainDiv, ContentDiv} from './components/div.component';
import {Photo} from './components/photo.component';
import {Header} from './components/header.component';
import {Text} from './components/text.component';
import {FirstButton, SecondButton} from './components/button.component';


function App() {
    return (
        <MainDiv>
            <Photo/>
            <ContentDiv>
                <Header/>
                <Text/>
                <ButtonsDiv>
                    <FirstButton $bgcColor={'#4E71FE'} $textColor={'#fff'}/>
                    <SecondButton $textColor={'#4E71FE'}/>
                </ButtonsDiv>
            </ContentDiv>
        </MainDiv>

    );
}

export default App;



/*
1) Есть контейнер div главный у карточки. В нем заголовок, текст и кнопки, которые в своем div кнопочном. Отступы по вертикали между заголовком, текстом и кнопками делать у самих элементов или у к примеру div кнопочного?
2) Между блоком Photo и блоком ContentDiv задать маржин боттом у картинки или маржин топ у блока ContentDiv или сделать паддинг у ContentDiv?
3) Также внизу у кнопок на макете есть зазор до низа карточки в 20px. Его лучше сделать паддинг у всей картоки в 10px + паддинг у блока ContentDiv в 10px?
4) Почему лучше задать маржин боттон между элементами, к примеру между Header и Text, а не паддинг топ или боттом?
5) почему не переименовывается везде переменная через shift + F6
*/
