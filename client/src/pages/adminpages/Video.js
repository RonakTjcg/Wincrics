import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  IconButton,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import * as Yup from "yup";

// Define a base URL for the API
const API_URL = "http://localhost:3000/videos";

// Validation schema for the video form
const VideoSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  link: Yup.string().required("Link is required"),
});

function Video() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({
    id: null,
    title: "",
    link: "",
  });

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setVideos(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setLoading(false);
    }
  };

  const handleAddVideo = () => {
    setCurrentVideo({ id: null, title: "", link: "" });
    setOpenDialog(true);
  };

  const handleEditVideo = (video) => {
    setCurrentVideo(video);
    setOpenDialog(true);
  };

  const handleDeleteVideo = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });
      setVideos(videos.filter((video) => video.id !== id));
    } catch (error) {
      console.error("Error deleting video:", error);
    }
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setCurrentVideo({ id: null, title: "", link: "" });
  };

  const handleDialogSave = async (values, { setSubmitting }) => {
    const method = values.id ? "PUT" : "POST";
    const url = values.id ? `${API_URL}/${values.id}` : API_URL;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();

      if (values.id) {
        setVideos(
          videos.map((video) => (video.id === values.id ? data : video))
        );
      } else {
        setVideos([...videos, data]);
      }
      handleDialogClose();
    } catch (error) {
      console.error(`Error ${values.id ? "updating" : "adding"} video:`, error);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <>
      <Button
        variant="contained"
        onClick={handleAddVideo}
        style={{ width: "300px" }}
      >
        <AddIcon style={{ marginRight: "5px" }} />
        Add Video
      </Button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          {videos.map((video) => (
            <Card
              key={video.id}
              style={{ marginBottom: "10px", width: "300px" }}
            >
              <CardContent>
                <Typography variant="h6" component="div">
                  {video.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="div"
                >
                  {video.link}
                </Typography>
                <IconButton onClick={() => handleEditVideo(video)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDeleteVideo(video.id)}>
                  <DeleteIcon />
                </IconButton>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dialog for Adding/Editing Video */}
        <Dialog open={openDialog} onClose={handleDialogClose}>
          <DialogTitle>
            {currentVideo.id ? "Edit Video" : "Add Video"}
          </DialogTitle>
          <FormikForm
            currentVideo={currentVideo}
            handleDialogSave={handleDialogSave}
            handleClose={handleDialogClose}
          />
        </Dialog>
      </div>
    </>
  );
}

function FormikForm({ currentVideo, handleDialogSave, handleClose }) {
  const formik = useFormik({
    initialValues: {
      id: currentVideo.id || null,
      title: currentVideo.title || "",
      link: currentVideo.link || "",
    },
    validationSchema: VideoSchema,
    onSubmit: handleDialogSave,
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          id="title"
          name="title"
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <TextField
          fullWidth
          margin="dense"
          variant="outlined"
          id="link"
          name="link"
          label="Link"
          value={formik.values.link}
          onChange={formik.handleChange}
          error={formik.touched.link && Boolean(formik.errors.link)}
          helperText={formik.touched.link && formik.errors.link}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" disabled={formik.isSubmitting}>
          {currentVideo.id ? "Save" : "Add"}
        </Button>
      </DialogActions>
    </form>
  );
}

export default Video;
