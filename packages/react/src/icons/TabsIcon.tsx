import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,88h10.05a8,8,0,0,1,7.66,5.7L200,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,88h10.05a8,8,0,0,1,7.66,5.7L248,168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,88h10.05a8,8,0,0,1,7.66,5.7L200,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,88h10.05a8,8,0,0,1,7.66,5.7L248,168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,88h10.05a8,8,0,0,1,7.66,5.7L200,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,88h10.05a8,8,0,0,1,7.66,5.7L248,168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M12,168,34.29,93.7A8,8,0,0,1,42,88h60.1a8,8,0,0,1,7.66,5.7L132,168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M148,88h10.05a8,8,0,0,1,7.66,5.7L188,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M204,88h10.05a8,8,0,0,1,7.66,5.7L244,168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M8,168,30.29,93.7A8,8,0,0,1,38,88h84.1a8,8,0,0,1,7.66,5.7L152,168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M160,88h10.05a8,8,0,0,1,7.66,5.7L200,168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M208,88h10.05a8,8,0,0,1,7.66,5.7L248,168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const TabsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
