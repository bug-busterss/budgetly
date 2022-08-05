import { AppShell } from "@mantine/core";
import { useState } from "react";
import ExpenseCard from "./Components/Card";
import HeaderTabsColored from "./Components/DS_Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <AppShell>
        <HeaderTabsColored
          user={{
            name: "",
            image: "",
          }}
          tabs={["Dashboard", "Insights", "About"]}
        />
        <ExpenseCard />
      </AppShell>
    </div>
  );
}

export default App;
