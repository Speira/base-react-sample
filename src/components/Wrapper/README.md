Simple Wrapper example:

```js
<Wrapper
  display="flex"
  alignitems="center"
  justifycontent="center"
  width="100%"
  height="220px"
  backgroundcolor="aliceblue">
  Hello world
</Wrapper>
```

More complexe Wrapper example:

```js
<Wrapper
  display="grid"
  gridtemplatecolumns="1fr 1fr 1fr"
  padding="20px 0px"
  borderradius="20px"
  width="100%"
  height="80px"
  backgroundcolor="aliceblue">
  <Wrapper display="flex" justifycontent="center" alignitems="flex-start">
    <span>Span 1</span>
  </Wrapper>
  <Wrapper
    display="flex"
    justifycontent="center"
    alignitems="center"
    backgroundcolor="hotpink">
    <span>Span 2</span>
  </Wrapper>
  <Wrapper
    display="flex"
    justifycontent="center"
    alignitems="flex-end"
    border="1px solid white">
    <span>Span 3</span>
  </Wrapper>
</Wrapper>
```
