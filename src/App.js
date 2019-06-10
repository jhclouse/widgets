import React from "react";

// Data
import widgets from "./WidgetData";

// Icons
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TableChartIcon from "@material-ui/icons/TableChart";

// Tab bar
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

// Data table
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

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
      {value === 0 && (
        <TabContainer>
          <Table>
            <TableHead>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Revenue</TableCell>
              <TableCell>Time</TableCell>
            </TableHead>

            <TableBody>
              {widgets.map(widget => (
                <TableRow>
                  <TableCell>{widget.name}</TableCell>
                  <TableCell>{widget.description}</TableCell>
                  <TableCell>{widget.revenue}</TableCell>
                  <TableCell>{widget.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabContainer>
      )}
      {value === 1 && <TabContainer>Graph</TabContainer>}
    </div>
  );
}

export default App;
