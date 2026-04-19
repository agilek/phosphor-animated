import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="88" cy="184" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 184 128 40 208 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="88" cy="184" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 184 128 40 208 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="88" cy="184" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 184 128 40 208 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="88" cy="184" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 184 128 40 208 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="88" cy="184" r="40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="128 184 128 40 208 64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const MusicNoteSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
