import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="8" fill="currentColor"/></>,
  light: <><circle cx="128" cy="128" r="10" fill="currentColor"/></>,
  regular: <><circle cx="128" cy="128" r="12" fill="currentColor"/></>,
  bold: <><circle cx="128" cy="128" r="16" fill="currentColor"/></>,
  fill: <><path d="M128,80a48,48,0,1,0,48,48A48,48,0,0,0,128,80Zm0,60a12,12,0,1,1,12-12A12,12,0,0,1,128,140Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="48" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="12" fill="currentColor"/></>,
};

export const DotIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
