import { Box, Button, Container } from '@material-ui/core';
import { fontSize } from '@material-ui/system';
import React, { useState } from 'react';
import {DataService} from '../service/DataService';


const dataService = new DataService();

const SuggestorPage = () => {
    
    const [data, setData] = useState(dataService.getRandomEpisodeData());
    const season = data.id.split("_")[0];
    const episode = data.id.split("_")[1];

    return (
        <Container maxWidth="sm">
            <img src={data.imageSrc} width="100%"  alt="episode image"/>
            <Box fontSize="28px" marginBottom="1rem">
                {data.title}
            </Box>
            <Box>
                S{season} E{episode}
            </Box>
            <Box>
                IMDB: <span style={{color: "red", fontSize: "18px"}}>{data.rating}</span>
            </Box>
            <Box>
                Aired on {data.airedOn}
            </Box>
            
            <Box marginTop="1rem" width="100%">
                {data.summary}
            </Box>

            <Box marginTop="1rem">
                <Button variant="outlined" color="primary" onClick={() => setData(dataService.getRandomEpisodeData())}>Retry</Button>
            </Box>
            
        </Container>
    )

};

export default SuggestorPage;



