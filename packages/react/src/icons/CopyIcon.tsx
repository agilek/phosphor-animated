import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="168 168 216 168 216 40 88 40 88 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="88" width="128" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="168 168 216 168 216 40 88 40 88 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="88" width="128" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="168 168 216 168 216 40 88 40 88 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="88" width="128" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="168 168 216 168 216 40 88 40 88 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="88" width="128" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="168 168 216 168 216 40 88 40 88 88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="88" width="128" height="128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CopyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
