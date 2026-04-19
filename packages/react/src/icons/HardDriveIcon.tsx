import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="72" width="208" height="112" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><rect x="24" y="72" width="208" height="112" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><rect x="24" y="72" width="208" height="112" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><rect x="24" y="72" width="208" height="112" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><rect x="24" y="72" width="208" height="112" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const HardDriveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
