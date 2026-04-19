import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="96 80 24 80 24 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 24 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="96 80 24 80 24 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 24 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="96 80 24 80 24 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 24 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="96 80 24 80 24 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 24 80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="96 80 24 80 24 152 96 80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 96 136 192 60 116" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
