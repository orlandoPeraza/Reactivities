import { Link } from "react-router";
import type { Profile } from "../../lib/types";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Typography,
} from "@mui/material";
import { Person } from "@mui/icons-material";

type Props = {
  profile: Profile;
};
export default function ProfileCard({ profile }: Props) {
  return (
    <Link to={`/profiles/${profile.id}`} style={{ textDecoration: "none" }}>
      <Card
        sx={{
          p: 2,
          width: 250,
          height: 340,
          display: "flex",
          flexDirection: "column",
          borderRadius: 3,
          textDecoration: "none",
        }}
        elevation={4}
      >
        <CardMedia
          component="img"
          src={profile?.imageUrl || "/images/user.png"}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            zIndex: 50,
          }}
          alt={profile.displayName + "image"}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Box display="flex" flexDirection={"column"} gap={1}>
            <Typography variant="h5">{profile.displayName}</Typography>
            {profile.bio && (
              <Typography
                variant="body2"
                sx={{
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {profile.bio}
              </Typography>
            )}
            {profile.following && (
              <Chip
                size="small"
                label="Following"
                color="secondary"
                variant="outlined"
              />
            )}
          </Box>
        </CardContent>
        <Divider sx={{ mb: 2 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Person />
          <Typography sx={{ ml: 1 }}>
            {profile.followersCount} Followers
          </Typography>
        </Box>
      </Card>
    </Link>
  );
}
