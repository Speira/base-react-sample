import React from 'react';
import PropTypes from 'prop-types';
import { colorsThemesList } from '~contexts/ThemeContext';
import { withAsyncErrorHandling } from '~contexts/ErrorContext';
import BaseDropdown, { DropdownButton, DropdownContent } from './style';

/**
 * Dropdown
 * @component
 *
 */
function Dropdown(props) {
  const { items, handler, color, ...rest } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpen = (nextState) => {
    const time = isOpen ? 150 : 0;
    setTimeout(() => {
      setIsOpen(typeof nextState === 'boolean' ? nextState : !isOpen);
    }, time);
  };
  const closeContent = () => toggleOpen(false);
  return (
    <BaseDropdown {...rest} onBlur={closeContent}>
      <DropdownButton onClick={toggleOpen} color={color}>
        Dropdown
      </DropdownButton>
      <DropdownContent opened={isOpen ? 1 : 0} color={color}>
        {items.map((itemsElement) => (
          <button
            className="item"
            key={itemsElement}
            type="button"
            onClick={handler}>
            {itemsElement}
          </button>
        ))}
      </DropdownContent>
    </BaseDropdown>
  );
}
Dropdown.defaultProps = {
  handler: () => null,
  color: colorsThemesList[0],
};
Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.oneOf(colorsThemesList),
  handler: PropTypes.func,
};

export default withAsyncErrorHandling(Dropdown);
