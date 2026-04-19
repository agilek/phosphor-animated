import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 48 208 104 56 160" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="56 48 208 104 56 160" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="56 48 208 104 56 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="56 48 208 104 56 160" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,184H80a8,8,0,0,1,0-16H184a8,8,0,0,1,0,16Zm2.35-64.35-104,32a8,8,0,1,1-4.7-15.3L156.8,112,77.65,87.65a8,8,0,0,1,4.7-15.3l104,32a8,8,0,0,1,0,15.3Z" fill="currentColor"/></>,
  duotone: <><polygon points="56 48 208 104 56 160 56 48" opacity="0.2" fill="currentColor"/><polyline points="56 48 208 104 56 160" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const GreaterThanOrEqualIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
