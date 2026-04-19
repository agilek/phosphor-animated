import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="116 92 116 164 68 128 116 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="172 92 172 164 124 128 172 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="116 92 116 164 68 128 116 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="172 92 172 164 124 128 172 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="112 92 112 164 64 128 112 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="176 92 176 164 128 128 176 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="112 92 112 164 64 128 112 92" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="176 92 176 164 128 128 176 92" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const RewindCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
