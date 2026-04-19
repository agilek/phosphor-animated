import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M104,72a96,96,0,0,1,96,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 200 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M104,72a96,96,0,0,1,96,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 200 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M104,72a96,96,0,0,1,96,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 200 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="72 32 72 200 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M112,72.33A96,96,0,0,1,199.67,160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M104,72a96,96,0,0,1,96,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="72 32 72 200 240 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const AngleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
