import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="144" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="144" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="144" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="148" width="176" height="52" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="52" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="144" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="56" width="176" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const RowsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
