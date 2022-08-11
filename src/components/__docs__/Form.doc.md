```js static
import Form from '~components/Form'
import Input from '~components/Input'
import Fieldset from '~components/Fieldset'
import Label from '~components/Label'

function DisplayForm() {
  return (
    <Form column>
      <Fieldset legend="Description">
        <Label label="Summary">
          <Input />
        </Label>
        <Label label="Address">
          <Input />
        </Label>
      </Fieldset>
      <Fieldset legend="Informations">
        <Label label="Title">
          <Input />
        </Label>
        <Label label="Job">
          <Input />
        </Label>
      </Fieldset>
    </Form>
  )
}
```

Simple Form example:

```js
<Form>Form elements</Form>
```

Form primary implementation with a single fieldset:

```js
import Form from '../Form'
import Input from '../Input'
import Fieldset from '../Fieldset'
import Label from '../Label'
;<Form column primary>
  <Fieldset row>
    <Label label="Summary">
      <Input />
    </Label>
    <Label label="Address">
      <Input />
    </Label>
  </Fieldset>
</Form>
```

Form secondary implementation with a single fieldset:

```js
import Form from '../Form'
import Input from '../Input'
import Fieldset from '../Fieldset'
import Label from '../Label'
;<Form column secondary>
  <Fieldset column>
    <Label label="Summary">
      <Input />
    </Label>
    <Label label="Address">
      <Input />
    </Label>
  </Fieldset>
</Form>
```

Form tertiary implementation with a single fieldset:

```js
import Form from '../Form'
import Input from '../Input'
import Fieldset from '../Fieldset'
import Label from '../Label'
;<Form column tertiary>
  <Fieldset column>
    <Label label="Summary">
      <Input />
    </Label>
    <Label label="Address">
      <Input />
    </Label>
  </Fieldset>
</Form>
```

Form quaternary implementation with a single fieldset:

```js
import Form from '../Form'
import Input from '../Input'
import Fieldset from '../Fieldset'
import Label from '../Label'
;<Form column quaternary>
  <Fieldset column>
    <Label label="Summary">
      <Input />
    </Label>
    <Label label="Address">
      <Input />
    </Label>
  </Fieldset>
</Form>
```

Form secondary implementation with multiple Fieldset (with legend):

```js
import Form from '../Form'
import Input from '../Input'
import Fieldset from '../Fieldset'
import Label from '../Label'
;<Form column secondary>
  <Fieldset legend="Description" column>
    <Label label="Summary">
      <Input />
    </Label>
    <Label label="Address">
      <Input />
    </Label>
  </Fieldset>
  <Fieldset legend="Informations">
    <Label>
      <Input />
    </Label>
  </Fieldset>
</Form>
```
