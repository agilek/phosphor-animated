import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="136 32 232 128 136 224 136 176 80 176 80 80 136 80 136 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="136 32 232 128 136 224 136 176 72 176 72 80 136 80 136 32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ArrowFatLineRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
