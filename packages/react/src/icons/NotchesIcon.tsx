import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line"/><line strokeWidth="8" className="draw-line"/></>,
  light: <><line strokeWidth="12" className="draw-line"/><line strokeWidth="12" className="draw-line"/></>,
  regular: <><line strokeWidth="16" className="draw-line"/><line strokeWidth="16" className="draw-line"/></>,
  bold: <><line strokeWidth="24" className="draw-line"/><line strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M200,40V192a8,8,0,0,1-8,8H40a8,8,0,0,1-5.66-13.66l152-152A8,8,0,0,1,200,40Z" fill="currentColor"/></>,
  duotone: <><polygon points="192 192 192 40 40 192 192 192" opacity="0.2" fill="currentColor"/><polygon points="192 192 192 40 40 192 192 192" strokeWidth="16" className="draw-line"/></>,
};

export const NotchesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
