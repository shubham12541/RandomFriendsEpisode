import { Box, Button, Container, Chip, Avatar } from '@material-ui/core';
import { fontSize } from '@material-ui/system';
import React, { useState } from 'react';
import {DataService} from '../service/DataService';


const dataService = new DataService();

const SuggestorPage = () => {
    
    const [data, setData] = useState(dataService.getRandomEpisodeData());

    return (
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
                <Chip avatar={<Avatar alt="Imdb" src="https://ia.media-imdb.com/images/M/MV5BMTczNjM0NDY0Ml5BMl5BcG5nXkFtZTgwMTk1MzQ2OTE@._V1_.png" />} label={data.rating} />
            </Box>
            
            <Box  width="100%">
                {data.summary}
            </Box>

            <Box marginTop="1rem" >
                <Button variant="outlined" color="primary" onClick={() => setData(dataService.getRandomEpisodeData())}>Next</Button>
            </Box>
            
        </Container>
    )

};

export default SuggestorPage;



