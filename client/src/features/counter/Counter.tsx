import { Button, ButtonGroup, Typography } from "@mui/material";
import { useStore } from "../../lib/hooks/useStore";
import { Observer } from "mobx-react-lite";
export default function Counter() {
  const { counterStore } = useStore();

  return (
    <>
      <Observer>
        {() => (
          <>
            <Typography variant="h4" gutterBottom>
              {counterStore.title}
            </Typography>
            <Typography variant="h6">
              The count is: {counterStore.count}
            </Typography>
          </>
        )}
      </Observer>
      <ButtonGroup sx={{ mt: 3 }}>
        <Button
          onClick={() => counterStore.decrement()}
          variant="contained"
          color="error"
        >
          Decrement
        </Button>
        <Button
          onClick={() => counterStore.increment()}
          variant="contained"
          color="success"
        >
          Increment
        </Button>
        <Button
          onClick={() => counterStore.increment(5)}
          variant="contained"
          color="primary"
        >
          Increment by 5
        </Button>
      </ButtonGroup>
    </>
  );
}
