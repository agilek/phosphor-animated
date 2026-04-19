import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="56 48 136 128 56 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="56 48 136 128 56 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="56 48 136 128 56 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="56 48 136 128 56 208" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="56 48 136 128 56 208 56 48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 48 216 128 136 208" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretDoubleRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
