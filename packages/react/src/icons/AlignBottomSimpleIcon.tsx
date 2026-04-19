import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="88" y="32" width="80" height="168" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="88" y="32" width="80" height="168" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="88" y="32" width="80" height="168" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="88" y="32" width="80" height="160" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="88" y="32" width="80" height="168" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AlignBottomSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
