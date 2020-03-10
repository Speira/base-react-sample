Simple Alert example:

```js
<Alert
  isOpen
  message="An error has crept into the application settings. Please try again. If the problem persists, please contact your administrator. Our developers will deal with your problem as soon as possible. "
/>
```

Warning Alert example:

```js
<Alert
  type="warning"
  isOpen
  title="Attention, some warnings appear:"
  message={['first warning', 'second warning', 'third warning']}
/>
```

Info Alert example:

```js
<Alert type="info" isOpen message="Example" />
```

Success Alert example:

```js
<Alert
  type="success"
  isOpen
  title="Congratulation !"
  message="Your are now part of our community"
/>
```
