import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="136 168 88 216 40 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 88 72 88 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="136 168 88 216 40 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 88 72 88 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="136 168 88 216 40 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 88 72 88 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="136 168 88 216 40 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 88 72 88 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="136 168 88 216 40 168 136 168" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="232 72 88 72 88 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowLeftDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
