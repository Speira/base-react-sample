```js static
import Select from '~components/Select'

function DisplaySelect(){
  return <Select options=['One', 'Two', {key: '3', label:'Three'}]/>
}

```

Simple Select example :

```js
<Select options={['Example 1', 'Example 2', 'Example 3']}>
  Select elements
</Select>
```

Primary Select example :

```js
<Select primary options={['Example 1', 'Example 2', 'Example 3']}>
  Select elements
</Select>
```

Secondary Select example :

```js
<Select secondary options={['Example 1', 'Example 2', 'Example 3']}>
  Select elements
</Select>
```

Tertiary Select example :

```js
<Select tertiary options={['Example 1', 'Example 2', 'Example 3']}>
  Select elements
</Select>
```

Quaternary Select example :

```js
<Select quaternary options={['Example 1', 'Example 2', 'Example 3']}>
  Select elements
</Select>
```
