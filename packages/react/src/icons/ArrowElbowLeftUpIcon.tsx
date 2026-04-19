import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="136 96 88 48 40 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 192 88 192 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="136 96 88 48 40 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 192 88 192 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="136 96 88 48 40 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 192 88 192 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="136 96 88 48 40 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 192 88 192 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="136 96 88 48 40 96 136 96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 192 88 192 88 96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowLeftUpIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
