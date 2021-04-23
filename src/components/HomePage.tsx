import { Box, Button, Switch } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import themes from '../themes/DefaultTheme';
import SuggestorPage from './SuggestorPage';
import githubDarkIcon from '../images/github_dark.png';
import githubLightIcon from '../images/github_light.png';

import {useState} from 'react';

const lightTheme = themes.DefaultTheme();
const darkTheme = themes.DarkTheme();


const defaultTheme = localStorage.getItem("theme");
let darkModeThemeValue = false;
if(defaultTheme && defaultTheme != null){
    darkModeThemeValue = defaultTheme === "dark";
}


const githubUrl = "https://github.com/shubham12541/RandomFriendsEpisode";

const HomePage = () => {

    const [isDarkMode, setIsDarkMode] = useState(darkModeThemeValue);
    const [isResultShown, setisResultShown] = useState(false);
    
    const onThemeChange = () => {
        setIsDarkMode(!isDarkMode);

        localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
    }

    const randomButtonClick = () => {
        setisResultShown(!isResultShown);
    }
    
    

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme} >
            <Box
                padding="1rem"
                bgcolor="background.default"
                color="text.primary"
                fontFamily="roboto"
                display="flex"
                justifyContent="space-between"

                >

                <Box>
                    <span>Dark</span>
                    <Switch
                        checked={isDarkMode}
                        onChange={() => onThemeChange()}
                        name="Dark"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                </Box>    
                    
                <Box>
                 <a href={githubUrl} target="_blank" rel="noreferrer" > <img src={isDarkMode ? githubLightIcon : githubDarkIcon } /> </a>
                </Box>
                
            </Box>

            <Box
                bgcolor="background.default"
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100vh"
                color="text.primary"
                fontFamily="roboto"
                >
                
                { isResultShown && <SuggestorPage />}
                { !isResultShown && <Button variant="outlined" color="primary" onClick={() => randomButtonClick()}>Start</Button> }

            </Box>

        </ThemeProvider>
    )
    
};



export default HomePage;



