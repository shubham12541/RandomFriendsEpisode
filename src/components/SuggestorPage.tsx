import { Box, Button, Container, Chip, Avatar } from '@material-ui/core';
import { fontSize } from '@material-ui/system';
import React, { useState } from 'react';
import {DataService} from '../service/DataService';
import imdbIcon from '../images/imdb_icon.png';

import styled, {keyframes, css} from 'styled-components';
import {zoomIn, zoomOut, slideInLeft, slideOutRight, merge} from 'react-animations';

const bounceAnimation = keyframes`${zoomIn}`;

const nextAnimation = merge(slideOutRight);
const nextAnimatoinKeyFrame = keyframes`${nextAnimation}`;

 
// animation: 0.8s ${bounceAnimation};
const BouncyDiv:any = styled.div`
  animation: ${(props:any) => props.toggle ? css`0.8s ${bounceAnimation}` :  css`0.8s ${bounceAnimation}`}
`;


const dataService = new DataService();

const SuggestorPage = () => {
    
    const [data, setData] = useState(dataService.getRandomEpisodeData());
    const [toggle, setToggle] = useState(true);


    const func = () => {
        setData(dataService.getRandomEpisodeData());
        setToggle(!toggle);
    }

    return (
        <BouncyDiv toggle={toggle}>
            <Container maxWidth="sm">
                <img src={data.imageSrc} width="100%"  alt="episode image"/>
                <Box fontSize="28px"fontWeight="bold" >
                    {data.title}
                </Box>
                <Box fontSize="0.8rem" fontWeight="300"  >
                    Aired on {data.airedOn}
                </Box>
                <Box marginY="1rem">
                    {/* <span style={{ marginRight: "1rem" }}>S{season} E{episode}</span> */}
                    <Chip style={{ marginRight: "0.6rem" }} label={`S${data.season} E${data.episode}`} />
                    <Chip avatar={<Avatar alt="Imdb" src={imdbIcon} />} label={data.rating} />
                </Box>
                
                <Box  width="100%">
                    {data.summary}
                </Box>

                <Box marginTop="1rem" >
                    <Button variant="outlined" color="primary" onClick={() => func()}>Next</Button>
                </Box>
                
            </Container>
        </BouncyDiv>
        
    )

};

export default SuggestorPage;



