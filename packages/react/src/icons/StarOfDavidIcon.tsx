import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="128 240 224 72 32 72.04 128 240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><polygon points="128 240 224 72 32 72.04 128 240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><polygon points="128 240 224 72 32 72.04 128 240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><polygon points="128 240 224 72 32 72.04 128 240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="128 240 224 72 32 72.04 128 240" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polygon points="128 16 224 184 32 183.96 128 16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const StarOfDavidIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
