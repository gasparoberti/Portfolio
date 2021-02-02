import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AlertDialogSlide from './AlertDialogSlide';
import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 250,
    // height: 400,
  },
  media: {
    height: 250,
  },
});

export default function AppCard({item}) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

    {/* // <Link to={`/item/${id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}> */}
      <CardActionArea onClick = { handleClickOpen }>
        <Card className={classes.root}>
        
          <CardMedia
            className={classes.media}
            image={item.img[0]}
            title={item.title}
          />
          {/* <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.desc}
            </Typography>
          </CardContent> */}
        </Card>
      </CardActionArea>
    {/* // </Link> */}

    <AlertDialogSlide open = {open} handleClose = {handleClose} item = {item}/>
    </div>
  );
}