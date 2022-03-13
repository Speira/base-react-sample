```js static
import Link from '~components/Link'

function DisplayLink() {
  return <Link to="#" />
}
```

Simple Link:

```js
import { BrowserRouter as Router } from 'react-router-dom'
;<Router>
  <Link to="#">Link</Link>
</Router>
```

Simple disabled Link:

```js
import { BrowserRouter as Router } from 'react-router-dom'
;<Router>
  <Link to="#" disabled>
    Link
  </Link>
</Router>
```

Boxed primary link:

```js
import { BrowserRouter as Router } from 'react-router-dom'
;<Router>
  <Link boxed primary to="#">
    Link
  </Link>
</Router>
```

Active Boxed primary link:

```js
import { BrowserRouter as Router } from 'react-router-dom'
;<Router>
  <Link boxed primary active to="#">
    Link
  </Link>
</Router>
```

Boxed secondary link:

```js
import { BrowserRouter as Router } from 'react-router-dom'
;<Router>
  <Link boxed secondary to="#">
    Link
  </Link>
</Router>
```
