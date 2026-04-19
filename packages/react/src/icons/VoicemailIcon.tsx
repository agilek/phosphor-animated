import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="56" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="200" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="56" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="200" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="56" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="200" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="60" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="196" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="56" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="200" cy="128" r="48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const VoicemailIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
