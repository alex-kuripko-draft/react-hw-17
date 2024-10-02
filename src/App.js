import React, {useState} from 'react';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline, Typography, Container, Button, styled} from '@mui/material';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f5f5f5',
        },
        primary: {
            main: '#1976d2',
        },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#121212',
        },
        primary: {
            main: '#90caf9',
        },
    },
});

const StyledButton = styled(Button)`
    margin-top: 20px;
    border-radius: 8px;
    padding: 10px 20px;
`;

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <CssBaseline/>
            <Container style={{textAlign: 'center', padding: '50px'}}>
                <Typography variant="h3" gutterBottom>
                    {`${isDarkMode ? 'Dark' : 'Light'} Mode`}
                </Typography>
                <StyledButton
                    variant="contained"
                    color="primary"
                    onClick={toggleTheme}
                >
                    toggle theme
                </StyledButton>
            </Container>
        </ThemeProvider>
    );
}

export default App;
