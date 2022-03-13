```js static
import Button from '~components/Button'

function DisplayButton() {
  const executeFunction = () => null
  return <Button onClick={executeFunction}>button text</Button>
}
```

Simple Button example:

```js
<Button status="info">Hello world</Button>
```

```js
<Button disabled>Disabled button</Button>
```

```js
<Button unboxed>Unboxed button</Button>
```

```js
<Button rounded height="5em" width="5em">
  Rounded button
</Button>
```

```js
<Button status="success" height="2.5em" width="5em">
  yes !
</Button>
```

```js
<Button status="warning">Warning button</Button>
```

```js
<Button status="danger">Danger button</Button>
```
