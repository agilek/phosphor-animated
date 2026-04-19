import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M248,88A120,120,0,0,1,8,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,88A88,88,0,0,1,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><path d="M248,88A120,120,0,0,1,8,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,88A88,88,0,0,1,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><path d="M248,88A120,120,0,0,1,8,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,88A88,88,0,0,1,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><path d="M12,88H244v4A116,116,0,0,1,12,92Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M52,88v4a76,76,0,0,0,152,0V88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M248,88A120,120,0,0,1,8,88Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M216,88A88,88,0,0,1,40,88" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const OrangeSliceIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
