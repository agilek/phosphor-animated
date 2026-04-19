import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="104 16 232 216 24 216 152 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="71.68 216 128 128 184.32 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="104 16 232 216 24 216 152 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="71.68 216 128 128 184.32 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="104 16 232 216 24 216 152 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="71.68 216 128 128 184.32 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="104 16 232 216 24 216 152 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="74.24 216 128 132 181.76 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="104 16 232 216 24 216 152 16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="71.68 216 128 128 184.32 216" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const TipiIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
