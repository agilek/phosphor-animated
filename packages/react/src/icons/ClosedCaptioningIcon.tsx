import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="56" width="208" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,155.72a32,32,0,1,1,0-55.44" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ClosedCaptioningIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
