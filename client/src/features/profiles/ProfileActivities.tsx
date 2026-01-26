import { useEffect, useState, type SyntheticEvent } from "react";
import { Link, useParams } from "react-router";
import { useProfile } from "../../lib/hooks/useProfile";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid2,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { format } from "date-fns";
import type { Activity } from "../../lib/types";

export default function ProfileActivities() {
  const [activeTab, setActiveTab] = useState(0);
  const { id } = useParams();
  const { userActivities, setFilter, loadingUserActivities } = useProfile(id);
  useEffect(() => {
    setFilter("future");
  }, [setFilter]);
  const tabs = [
    { menuItem: "Future Events", key: "future" },
    { menuItem: "Past Events", key: "past" },
    { menuItem: "Hosting", key: "hosting" },
  ];
  const handleTabChange = (_: SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    setFilter(tabs[newValue].key);
  };
  return (
    <Box>
      <Grid2 container spacing={2}>
        <Grid2 size={12}>
          <Tabs value={activeTab} onChange={handleTabChange}>
            {tabs.map((tab, index) => (
              <Tab label={tab.menuItem} key={index} />
            ))}
          </Tabs>
        </Grid2>
      </Grid2>
      {(!userActivities || userActivities.length === 0) &&
      !loadingUserActivities ? (
        <Typography mt={2}>No activities to show</Typography>
      ) : null}
      <Grid2
        container
        spacing={2}
        sx={{ marginTop: 2, height: 400, overflow: "auto" }}
      >
        {userActivities &&
          userActivities.map((activity: Activity) => (
            <Grid2 size={2} key={activity.id}>
              <Link
                to={`/activities/${activity.id}`}
                style={{ textDecoration: "none" }}
              >
                <Card
                  elevation={4}
                  sx={{
                    height: 220,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      aspectRatio: "16 / 9",
                      backgroundImage: `url(/images/categoryImages/${activity.category}.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      textAlign="center"
                      mb={1}
                      sx={{
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {activity.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      textAlign="center"
                      display="flex"
                      flexDirection="column"
                    >
                      <span>{format(activity.date, "do LLL yyyy")}</span>
                      <span>{format(activity.date, "h:mm a")}</span>
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid2>
          ))}
      </Grid2>
    </Box>
  );
}
