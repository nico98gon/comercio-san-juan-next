'use client'

import SearchIcon from '@mui/icons-material/Search';
import { alpha, InputBase, styled } from '@mui/material';

const SearchFunction = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
    width: 'auto',
},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
            color: 'inherit',
            '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
                width: '25ch',
                '&:focus': {
                        width: '35ch',
                    },
                },
            },
        }));

export const Search = () => {
    return (

        <SearchFunction sx={{ display: { md: 'block', xs: 'none' }}}>

            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>

            <StyledInputBase
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
            />

        </SearchFunction>
    )
}
