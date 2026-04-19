import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 64 16 128 88 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 240 128 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="88 64 16 128 88 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 240 128 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="88 64 16 128 88 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 240 128 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="88 64 16 128 88 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 240 128 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="88 64 16 128 88 192" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 64 240 128 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CodeSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
