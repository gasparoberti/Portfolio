import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 400,
  },
  media: {
    height: 200,
  },
});

export default function AppCard({id, title, desc, img}) {
  const classes = useStyles();

  return (
    <Link to={`/item/${id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
      <CardActionArea>
        <Card className={classes.root}>
        
          <CardMedia
            className={classes.media}
            image={img}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Link>
    
    
  );
}