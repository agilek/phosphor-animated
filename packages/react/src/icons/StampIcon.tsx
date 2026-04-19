import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="40" y="136" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="40" y="136" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="40" y="136" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M110.32,136l-15-83.78A24,24,0,0,1,119,24h18a24,24,0,0,1,23.63,28.22l-15,83.78" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="40" y="136" width="176" height="48" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M114.32,136,96.54,53A24,24,0,0,1,120,24h16a24,24,0,0,1,23.47,29l-17.78,83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="40" y="136" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const StampIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
