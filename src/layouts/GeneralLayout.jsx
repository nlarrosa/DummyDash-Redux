import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { FooterLayout, SideBar } from '../components/ui';
import { NavBar } from '../components/ui';
import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from '../pages/products/ProductsPage';


const defaultTheme = createTheme();

export function GeneralLayout() {
    
       
    const [open, setOpen] = React.useState(true);



    const toggleDrawer = () => {
        setOpen(!open);
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <NavBar 
            toggleDrawer={toggleDrawer}
            open={open}
        />
        <SideBar 
            toggleDrawer={toggleDrawer}
            open={open}
        />
        
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} >
            
          <Routes>
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/users' element={<h1>USERS PAGE</h1>} />
            <Route path='/sales' element={<h1>SALES PAGE</h1>} />
          </Routes>

          <FooterLayout sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}