import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM176,168H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ArticleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
