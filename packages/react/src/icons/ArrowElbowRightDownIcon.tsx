import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="128 160 176 208 224 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="128 160 176 208 224 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="128 160 176 208 224 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="128 160 176 208 224 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="128 160 176 208 224 160 128 160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="32 64 176 64 176 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowElbowRightDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
