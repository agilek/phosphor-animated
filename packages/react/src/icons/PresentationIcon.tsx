import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="48" width="192" height="136" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="32" y="48" width="192" height="136" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="32" y="48" width="192" height="136" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="136" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <><path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="48" width="192" height="136" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="48" width="192" height="136" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PresentationIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
