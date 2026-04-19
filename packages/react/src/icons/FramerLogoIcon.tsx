import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const FramerLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
