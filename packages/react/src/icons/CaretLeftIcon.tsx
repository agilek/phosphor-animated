import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="160 208 80 128 160 48" strokeWidth="8" className="draw-line"/></>,
  light: <><polyline points="160 208 80 128 160 48" strokeWidth="12" className="draw-line"/></>,
  regular: <><polyline points="160 208 80 128 160 48" strokeWidth="16" className="draw-line"/></>,
  bold: <><polyline points="160 208 80 128 160 48" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61Z" fill="currentColor"/></>,
  duotone: <><polygon points="160 208 80 128 160 48 160 208" opacity="0.2" fill="currentColor"/><polygon points="160 208 80 128 160 48 160 208" strokeWidth="16" className="draw-line"/></>,
};

export const CaretLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
