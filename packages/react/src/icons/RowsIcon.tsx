import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="144" width="176" height="56" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="56" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="144" width="176" height="56" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="56" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="144" width="176" height="56" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="56" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="148" width="176" height="52" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="52" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M224,152v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V152a16,16,0,0,1,16-16H208A16,16,0,0,1,224,152ZM208,48H48A16,16,0,0,0,32,64v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V64A16,16,0,0,0,208,48Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="144" width="176" height="56" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="56" width="176" height="56" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="144" width="176" height="56" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="56" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const RowsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
