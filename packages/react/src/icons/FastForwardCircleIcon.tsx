import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="140 92 140 164 188 128 140 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="84 92 132 128 84 164 84 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="140 92 140 164 188 128 140 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="84 92 132 128 84 164 84 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="144 92 144 164 192 128 144 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="80 92 128 128 80 164 80 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="144 92 144 164 192 128 144 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="80 92 128 128 80 164 80 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FastForwardCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
