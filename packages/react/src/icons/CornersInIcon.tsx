import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="208 96 160 96 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 160 96 160 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 208 160 160 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 48 96 96 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="208 96 160 96 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 160 96 160 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 208 160 160 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 48 96 96 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="208 96 160 96 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 160 96 160 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 208 160 160 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 48 96 96 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="208 96 160 96 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 160 96 160 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 208 160 160 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 48 96 96 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="208 96 160 96 160 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="48 160 96 160 96 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="160 208 160 160 208 160" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="96 48 96 96 48 96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CornersInIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
