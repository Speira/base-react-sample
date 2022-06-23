```js static
import Modal from '~components/Modal'

function DisplayModal() {
  return (
    <Modal open closeModal>
      Item
    </Modal>
  )
}
```

Simple Modal example:

```js
import Button from '../Button'
;<div>
  <Button onClick={() => setState({ isOpen: true })}>Open Modal</Button>
  <Modal isOpen={state.isOpen} onCloseClick={() => setState({ isOpen: false })}>
    Modal element
  </Modal>
</div>
```
