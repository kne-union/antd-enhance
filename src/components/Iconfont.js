import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const calculateSize = size => {
  if (/^[1-9]+[0-9]*]*$/.test(size.toString())) {
    size += 'px';
  }
  return size;
};

const calculateType = (prefixType, prefix, colorful) => {
  return (prefix === '' ? (colorful ? 'icon-color-' : 'icon-') : prefix) + prefixType;
};

const Iconfont = ({ type = '', colorful, className, size, style, prefix, ...other }) => {
  const fontClass = calculateType(type, prefix, colorful),
    computedClassName = classnames(
      className,
      {
        'ant-iconfont': !colorful,
        'ant-iconfont--color': colorful
      },
      fontClass
    ),
    computedStyle = Object.assign({}, style, size ? { fontSize: calculateSize(size) } : {});
  return colorful ? (
    <svg {...other} className={computedClassName} style={computedStyle}>
      <use xlinkHref={`#${type}`} />
    </svg>
  ) : (
    <i {...other} className={computedClassName} style={computedStyle} />
  );
};

Iconfont.defaultProps = {
  colorful: false,
  prefix: 'iconfont '
};

Iconfont.propTypes = {
  colorful: PropTypes.bool,
  prefix: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string
};

export default Iconfont;
