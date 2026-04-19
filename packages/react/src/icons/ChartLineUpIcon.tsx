import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 72 128 144 96 112 32 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 112 200 72 160 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 72 128 144 96 112 32 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 112 200 72 160 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 72 128 144 96 112 32 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 112 200 72 160 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 72 128 144 96 112 32 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 112 200 72 160 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 72 128 144 96 112 32 176" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="200 112 200 72 160 72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ChartLineUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
