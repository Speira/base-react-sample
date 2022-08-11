```js static
import Label from '~components/Label'

function displayLabel() {
  return <Label required>content</Label>
}
```

Simple Label example:

```js
<Label label="Text label" />
```

Required label

```js
<Label label="Required text label" required />
```

Label with Input

```js
import Input from '../Input'
;<Label label="Text label">
  <Input />
</Label>
```
