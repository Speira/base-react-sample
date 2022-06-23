```js static
import Input from '~components/Input'

function DisplayInput(){
  return <Input value"Test value" onChange={() => null}/>
}
```

Simple Input example:

```js
<Input width="100px" value="value" />
```

Input error status

```js
<Input status="danger" value="value" />
```

Input warning status

```js
<Input status="warning" value="value" />
```

Date Input warning

```js
<Input status="warning" type="date" />
```

Input with isLongtext prop

```js
<Input isLongtext />
```
