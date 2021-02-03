import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import AlertDialogSlide from './AlertDialogSlide';

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

      <CardActionArea onClick = { handleClickOpen }>
        <Card className={classes.root}>
        
          <CardMedia
            className={classes.media}
            image={item.img[0]}
            title={item.title}
          />
        </Card>
      </CardActionArea>

    <AlertDialogSlide open = {open} handleClose = {handleClose} item = {item}/>
    </div>
  );
}