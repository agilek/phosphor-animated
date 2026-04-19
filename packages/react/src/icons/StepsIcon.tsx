import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const StepsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
