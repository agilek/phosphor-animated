import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="64" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="200" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><circle cx="176" cy="56" r="32" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="64" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="200" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><circle cx="176" cy="56" r="32" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><circle cx="64" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="176" cy="200" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="176" cy="56" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="64" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="200" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><circle cx="176" cy="56" r="32" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="64" cy="128" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="176" cy="200" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><circle cx="176" cy="56" r="32" className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const ShareNetworkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
