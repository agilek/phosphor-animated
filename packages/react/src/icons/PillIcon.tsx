import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="10.98" y="82.75" width="234.04" height="90.51" rx="45.25" transform="translate(-53.02 128) rotate(-45)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const PillIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
