import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BracketsCurlyIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
