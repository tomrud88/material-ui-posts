import { Button, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Card,CardActionArea,CardMedia } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    card:{
        marginBottom:theme.spacing(5)
    },
    media:{
      height: 250,
      [theme.breakpoints.down('sm')]:{
         height:150,
      }
    }
    }))
  
  const Post = () => {
  
    const classes = useStyles()
    return (
      <Card className={classes.card}>
        <CardActionArea>
           <CardMedia className={classes.media}
            image="https://media.istockphoto.com/photos/colorful-vegetables-and-fruits-vegan-food-in-rainbow-colors-picture-id1284690585"
            title='My Post'
            />
            <CardContent>
              <Typography  gutterBottom variant='h5'>
                  My First Post
              </Typography>
              <Typography variant='body2'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              </Typography>    
            </CardContent>    
        </CardActionArea>
        <CardActions>
          <Button 
            size='small' 
            color='primary'>
              Share
          </Button>
          <Button 
            size='small' 
            color='primary'>
              Learn More
          </Button>    
        </CardActions>  
      </Card>
    )
  };
  
  export default Post;