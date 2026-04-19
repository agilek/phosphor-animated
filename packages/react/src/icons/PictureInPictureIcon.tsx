import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="56" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 200 136 128 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="56" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 200 136 128 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="56" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 200 136 128 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="32" y="56" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 200 136 128 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="32" y="56" width="192" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="136 200 136 128 224 128" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const PictureInPictureIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
