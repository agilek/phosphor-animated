import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="232 192 136 96 96 136 24 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 128 232 192 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="232 192 136 96 96 136 24 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 128 232 192 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="232 192 136 96 96 136 24 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 128 232 192 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="232 192 136 96 96 136 24 64" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 128 232 192 168 192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="232 128 232 192 168 192 232 128" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="200 160 136 96 96 136 24 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const TrendDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
