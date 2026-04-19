import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="164" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="200" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="56" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="192 112 152 112 120 80 88 112 128 152 128 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="164" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="200" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="56" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="192 112 152 112 120 80 88 112 128 152 128 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="164" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="200" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="56" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="192 112 152 112 120 80 88 112 128 152 128 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="168" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="204" cy="180" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="54" cy="178" r="30" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="188 116 152 116 120 84 88 116 128 156 128 204" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="164" cy="52" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="200" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="56" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="192 112 152 112 120 80 88 112 128 152 128 200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PersonSimpleBikeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
