import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 88 136 128 96 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 200 40 200 216 136 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 88 136 128 96 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 200 40 200 216 136 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 88 136 128 96 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 200 40 200 216 136 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 88 136 128 96 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 200 40 200 216 136 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="96 88 136 128 96 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="136 40 200 40 200 216 136 216" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SignInIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
