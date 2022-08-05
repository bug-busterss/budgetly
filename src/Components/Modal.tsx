import { useState } from "react";
import { Modal, Button, Group, Grid } from "@mantine/core";
import { FloatingLabelInput } from "./FloatingInput";

function Demo() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal size="55%" opened={opened} onClose={() => setOpened(false)}>
        <Grid p="lg">
          <FloatingLabelInput />
        </Grid>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
      </Group>
    </>
  );
}

export default Demo;
