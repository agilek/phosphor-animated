import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="128 232 208 192 224 72 128 32 32 72 48 192 128 232" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="168 160 128 88 88 160" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const AngularLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
