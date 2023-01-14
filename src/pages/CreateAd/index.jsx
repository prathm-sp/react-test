import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import Modal from "@mui/material/Modal";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function CreateAd() {
  let query = useQuery();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleOpen = (e) => {
    e.preventDefault();
    setTimeout(() => {
      navigate("/select-ad-type");
      setOpen(false);
    }, 600);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div className="create-ad-root">
      <div className="create-ad-container">
        <p>Create Text & Media</p>
        <Grid container spacing={2}>
          <Grid container item xs={6} width={100}>
            <Grid item xs={12}>
              <p className="input-label">Heading 01</p>
              <TextField
                className="input"
                placeholder="Add a heading that would make users interested"
                hiddenLabel
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <p className="input-label">Heading 02</p>
              <TextField
                className="input"
                placeholder="Add a heading that would make users interested"
                hiddenLabel
                size="small"
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <p className="input-label">Description 01</p>
            <TextField
              placeholder="Add primary text to help users understand more about your products, services or offers"
              className="input"
              multiline
              rows={5}
              maxRows={6}
            />
          </Grid>
          {query.get("text-ad") !== "true" ? (
            <>
              <Grid item xs={4}>
                <p className="input-label">Landscape Marketing Image (1:9:1)</p>
                <TextField
                  className="input"
                  placeholder="Add the URL of the image you want to use for the ad"
                  hiddenLabel
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <p className="input-label">Potrait Marketing Image (4:5)</p>
                <TextField
                  className="input"
                  placeholder="Add the URL of the image you want to use for the ad"
                  hiddenLabel
                  size="small"
                />
              </Grid>
              <Grid item xs={4}>
                <p className="input-label">Square Marketing Image (1:1)</p>
                <TextField
                  className="input"
                  placeholder="Add the URL of the image you want to use for the ad"
                  hiddenLabel
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <p className="input-label">Video URL</p>
                <TextField
                  className="input"
                  placeholder="Add the URL of the video you want to use for the ad"
                  hiddenLabel
                  size="small"
                />
              </Grid>
            </>
          ) : null}
          <Grid item xs={6}>
            <p className="input-label">Business Name</p>
            <TextField
              className="input"
              placeholder="Add your business name"
              hiddenLabel
              size="small"
            />
          </Grid>
          <Grid item xs={6}>
            <p className="input-label">Button Label</p>
            <TextField
              className="input"
              placeholder="Select a label that that best suits your ad"
              hiddenLabel
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <p className="input-label">Website URL</p>
            <TextField
              className="input"
              placeholder="Add the URL of the landing page you want to redirect users to"
              hiddenLabel
              size="small"
            />
          </Grid>
        </Grid>
        <div className="btn-container">
          <Link to="/select-ad-type">
            <Button className="back-button" variant="contained">
              Back
            </Button>
          </Link>
          <Link to="/create-ad">
            <Button
              onClick={handleOpen}
              className="submit-button"
              variant="contained"
            >
              Submit
            </Button>
          </Link>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box textAlign={"center"} sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <CheckCircleIcon color="info" />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Submitted
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default CreateAd;
