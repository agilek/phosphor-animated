import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 104 128 144 88 104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 104 128 144 88 104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 104 128 144 88 104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 104 128 144 88 104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 144 216 208 40 208 40 144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polyline points="168 104 128 144 88 104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const DownloadSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
