import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="168 48 208 48 208 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 168 208 208 168 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const ShuffleSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
