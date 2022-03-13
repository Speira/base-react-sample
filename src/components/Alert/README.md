```js static
import Alert from '~components/Alert'

function DisplayAlert() {
  return <Alert message="Message" title="Title" status="info" />
}
```

Simple Alert example:

```js
<Alert message="Test message" />
```

Warning Alert example:

```js
<Alert
  status="warning"
  title="Attention, some warnings appear:"
  message={['first warning', 'second warning', 'third warning']}
/>
```

Info Alert example:

```js
<Alert status="info" message="Example" />
```

Success Alert example:

```js
<Alert
  status="success"
  title="Congratulation !"
  message="Your are now a member of our community"
/>
```
