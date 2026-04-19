import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="136" width="208" height="48" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,104s-18-8,0-40,0-40,0-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,104s-18-8,0-40,0-40,0-40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="24" y="136" width="208" height="48" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,104s-18-8,0-40,0-40,0-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,104s-18-8,0-40,0-40,0-40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="24" y="136" width="208" height="48" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,104s-18-8,0-40,0-40,0-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,104s-18-8,0-40,0-40,0-40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="24" y="136" width="208" height="48" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M212,100s-18-7.6,0-38,0-38,0-38" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M164,100s-18-7.6,0-38,0-38,0-38" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="136" width="208" height="48" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,104s-18-8,0-40,0-40,0-40" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M168,104s-18-8,0-40,0-40,0-40" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CigaretteIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
