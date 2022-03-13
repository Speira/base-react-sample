```js static
import List from '~components/List'
import ListItem from '~components/ListItem'

function DisplayList() {
  return (
    <List listStyle="circle">
      <ListItem>Item</ListItem>
    </List>
  )
}
```

Simple List example:

```js
import ListItem from '../ListItem'
;<List>
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

List with circle example:

```js
import ListItem from '../ListItem'
;<List listStyle="circle">
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
  <ListItem>Item 3</ListItem>
</List>
```

List with Link

```js
import { BrowserRouter as Router } from 'react-router-dom'
import ListItem from '../ListItem'
import Link from '../Link'
;<Router>
  <List>
    <ListItem>
      <Link to="#">Item 1</Link>
    </ListItem>
    <ListItem>
      <Link to="#">Item 2</Link>
    </ListItem>
    <ListItem>
      <Link to="#"> Item 3</Link>
    </ListItem>
  </List>
</Router>
```
