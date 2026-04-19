import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="64" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 112 248 80 248 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="24" y="64" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 112 248 80 248 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="24" y="64" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 112 248 80 248 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="24" y="64" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 112 244 80 244 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="64" width="176" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 112 248 80 248 176 200 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const VideoCameraIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
