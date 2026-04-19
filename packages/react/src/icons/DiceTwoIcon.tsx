import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="108" cy="108" r="8" fill="currentColor"/><circle cx="148" cy="148" r="8" fill="currentColor"/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="108" cy="108" r="10" fill="currentColor"/><circle cx="148" cy="148" r="10" fill="currentColor"/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="108" cy="108" r="12" fill="currentColor"/><circle cx="148" cy="148" r="12" fill="currentColor"/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="104" cy="104" r="16" fill="currentColor"/><circle cx="152" cy="152" r="16" fill="currentColor"/></>,
  fill: <><path d="M192,32H64A32,32,0,0,0,32,64V192a32,32,0,0,0,32,32H192a32,32,0,0,0,32-32V64A32,32,0,0,0,192,32Zm-84,88a12,12,0,1,1,12-12A12,12,0,0,1,108,120Zm40,40a12,12,0,1,1,12-12A12,12,0,0,1,148,160Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="24" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="108" cy="108" r="12" fill="currentColor"/><circle cx="148" cy="148" r="12" fill="currentColor"/></>,
};

export const DiceTwoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
