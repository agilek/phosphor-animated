import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M72,40S32,64,32,128s40,88,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,40s40,24,40,88-40,88-40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M72,40S32,64,32,128s40,88,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,40s40,24,40,88-40,88-40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M72,40S32,64,32,128s40,88,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,40s40,24,40,88-40,88-40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M72,40S32,64,32,128s40,88,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,40s40,24,40,88-40,88-40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M72,40S32,64,32,128s40,88,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,40s40,24,40,88-40,88-40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BracketsRoundIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
