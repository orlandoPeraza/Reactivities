import { useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";
import { ImageList, ImageListItem, Typography } from "@mui/material";

export default function ProfilePhotos() {
  const { id } = useParams();
  const { photos, loadingPhotos } = useProfile(id);

  if (loadingPhotos) return <Typography>Loading photos...</Typography>;
  if (!photos || photos.length === 0)
    return <Typography>No photos found for this user</Typography>;

  return (
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
  );
}
