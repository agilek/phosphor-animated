import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="32 136 128 232 224 136 176 136 176 80 80 80 80 136 32 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="32 136 128 232 224 136 176 136 176 72 80 72 80 136 32 136" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowFatLineDownIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
