import React from "react";


import { Wrapper, Content, Text } from "./Heroimage.style";

type Props = {
    image: string;
    title: string;
    text: string;
}

const Hero : React.FC <Props> = ({image, title, text}) => {

    return(
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>);
}


export default Hero;