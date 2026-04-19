import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><rect x="24" y="40" width="208" height="176" rx="16" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const RectangleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
