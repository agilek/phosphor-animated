import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M168,165a68,68,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M134.15,213.12l104-125.43a7.79,7.79,0,0,0-1.31-11.21,180.75,180.75,0,0,0-217.78,0A7.79,7.79,0,0,0,17.8,87.69L121.85,213.12A8,8,0,0,0,134.15,213.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M84.32,167.88a68,68,0,0,1,87.36,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const WifiLowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
