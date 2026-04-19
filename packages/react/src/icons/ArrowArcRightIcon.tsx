import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 152 232 152 232 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,184a96,96,0,0,1,163.88-67.88L232,152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="168 152 232 152 232 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,184a96,96,0,0,1,163.88-67.88L232,152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="168 152 232 152 232 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,184a96,96,0,0,1,163.88-67.88L232,152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="168 152 232 152 232 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,184a96,96,0,0,1,163.88-67.88L232,152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="168 152 232 152 232 88 168 152" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,184a96,96,0,0,1,163.88-67.88L200,120" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowArcRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
