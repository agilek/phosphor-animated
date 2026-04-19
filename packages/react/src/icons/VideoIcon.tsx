import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="160 112 112 80 112 144 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="160 112 112 80 112 144 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="160 112 112 80 112 144 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="32" y="48" width="192" height="120" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="148 108 116 88 116 128 148 108" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="160 112 112 80 112 144 160 112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="32" y="48" width="192" height="128" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const VideoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
