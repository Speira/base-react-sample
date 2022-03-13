```js static
import Table from '~components/Table'
import TableRow from '~components/TableRow'
import TableRowItem from '~components/TableRowItem'

function DisplayTable() {
  return (
    <Table height="10em" width="20em" triggerOffset={50}>
      <TableRow isHead height="48px">
        <TableRowItem isCenter>Value</TableRowItem>
        <TableRowItem>Value</TableRowItem>
        <TableRowItem>Value</TableRowItem>
      </TableRow>
      <TableRow height="32px">
        <TableRowItem>Value</TableRowItem>
        <TableRowItem>Value</TableRowItem>
        <TableRowItem>Value</TableRowItem>
      </TableRow>
    </Table>
  )
}

function DisplayCustomTable() {
  return (
    <Table height="10em" width="20em" triggerOffset={50}>
      <TableRow isHead columns="32px 1fr 2fr" height="48px">
        <TableRowItem>Value</TableRowItem>
        <TableRowItem>Value</TableRowItem>
        <TableRowItem>Value</TableRowItem>
      </TableRow>
      <TableRow columns="32px 1fr 2fr" height="32px">
        <TableRowItem>Value</TableRowItem>
        <TableRowItem>Value</TableRowItem>
        <TableRowItem>Value</TableRowItem>
      </TableRow>
    </Table>
  )
}
```

Table example:

```js
import Table from '../Table'
import TableRow from '../TableRow'
import TableRowItem from '../TableRowItem'
;<Table minWidth="30em" maxHeight="20em" columns="1fr 1fr 1fr">
  <TableRow isHead>
    <TableRowItem isHead>Value</TableRowItem>
    <TableRowItem isHead>Value</TableRowItem>
    <TableRowItem isHead>Value</TableRowItem>
  </TableRow>
  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((elem) => (
    <TableRow key={elem}>
      <TableRowItem isHead>Value</TableRowItem>
      <TableRowItem isHead>Value</TableRowItem>
      <TableRowItem isHead>Value</TableRowItem>
    </TableRow>
  ))}
</Table>
```
