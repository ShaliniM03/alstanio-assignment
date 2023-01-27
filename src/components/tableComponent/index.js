import { useState } from 'react';
import {Table, Checkbox, ScrollArea, Avatar,createStyles } from '@mantine/core';


const useStyles = createStyles((theme) => ({
  table:{
    border:'1px solid #dee2e6'
  }
}));

export function TableComponent({ data }) {
  const { classes } = useStyles();
  const [selection, setSelection] = useState(['']);
  
  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
    );

  const toggleAll = () =>
    setSelection((current) => (current.length === data.length ? [] : data.map((item) => item.id)));

  const rows = data.map((item) => {
    return (
      <tr key={item.id}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Avatar size={26} src={item.avatar} radius={26} />
        </td>
        <td>{item.email}</td>
      </tr>
    );
  });

  return (
    <ScrollArea m={20}>
      <Table verticalSpacing="sm" ta='left' className={classes.table}>
        <thead>
          <tr>
            <th style={{ width: 40 }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === data.length}
                indeterminate={selection.length > 0 && selection.length !== data.length}
                transitionDuration={0}
              />
            </th>
            <th>User</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}

export default TableComponent;