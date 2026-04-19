import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="208 136 128 216 48 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 56 128 136 48 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polyline points="208 136 128 216 48 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 56 128 136 48 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polyline points="208 136 128 216 48 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 56 128 136 48 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polyline points="208 136 128 216 48 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="208 56 128 136 48 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="208 136 128 216 48 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="208 56 128 136 48 56 208 56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const CaretDoubleDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
