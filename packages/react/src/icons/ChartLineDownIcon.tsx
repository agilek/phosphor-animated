import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="200 168 128 96 96 128 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 128 200 168 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="200 168 128 96 96 128 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 128 200 168 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="200 168 128 96 96 128 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 128 200 168 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="200 168 128 96 96 128 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 128 200 168 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="200 168 128 96 96 128 32 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 128 200 168 160 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ChartLineDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
