import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="56" y="108" width="176" height="40" rx="8" transform="translate(272 -16) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><rect x="-20" y="108" width="176" height="40" rx="8" transform="translate(196 60) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="52" y="108" width="176" height="40" rx="8" transform="translate(268 -12) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ColumnsPlusRightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
