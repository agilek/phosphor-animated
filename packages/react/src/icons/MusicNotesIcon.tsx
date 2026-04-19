import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="180" cy="164" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="180" cy="164" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="180" cy="164" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="180" cy="164" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="180" cy="164" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="52" cy="196" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="80 196 80 56 208 24 208 164" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const MusicNotesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
