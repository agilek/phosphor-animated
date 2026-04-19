import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="72" y="56" width="112" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="144" width="152" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="72" y="56" width="112" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="144" width="152" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="72" y="56" width="112" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="144" width="152" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="80" y="56" width="104" height="52" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="80" y="148" width="144" height="52" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><rect x="72" y="144" width="152" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="72" y="56" width="112" height="56" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const AlignLeftIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
