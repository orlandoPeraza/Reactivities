import { Grid2, List, ListItem, ListItemText } from "@mui/material";

type Props = {
  activities: Activity[];
};
export default function ActivityDashboard({ activities }: Props) {
  return (
    <Grid2 container>
      <Grid2 size={9}>
        <List>
          {activities.map((activity) => (
            <ListItem key={activity.id}>
              <ListItemText>{activity.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid2>
    </Grid2>
  );
}
