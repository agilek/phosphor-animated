import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="128 232 128 160 72 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="128 232 128 160 72 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="128 232 128 160 72 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="128 232 128 160 72 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="128 232 128 160 72 104 72 40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="160 200 128 232 96 200" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="184 40 184 104 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ArrowsMergeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
