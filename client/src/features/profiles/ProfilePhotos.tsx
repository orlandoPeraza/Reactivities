import { useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";
import {
  Box,
  Button,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ProfilePhotos() {
  const { id } = useParams();
  const { photos, loadingPhotos, isCurrentUser } = useProfile(id);
  const [editMode, setEditMode] = useState(false);

  if (loadingPhotos) return <Typography>Loading photos...</Typography>;
  if (!photos || photos.length === 0)
    return <Typography>No photos found for this user</Typography>;

  return (
    <Box>
      {isCurrentUser && (
        <Box>
          <Button onClick={() => setEditMode(!editMode)}>
            {editMode ? "Cancel" : "Add photo"}
          </Button>
        </Box>
      )}
      {editMode ? (
        <div>Photo widget goes here</div>
      ) : (
        <ImageList sx={{ height: 450 }} cols={6} rowHeight={164}>
          {photos.map((item) => (
            <ImageListItem key={item.id}>
              <img
                srcSet={`${item.url.replace(
                  "/upload/",
                  "/upload/w_164,h_164,c_crop,f_auto,dpr_2,g_face/"
                )}`}
                src={`${item.url.replace(
                  "/upload/",
                  "/upload/w_164,h_164,c_crop,f_auto,g_face/"
                )}`}
                alt={"user profile image"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </Box>
  );
}
