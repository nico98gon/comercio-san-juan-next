'use client'

import { AppBar, Box, Fab, styled, Toolbar } from '@mui/material';
import Container from '@mui/material/Container';
// import AddIcon from '@mui/icons-material/Add';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { Comercio } from 'components/Comercio';
import { PagesButtons } from 'components/PagesButtons';
import { Search } from 'components/Search';
import { AvatarComponent } from 'components/AvatarComponent';
import Image from 'next/image';
import logoImage from 'assets/img/grapeLogo2.jpg';
import Link from 'next/link';

import { ThemeButton } from "helpers/ThemeButton";

// const StyledBarMobile = styled(AppBar)({
//     width: '98%',
//     top: 'auto',
//     bottom: 0,
//     // background: '#141414',
//     color: '#d1d1d1',
//     textAlign: 'center',
//     borderTopLeftRadius: '12px',
//     borderTopRightRadius: '12px',
// });

// const StyledFab = styled(Fab)({
//     position: 'absolute',
//     zIndex: 1,
//     top: -20,
//     left: 0,
//     right: 0,
//     margin: '0 auto'
// });

export const NavBar = () => {

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar
                position="fixed"
                enableColorOnDark
                sx={{ background: "#141414", display: { xs: 'none', md: 'flex', textAlign: 'center' }}}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                    <Link href="/">
                        <Image
                            src={logoImage}
                            width={55}
                            height={55}
                            alt="Logo Comercio San Juan"
                        />
                    </Link>

                        <Comercio />

                        <Box sx={{
                            // ml: { md: '2%',lg: '15%', xl: '28%' },
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate( -50%, -50% )',
                            display: { xs: 'none', md: 'flex' },
                        }}
                        >
                            <PagesButtons />
                        </Box>

                        <Box sx={{ flexGrow: 1 }} />

                        <Search/>

                        <Box sx={{ position: 'relative', right: 7, }} >
                            <ThemeButton />
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            <AvatarComponent />
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* <StyledBarMobile 
                position="fixed"
                sx={{
                    display: { xs: 'flex', md: 'none' }
                }}
            >
                <Container>
                    <Toolbar>

                        <Box>
                            <BurgerMenu />
                        </Box>

                        <Box sx={{ ml: '14%' }} >
                            <ThemeButton />
                        </Box>

                        <StyledFab aria-label="add" color='secondary'>
                            <AddIcon />
                        </StyledFab>


                        <Box sx={{ flexGrow: 1 }} />

                        <Box sx={{ mr: '13%'}} >
                            <FavoriteIcon />
                        </Box>


                        <Box >
                            <Avatare />
                        </Box>

                    </Toolbar>
                </Container>
            </StyledBarMobile> */}
        </Box>

    );
}
