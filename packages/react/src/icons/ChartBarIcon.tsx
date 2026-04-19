import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="48 208 48 136 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 208 96 88 152 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="152 208 152 40 208 40 208 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="48 208 48 136 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 208 96 88 152 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="152 208 152 40 208 40 208 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="48 208 48 136 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 208 96 88 152 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="152 208 152 40 208 40 208 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="48 208 48 136 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 208 96 88 152 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="152 208 152 40 208 40 208 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="48 208 48 136 96 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="96 208 96 88 152 88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="152 208 152 40 208 40 208 208" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ChartBarIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
