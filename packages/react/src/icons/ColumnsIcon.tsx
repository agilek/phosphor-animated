import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="-6" y="102" width="176" height="52" rx="8" transform="translate(210 46) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="86" y="102" width="176" height="52" rx="8" transform="translate(302 -46) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="-4" y="100" width="176" height="56" rx="8" transform="translate(212 44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="84" y="100" width="176" height="56" rx="8" transform="translate(300 -44) rotate(90)" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ColumnsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
