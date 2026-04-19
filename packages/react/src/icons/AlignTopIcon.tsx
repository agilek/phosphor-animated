import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="56" y="72" width="56" height="152" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="56" y="72" width="56" height="152" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="56" y="72" width="56" height="152" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="122" y="106" width="104" height="52" rx="8" transform="translate(306 -42) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="56" y="80" width="52" height="144" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="116" y="100" width="112" height="56" rx="8" transform="translate(300 -44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><rect x="56" y="72" width="56" height="152" rx="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const AlignTopIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
