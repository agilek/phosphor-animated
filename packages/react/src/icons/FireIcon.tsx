import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M136,192c20-3.37,36.61-20,40-40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M136,192c20-3.37,36.61-20,40-40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M136,192c20-3.37,36.61-20,40-40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M166.17,156A40.11,40.11,0,0,1,140,182.17" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M136,192c20-3.37,36.61-20,40-40" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FireIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
