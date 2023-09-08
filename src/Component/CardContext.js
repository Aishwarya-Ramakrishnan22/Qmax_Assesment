import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BasicModal from "./Modal";
const cardStyle = {
  minWidth: 275,
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Add shadow here
};
const CardContext = ({id, title, body, deletePost }) => {
  return (
    <div style={cardStyle}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2">
            {body}
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
        <BasicModal id={id} title={title} body={body} />
          <Button onClick={deletePost}  variant="outlined" color="error">
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardContext;
