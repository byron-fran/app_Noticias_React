import { Card, CardActions, CardMedia, CardContent, Link, Typography, Grid } from "@mui/material"

// eslint-disable-next-line react/prop-types
const Noticia = ({noticia}) => {
    // eslint-disable-next-line react/prop-types
    const {url, urlToImage, title, description, source} = noticia;

  return (
    <Grid item md={6} lg={4}>
         <Card>
            {urlToImage &&  <CardMedia
                            component='img'
                            alt="image news"
                            image={urlToImage}
                            />}
           <CardContent>
                {/* eslint-disable-next-line react/prop-types*/}
                <Typography variant="h5" component='div' color='error'>{source.name}</Typography>
                <Typography variant="h5" component='div'>{title}</Typography>
      
                <Typography variant="body2" >{description}</Typography>
            </CardContent>                 
            <CardActions>
                <Link href={url}
                    target='_blank'
                    variant="button"
                    color='primary'>
                    Leer Noticia
                </Link>
            </CardActions>
        </Card>
    </Grid>
  )
}

export default Noticia