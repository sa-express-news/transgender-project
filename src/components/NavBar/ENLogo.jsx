import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CSSClassnames from 'grommet/utils/CSSClassnames';
import Intl from 'grommet/utils/Intl';
import Props from 'grommet/utils/Props';

const CLASS_ROOT = CSSClassnames.CONTROL_ICON;
const COLOR_INDEX = CSSClassnames.COLOR_INDEX;

export default class Icon extends Component {
  render () {
    const { className, colorIndex } = this.props;
    let { a11yTitle, size, responsive } = this.props;
    let { intl } = this.context;

    const classes = classnames(
      CLASS_ROOT,
      `${CLASS_ROOT}-social-reddit`,
      className,
      {
        [`${CLASS_ROOT}--${size}`]: size,
        [`${CLASS_ROOT}--responsive`]: responsive,
        [`${COLOR_INDEX}-${colorIndex}`]: colorIndex
      }
    );

    a11yTitle = a11yTitle || Intl.getMessage(intl, 'social-expressnews');

    const restProps = Props.omit(this.props, Object.keys(Icon.propTypes));
    return <svg {...restProps} version="1.1" viewBox="0 0 24 24" width="24px" height="24px" role="img" className={classes} aria-label={a11yTitle}>
      <g transform="translate(0.000000,25.000000) scale(0.135) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M0 915 l0 -915 915 0 915 0 0 915 0 915 -915 0 -915 0 0 -915z m791
        509 c29 -14 33 -15 41 0 5 8 15 13 23 10 11 -5 -1 -26 -46 -85 l-60 -79 -29
        22 c-18 13 -49 23 -82 26 -44 3 -59 0 -88 -20 -44 -30 -58 -79 -59 -208 l-1
        -94 38 36 c20 20 47 41 59 47 30 15 114 16 142 1 20 -10 26 -9 46 10 41 39 35
        4 -11 -61 -25 -35 -49 -70 -53 -77 -6 -10 -14 -10 -44 3 -43 18 -116 20 -152
        3 l-25 -11 0 -139 0 -138 44 0 c65 0 141 -17 196 -43 48 -23 50 -23 67 -5 9
        11 20 15 25 10 9 -9 -94 -163 -112 -170 -5 -2 -19 4 -32 12 -75 49 -243 64
        -355 31 -59 -17 -123 -69 -123 -99 0 -9 -7 -16 -15 -16 -22 0 -19 65 6 117 11
        24 37 57 57 73 38 31 123 68 179 77 l32 5 3 312 c3 336 4 341 62 404 60 67
        185 89 267 46z m396 5 c62 -30 101 -82 162 -217 l55 -120 42 -7 c24 -3 59 -3
        79 1 l35 6 0 84 c0 78 -2 84 -20 84 -11 0 -37 7 -57 15 -25 11 -40 12 -47 5
        -13 -13 -26 -13 -26 0 0 7 78 127 100 153 4 4 23 1 43 -8 47 -20 120 -19 159
        1 l31 16 -7 -33 c-11 -58 -53 -116 -96 -135 l-40 -18 0 -372 c0 -218 4 -383
        10 -398 11 -31 -5 -35 -48 -12 -60 32 -111 100 -172 231 -45 99 -65 132 -82
        137 -36 10 -134 9 -163 -2 -25 -10 -26 -11 -23 -97 l3 -88 46 -6 c26 -4 59
        -14 75 -22 26 -13 30 -13 40 2 7 9 15 13 19 9 4 -3 -13 -43 -37 -87 -30 -57
        -47 -80 -58 -77 -8 3 -42 15 -75 26 -92 33 -196 6 -211 -55 -9 -38 -24 -30
        -24 13 1 76 72 173 138 188 15 3 33 7 40 10 15 4 18 264 3 264 -30 0 -60 -22
        -70 -52 l-12 -33 -19 35 c-29 54 -26 106 9 141 16 16 40 29 53 29 46 0 49 8
        46 146 l-3 129 -30 3 c-46 4 -75 -28 -75 -84 0 -59 -19 -54 -39 8 -17 57 -9
        107 26 149 52 61 141 76 220 38z m-853 -14 c48 -16 112 -17 149 -1 56 25 -28
        -90 -87 -118 -45 -21 -80 -20 -153 5 -76 25 -124 23 -138 -8 -5 -13 -16 -23
        -24 -23 -23 0 -8 86 20 117 52 56 126 65 233 28z m100 -156 c-17 -19 -19 -43
        -24 -253 -6 -271 -7 -275 -109 -344 -76 -51 -105 -56 -67 -11 25 29 26 36 26
        150 0 101 -2 119 -15 119 -21 0 -65 -45 -65 -67 -1 -30 -38 22 -46 64 -12 64
        24 111 99 127 24 6 27 11 27 44 0 44 30 108 61 131 36 25 103 60 118 61 10 0
        9 -5 -5 -21z"/>
        <path d="M1120 1079 l0 -195 93 1 94 0 -13 30 c-39 92 -155 340 -164 349 -7 7
        -10 -52 -10 -185z"/>
        <path d="M1489 1053 l-67 -4 60 -132 c33 -73 64 -136 69 -142 5 -5 9 48 9 138
        0 81 -1 146 -2 145 -2 -1 -33 -3 -69 -5z"/>
      </g>
    </svg>;
  }
};

Icon.contextTypes = {
  intl: PropTypes.object
};

Icon.defaultProps = {
  responsive: true
};

Icon.displayName = 'ExpressNews';

Icon.icon = true;

Icon.propTypes = {
  a11yTitle: PropTypes.string,
  colorIndex: PropTypes.string,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'huge']),
  responsive: PropTypes.bool
};
