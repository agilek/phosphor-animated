import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="16" y="56" width="224" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="56 152 56 104 88 136 120 104 120 152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="200 128 176 152 152 128" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="16" y="56" width="224" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="56 152 56 104 88 136 120 104 120 152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="200 128 176 152 152 128" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="16" y="56" width="224" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="56 152 56 104 88 136 120 104 120 152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="200 128 176 152 152 128" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="16" y="56" width="224" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="60 148 60 108 88 136 116 108 116 148" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="196 132 176 148 156 132" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="16" y="56" width="224" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><polyline points="56 152 56 104 88 136 120 104 120 152" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><polyline points="200 128 176 152 152 128" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const MarkdownLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
