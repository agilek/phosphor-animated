import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,76.11l30.06-30a48,48,0,0,1,67.88,67.88L179.88,144" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.11,112l-30,30.06a48,48,0,0,0,67.88,67.88L144,179.88" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const LinkSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
