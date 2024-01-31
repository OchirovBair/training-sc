import styled from 'styled-components';

type ButtonComponentPropsType = {
    bgcColor?: string
    textColor?: string
}


const ButtonComponent = styled.button<ButtonComponentPropsType>`
    border-radius: 5px;
    background-color: ${props => props.bgcColor || 'transparent'};
    width: 86px;
    height: 30px;
    color: ${props => props.textColor || 'transparent'};
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    border-radius: 5px;
    border: 2px solid #4E71FE;
    margin-top: 20px;
    
    &:hover {
        transform: translateY(-5px);
    }
`

export function FirstButton(props: ButtonComponentPropsType) {
    return(
        <ButtonComponent bgcColor={props.bgcColor} textColor={props.textColor}>See more</ButtonComponent>
    )
}export function SecondButton(props: ButtonComponentPropsType) {
    return(
        <ButtonComponent textColor={props.textColor}>Save</ButtonComponent>
    )
}