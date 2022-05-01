```js static
import Wrapper from '~components/Wrapper'

function DisplayWrapper() {
  return (
    <Wrapper primary style={{ width: '20em', height: '10em' }}>
      Content
    </Wrapper>
  )
}
```

```js static
import Wrapper from '~components/Wrapper'

function DisplayResponsibleWrapper(props) {
  const { rate } = props
  return (
    <Wrapper
      primary
      style={{
        realtime: { left: `calc(${rate} * 10px)` },
        base: {
          borderRadius: '1em',
          height: '10em',
          padding: '1em',
          position: 'relative',
          width: '20em',
        },
        xs: { width: '10em' },
        sm: { width: '15em' },
        md: { padding: '2em' },
        lg: { width: '25em' },
        xl: { minHeight: '10%' },
      }}
    >
      Content
    </Wrapper>
  )
}
```

Wrapper Example:

```js
<Wrapper style={{ width: '20em', height: '10em' }}>Content</Wrapper>
```

Wrapper with border:

```js
<Wrapper
  style={{
    width: '20em',
    height: '10em',
    border: '1px solid black',
    borderRadius: '1em',
    padding: '1em',
  }}
>
  Content
</Wrapper>
```

Wrapper Primary:

```js
<Wrapper
  primary
  style={{
    width: '20em',
    height: '10em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  Content
</Wrapper>
```

Wrapper secondary:

```js
<Wrapper
  secondary
  style={{
    width: '20em',
    height: '10em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '2em',
    boxShadow: '1px 1px 1px black',
  }}
>
  Content
</Wrapper>
```

Wrapper tertiary:

```js
<Wrapper
  tertiary
  style={{
    width: '40em',
    height: '10em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  Content
</Wrapper>
```

Wrapper quaternary:

```js
<Wrapper
  quaternary
  style={{
    width: '20em',
    height: '5em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  Content
</Wrapper>
```

Wrapper status="info":

```js
<Wrapper
  status="info"
  style={{
    width: '20em',
    height: '5em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  Content
</Wrapper>
```

Wrapper status="danger":

```js
<Wrapper
  status="danger"
  style={{
    width: '20em',
    height: '5em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  Content
</Wrapper>
```

Wrapper status="warning":

```js
<Wrapper
  status="warning"
  style={{
    width: '20em',
    height: '5em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  Content
</Wrapper>
```

Wrapper status="success":

```js
<Wrapper
  status="success"
  style={{
    width: '20em',
    height: '5em',
    padding: '1em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  Content
</Wrapper>
```
