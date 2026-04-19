import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="224 208 32 208 32 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="224 96 160 152 96 104 32 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ChartLineIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
