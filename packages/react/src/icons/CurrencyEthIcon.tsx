import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 128 128 168 40 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 16 216 128 128 240 40 128 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 128 128 168 40 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 16 216 128 128 240 40 128 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 128 128 168 40 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 16 216 128 128 240 40 128 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 128 128 168 40 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 16 216 128 128 240 40 128 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="216 128 128 168 40 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><polygon points="128 16 216 128 128 240 40 128 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const CurrencyEthIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
