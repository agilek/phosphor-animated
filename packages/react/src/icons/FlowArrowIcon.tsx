import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="48" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 48 240 80 208 112" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,176c88,0,40-96,128-96h32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="48" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 48 240 80 208 112" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,176c88,0,40-96,128-96h32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="48" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 48 240 80 208 112" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,176c88,0,40-96,128-96h32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="48" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 48 240 80 208 112" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,176c88,0,40-96,128-96h32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="48" cy="176" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 48 240 80 208 112" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M80,176c88,0,40-96,128-96h32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FlowArrowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
