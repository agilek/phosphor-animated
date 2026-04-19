import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="200 192 200 112 240 124" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="200 192 200 112 240 124" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="200 192 200 112 240 124" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="200 192 200 112 240 124" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="192" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><polyline points="200 192 200 112 240 124" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const PlaylistIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
