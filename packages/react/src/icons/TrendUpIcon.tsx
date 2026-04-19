import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="232 56 136 152 96 112 24 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 120 232 56 168 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="232 56 136 152 96 112 24 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 120 232 56 168 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="232 56 136 152 96 112 24 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 120 232 56 168 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="232 56 136 152 96 112 24 184" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 120 232 56 168 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="232 120 232 56 168 56 232 120" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 88 136 152 96 112 24 184" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const TrendUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
