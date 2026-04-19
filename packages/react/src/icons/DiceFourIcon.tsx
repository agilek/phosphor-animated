import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const DiceFourIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
