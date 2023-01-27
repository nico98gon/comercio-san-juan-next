'use client'

import { Avatar, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";

// import { useAnchor } from "../../../hooks";

const settings = ['Perfil', 'Cuenta', 'Publicaciones', 'Cerrar Sesión'];

export const AvatarComponent = () => {

    // const { anchorElUser, handleOpenUserMenu, handleCloseUserMenu } = useAnchor();

    return (
        <>
            <Tooltip title="Open settings">
                <IconButton onClick={ handleOpenUserMenu } sx={{ p: 0 }} >
                    <Avatar 
                    alt="Remy Sharp" 
                    src="/static/images/avatar/3.jpg"
                    sx={{ 
                            bgcolor: '#DFE2F5',
                            color: '#141414',
                            background: 'linear-gradient(white, white) padding-box, linear-gradient(to right, #A0D624, #6624D6) border-box',
                            bordeRadius: '50em',
                            border: '3px solid transparent',
                        }}/>
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={ Boolean(anchorElUser) }
                onClose={ handleCloseUserMenu }
                >
                {settings.map((setting) => (
                    <MenuItem key={ setting } onClick={ handleCloseUserMenu }>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </>
    )
}
