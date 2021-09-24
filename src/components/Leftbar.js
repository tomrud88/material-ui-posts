import { Container, makeStyles, Typography } from "@material-ui/core";
import { Home, PermIdentity, List, CameraEnhance,PlayCircleOutline, PhoneAndroid, CollectionsBookmark, Storefront, Settings,Logout, ExitToApp} from "@material-ui/icons";




const useStyles = makeStyles((theme)=>({
    container:{
      paddingTop:theme.spacing(10),
      backgroundColor: theme.palette.primary.main,
      position:'sticky',
      top:0,
      height:'100vh',
      color:'white',
      [theme.breakpoints.up('sm')]:{
        backgroundColor:'white',
        color:'black',
        border:'solid 1px gray'
      }
    },
    item:{
      display:'flex',
      alignItems:'center',
      marginBottom:theme.spacing(4),
      [theme.breakpoints.down('sm')]:{
        marginBottom: theme.spacing(3),
        cursor:'pointer',
        justifyContent:'center'
      }
    },
    text:{
      fontWeight:[500],
      [theme.breakpoints.down('sm')]:{
        display:'none'
      }
    },
    icon:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      [theme.breakpoints.up('sm')]:{
        marginRight:theme.spacing(1),
        fontSize: '18px'
      }
    }
  }))

const Leftbar = () => {

  const classes = useStyles()
  return (
  <Container className={classes.container}>
   <div className={classes.item}>
     <Home className={classes.icon}/>
     <Typography className={classes.text}>Homepage</Typography>
   </div>
   <div className={classes.item}>
     <PermIdentity className={classes.icon}/>
     <Typography className={classes.text}>Friends</Typography>
   </div>
   <div className={classes.item}>
     <List className={classes.icon}/>
     <Typography className={classes.text}>Lists</Typography>
   </div>
   <div className={classes.item}>
     <CameraEnhance className={classes.icon}/>
     <Typography className={classes.text}>Camera</Typography>
   </div>
   <div className={classes.item}>
     <PlayCircleOutline className={classes.icon}/>
     <Typography className={classes.text}>Videos</Typography>
   </div>
   <div className={classes.item}>
     <PhoneAndroid className={classes.icon}/>
     <Typography className={classes.text}>Apps</Typography>
   </div>
   <div className={classes.item}>
     <CollectionsBookmark className={classes.icon}/>
     <Typography className={classes.text}>Collections</Typography>
   </div>
   <div className={classes.item}>
     <Storefront className={classes.icon}/>
     <Typography className={classes.text}>MarketPlace</Typography>
   </div>
   <div className={classes.item}>
     <Settings className={classes.icon}/>
     <Typography className={classes.text}>Settings</Typography>
   </div>
   <div className={classes.item}>
     <ExitToApp className={classes.icon}/>
     <Typography className={classes.text}>Logout</Typography>
   </div>
  </Container>
  )
};

export default Leftbar;