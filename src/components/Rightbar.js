import { Avatar, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { Container } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme)=>({
  container:{
    paddingTop:theme.spacing(10),
    position:'sticky',
    top:0
  },
  title:{
    fontSize:20,
    fontWeight:500,
    color:'#444'
  },
  link:{
    marginRight:theme.spacing(2),
    fontSize:15,
  }
  }))

const Rightbar = () => {

  const classes = useStyles()
  return (
    <Container className={classes.container}>
     <Typography className={classes.title}>
       Online Friends
     </Typography> 
     <AvatarGroup max={4} style={{marginBottom:'20px'}}>
  <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
  <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
  <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
  <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
  <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
</AvatarGroup>
<Typography className={classes.title} gutterBottom>Gallery</Typography>
<ImageList  rowHeight={100} className={classes.imageList} cols={2} rows={3} gap={8}>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=242&h=242&fit=crop&auto=format'
        alt='breakfast'
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=121&h=121&fit=crop&auto=format'
        alt='hamburger'
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=242&h=242&fit=crop&auto=format'
        alt='honey'
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=121&h=121&fit=crop&auto=format'
        alt='star'
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=121&h=121&fit=crop&auto=format'
        alt='tomato'
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=121&h=121&fit=crop&auto=format'
        alt='radio'
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format'
        alt='hats'
      />
    </ImageListItem>
    <ImageListItem >
      <img
        src='https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format'
        alt='paprotka'
      />
    </ImageListItem>
</ImageList>
  <Typography className={classes.title} gutterBottom>
    Categories
  </Typography>
  <Link href="#" className={classes.link} variant='body2'>
    Sport
  </Link>
  <Link href="#" className={classes.link} variant='body2'>
    Food
  </Link>
  <Link href="#" className={classes.link} variant='body2'>
    Movies
  </Link>
  <Divider flexItem style={{marginBottom:10}}/>
  <Link href="#" className={classes.link} variant='body2'>
    Science
  </Link>
  <Link href="#" className={classes.link} variant='body2'>
    Stocks
  </Link>
  </Container>
  )
};

export default Rightbar;