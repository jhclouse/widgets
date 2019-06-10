import React from "react";

import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TableChartIcon from "@material-ui/icons/TableChart";

import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const TabContainer = props => (
  <Typography component="div" style={{ padding: 8 * 3 }}>
    {props.children}
  </Typography>
);

function App() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Data" icon={<TableChartIcon />} />
          <Tab label="Graph" icon={<TrendingUpIcon />} />
        </Tabs>
      </AppBar>
      {value === 0 && <TabContainer>Data Table</TabContainer>}
      {value === 1 && <TabContainer>Graph</TabContainer>}
    </div>
  );
}

export default App;
