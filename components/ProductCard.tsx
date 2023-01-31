'use client'

import { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Button, Box, Fab, Toolbar, CardHeader, IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { FavoriteBorder } from "@mui/icons-material"
import Image from 'next/image';
import productImage from '/assets/img/motoProducto.jpg';


//TODO: Hacer ajustes

export const ProductCard = () => {


    const [isActive, setIsActive] = useState(false);

    const onMouseOver = () => {
      setIsActive(true);
    }

    const onMouseOut = () => {
      setIsActive(false);
    }
    
    const description = "Me gustaria que este texto aparezca al poner el mouse encima.";

    //const imageURL = "../../assets/fondo1.jpg";

    return (
      <Box sx={{ display: 'inline-block', p: 7, alignContent: 'center' }}> 
        <Card
          sx={{
            width: { xs: 280, md: 348 },
            height: { xs: 500, md: 345 },
            borderRadius: 8,
            border: '2px solid #DFE2F5',
            bgcolor: 'primary.main',
            color: 'text.secondary',
            p: 2,
            '&:hover': {
              boxShadow: '0 2px 2px 0',
              bgcolor: 'primary.main',
            } 
          }}
          >

          <CardHeader
            avatar={
              <IconButton sx={{ p: 0 }} >
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ bgcolor: '#DFE2F5', color: '#141414' }} />
              </IconButton>
            }
              title="Nombre del producto"
              titleTypographyProps={{ fontSize: '18px'}}
              subheader="UserName"
              subheaderTypographyProps={{ fontSize: '11px'}}
              sx={{ mt: '-14px', ml: '-12px' }}
              />

          <CardActionArea sx= {{ ml: '-32px', width: '121%', height: 180 }}>

            <CardContent>

              <Box
                onMouseOver={ onMouseOver }
                onMouseOut={ onMouseOut }
                sx={{ mt: '-15px' }}
              >
                <Image 
                  src={productImage}
                  height={178}
                  alt="No se pudo cargar la imagen"
                  />
              </Box>

              <Box
                onMouseOver={ onMouseOver }
                onMouseOut={ onMouseOut }
                position="absolute" display={ isActive ? 'flex' : 'none' } 
                sx={{ bottom: 0, backgroundColor: '#d1d1d1', width: '91%', height: '110px', opacity: '0.78' }}
              >
                  <Typography variant="body2" color="#111111">
                    { isActive &&  `${ description }`}
                  </Typography>
              </Box>

            </CardContent>

          </CardActionArea>

          <Toolbar disableGutters sx={{ mt: '16px' }} >

            <Typography gutterBottom variant="h5" component="div" mt={1}>
                  $ 1500
            </Typography>

            <Box sx={{ flexGrow: 1 }} />

            <Fab size='medium' position='relative' sx={{ bgcolor: 'secondary.main', zIndex: '2' }}>
                  <FavoriteBorder color='primary' sx={{ color: '#141414' }}/>
            </Fab>
          </Toolbar>

        </Card>
      </Box>
    );
}



