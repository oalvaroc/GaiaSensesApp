/**
 * @format
 */

import React from 'react';
import Composition from '../Composition';
import raw from 'raw.macro';

export function WeatherTree(): JSX.Element {
  return <Composition sketch={raw('./p5/weatherTree.js')} />;
}
