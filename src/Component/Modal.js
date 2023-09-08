import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const contentStyle = {
  maxHeight: "300px", // Adjust the maximum height as needed
  overflowY: "auto",
};

export default function BasicModal({ id, title, body }) {
  const [open, setOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const handleOpen = () => {
    setOpen(true);

    // Fetch comments based on the received id
    // Replace this with your actual API call to fetch comments
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  };

  const handleClose = () => setOpen(false);
  // console.log(id);
  return (
    <div>
      <Button onClick={handleOpen}>View Comments</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {body}
          </Typography>
          <hr></hr>
          <Typography variant="h6" component="h2">
            Comments
          </Typography>
          <div style={contentStyle}>
            {comments.map((comment) => (
              <div key={comment.id}>
                <Typography variant="button" component="h4">{comment.name} : </Typography>
                <Typography variant="caption" >{comment.body}</Typography>
                <hr></hr>
              </div>
            ))}
          </div>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
