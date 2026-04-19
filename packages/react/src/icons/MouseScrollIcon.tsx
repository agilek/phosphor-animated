import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="56" y="24" width="144" height="208" rx="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 88 128 64 104 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 168 128 192 104 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="56" y="24" width="144" height="208" rx="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 88 128 64 104 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 168 128 192 104 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="56" y="24" width="144" height="208" rx="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 88 128 64 104 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 168 128 192 104 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="56" y="24" width="144" height="208" rx="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 88 128 64 104 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 168 128 192 104 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="56" y="24" width="144" height="208" rx="56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="152 88 128 64 104 88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="152 168 128 192 104 168" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const MouseScrollIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
