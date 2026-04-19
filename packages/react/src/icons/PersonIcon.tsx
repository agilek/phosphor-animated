import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="40" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M149.17,80a24,24,0,0,1,18,8.13l45.32,51.38a12,12,0,0,1-17,17L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128,60.49,156.49a12,12,0,0,1-17-17L88.83,88.13a24,24,0,0,1,18-8.13Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="40" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M149.17,80a24,24,0,0,1,18,8.13l45.32,51.38a12,12,0,0,1-17,17L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128,60.49,156.49a12,12,0,0,1-17-17L88.83,88.13a24,24,0,0,1,18-8.13Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="40" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M149.17,80a24,24,0,0,1,18,8.13l45.32,51.38a12,12,0,0,1-17,17L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128,60.49,156.49a12,12,0,0,1-17-17L88.83,88.13a24,24,0,0,1,18-8.13Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="40" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M149.17,80a24,24,0,0,1,18,8.13l45.32,51.38a12,12,0,0,1-17,17L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128,60.49,156.49a12,12,0,0,1-17-17L88.83,88.13a24,24,0,0,1,18-8.13Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="40" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M149.17,80a24,24,0,0,1,18,8.13l45.32,51.38a12,12,0,0,1-17,17L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128,60.49,156.49a12,12,0,0,1-17-17L88.83,88.13a24,24,0,0,1,18-8.13Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const PersonIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
