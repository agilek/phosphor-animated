import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 48 176 128 96 208" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="96 48 176 128 96 208" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="96 48 176 128 96 208" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="96 48 176 128 96 208" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34Z" fill="currentColor"/></>,
  duotone: <><polygon points="96 48 176 128 96 208 96 48" opacity="0.2" fill="currentColor"/><polygon points="96 48 176 128 96 208 96 48" strokeWidth="16" className="draw-line"/></>,
};

export const CaretRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
