import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 136 128 168 160 136" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 136 128 168 160 136" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 136 128 168 160 136" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 136 128 168 160 136" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM165.66,141.66l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L120,148.69V88a8,8,0,0,1,16,0v60.69l18.34-18.35a8,8,0,0,1,11.32,11.32Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="96 136 128 168 160 136" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowSquareDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
