import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="24" y="88" width="168" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="24" y="88" width="168" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="24" y="88" width="168" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="24" y="88" width="160" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="24" y="88" width="168" height="80" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const AlignRightSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
