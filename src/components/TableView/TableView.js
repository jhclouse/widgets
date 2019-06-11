import React from "react";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

const RowData = ({ widget }) => (
  <TableRow>
    <TableCell>{widget.name}</TableCell>
    <TableCell>{widget.description}</TableCell>
    <TableCell>{widget.revenue}</TableCell>
    <TableCell>{widget.timestamp}</TableCell>
  </TableRow>
);

export default ({ widgets }) => (
  <Table>
    <TableHead>
      <TableCell>Name</TableCell>
      <TableCell>Description</TableCell>
      <TableCell>Revenue</TableCell>
      <TableCell>Time</TableCell>
    </TableHead>

    <TableBody>
      {widgets.map(widget => (
        <RowData widget={widget} />
      ))}
    </TableBody>
  </Table>
);
