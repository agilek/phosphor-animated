import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 208 48 208 48 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="48 88 48 48 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 208 48 208 48 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="48 88 48 48 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 208 48 208 48 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="48 88 48 48 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 208 48 208 48 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="48 88 48 48 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="88 208 48 208 48 168" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="48 88 48 48 88 48" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CornersOutIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
