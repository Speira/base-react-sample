import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

/**
 * StyledTableRow
 * @component
 */
const StyledTableRow = styled.div`
  display: grid;
  border-bottom: 1px solid var(--color-secondary);
  min-height: 4em;
  transition: opacity, top,
    background-color 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:nth-child(odd) {
    background-color: var(--color-secondary);
  }
  &.head {
    background-color: transparent;
    border-bottom: 2px solid var(--color-primary);
    z-index: 1;
  }
  &.sticky {
    position: sticky;
    top: 0;
    background-color: var(--color-primary);
    opacity: 0.95;
    box-shadow: 0 0 20px -3px var(--color-dark);
    height: 3em;
  }
`

/**
 *
 * TableRow
 * @component
 *
 * @desc::  A row in a Table
 *   Adding optional head className and set default grid columns here
 *
 * @see See components/Table
 *
 */
function TableRow(props) {
  const {
    children,
    className,
    columns,
    height,
    isHead,
    isTableScrolling,
    ...rest
  } = props
  const [isSticky, setIsSticky] = React.useState(false)

  const gridTemplateColumns = React.useMemo(() => {
    if (columns) return columns
    return `repeat(${React.Children.count(children)}, 1fr)`
  }, [children, columns])

  React.useEffect(() => {
    if (isHead && isSticky !== isTableScrolling) {
      setIsSticky(isTableScrolling)
    }
  }, [isHead, isSticky, isTableScrolling])

  return (
    <StyledTableRow
      {...rest}
      style={{ gridTemplateColumns, height }}
      className={`${className} ${isHead && 'head'} ${isSticky && 'sticky'}`}>
      {children}
    </StyledTableRow>
  )
}
TableRow.defaultProps = {
  children: undefined,
  className: '',
  columns: '',
  height: '',
  isHead: false,
  isTableScrolling: false,
}
TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.string, // provided by parent src/Table component
  height: PropTypes.string,
  isHead: PropTypes.bool,
  isTableScrolling: PropTypes.bool, // provided by parent src/Table component
}

export default TableRow
