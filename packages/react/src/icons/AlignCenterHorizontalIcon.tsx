import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="64" y="56" width="128" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><rect x="40" y="144" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="64" y="56" width="128" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><rect x="40" y="144" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="64" y="56" width="128" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><rect x="40" y="144" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="64" y="52" width="128" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><rect x="40" y="148" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><rect x="64" y="56" width="128" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><rect x="40" y="144" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const AlignCenterHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
