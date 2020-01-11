const cssCorrespondence = {
  base: {
    aligncontent: 'align-content',
    alignitems: 'align-items',
    backgroundcolor: 'background-color',
    borderradius: 'border-radius',
    boxshadow: 'box-shadow',
    color: 'color',
    display: 'display',
    flexdirection: 'flex-direction',
    fontSize: 'font-size',
    fontWeight: 'font-weight',
    gridcolumngap: 'grid-column-gap',
    gridrowgap: 'grid-row-gap',
    gridtemplatecolumns: 'grid-template-columns',
    gridtemplaterows: 'grid-template-rows',
    height: 'height',
    justifycontent: 'justify-content',
    margin: 'margin',
    maxheight: 'max-height',
    maxwidth: 'max-width',
    minheight: 'min-height',
    minwidth: 'min-width',
    overflow: 'overflow',
    padding: 'padding',
    textalign: 'text-align',
    transition: 'transition',
    width: 'width',
  },
  hover: {
    backgroundcolorhover: 'background-color',
    boxshadowhover: 'box-shadow',
    colorhover: 'color',
  },
  active: {
    backgroundcoloractive: 'background-color',
    boxshadowactive: 'box-shadow',
    coloractive: 'color',
  },
  disabled: {
    backgroundcolordisabled: 'background-color',
    boxshadowdisabled: 'box-shadow',
    colordisabled: 'color',
  },
};

/**
 * propsToCSS
 *
 * @params {Object} props
 * @params {String} type (enum : 'active', 'hover', 'disabled' or undefined)
 * @return String
 * @desc ::
 *  Return a props adapted css litteral string for Styled Components, all props are without
 *  any space or dash, and always in lowercase except font properties.
 *
 */
export default function(props, type) {
  const target = type ? props[type] : props;
  const properties = Object.entries(target).filter(
    ([property, value]) => typeof value === 'string',
  );
  return `${properties
    .map(([property, value]) => `${property}: ${value};`)
    .join('\n')}`;
}
