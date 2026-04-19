import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M200,112H149l56.27,50A8,8,0,0,1,200,176H136v64a8,8,0,0,1-13.66,5.66l-72-72A8,8,0,0,1,48,168V104a8,8,0,0,1,8-8h51L50.69,46A8,8,0,0,1,56,32H200a8,8,0,0,1,8,8v64A8,8,0,0,1,200,112Z" fill="currentColor"/></>,
  duotone: <><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" opacity="0.2" fill="currentColor"/><polygon points="56 104 56 168 128 240 128 168 200 168 56 40 200 40 200 104 56 104" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const FramerLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
