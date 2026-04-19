import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="16 104 128 168 240 104 128 40 16 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="16 144 128 208 240 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="16 104 128 168 240 104 128 40 16 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="16 144 128 208 240 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="16 104 128 168 240 104 128 40 16 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="16 144 128 208 240 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="16 100 128 164 240 100 128 36 16 100" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="16 148 128 212 240 148" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="16 104 128 168 240 104 128 40 16 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="16 144 128 208 240 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const StackSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
