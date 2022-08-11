```js static
import Title from '~components/Title'

function DisplayTitle() {
  return (
    <Title type="h1" left block status="info">
      Title
    </Title>
  )
}
```

Title examples:

```js
<Title>H1 Title </Title>
```

```js
<Title left size="28px">
  Left Title
</Title>
```

```js
<Title type="h2" size="32px" status="info">
  H2 Title with status = info
</Title>
```

```js
<Title type="h1" size="40px" status="danger">
  H1 with status danger
</Title>
```

```js
<Title type="h1" size="40px" status="warning">
  H1 with status warning
</Title>
```

```js
<Title type="h1" center size="48px" status="success">
  H1 center status success
</Title>
```

```js
<Title type="h2" size="20px" margin="10px">
  Small H2 Title
</Title>
```

```js
import Wrapper from '../Wrapper'
;<Wrapper primary>
  <Title type="h2" light size="20px" margin="10px">
    Small H2 Title with light prop
  </Title>
</Wrapper>
```
