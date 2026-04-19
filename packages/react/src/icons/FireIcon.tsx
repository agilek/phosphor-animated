import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M136,192c20-3.37,36.61-20,40-40" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M136,192c20-3.37,36.61-20,40-40" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M136,192c20-3.37,36.61-20,40-40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M166.17,156A40.11,40.11,0,0,1,140,182.17" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M143.38,17.85a8,8,0,0,0-12.63,3.41l-22,60.41L84.59,58.26a8,8,0,0,0-11.93.89C51,87.53,40,116.08,40,144a88,88,0,0,0,176,0C216,84.55,165.21,36,143.38,17.85Zm40.51,135.49a57.6,57.6,0,0,1-46.56,46.55A7.65,7.65,0,0,1,136,200a8,8,0,0,1-1.32-15.89c16.57-2.79,30.63-16.85,33.44-33.45a8,8,0,0,1,15.78,2.68Z" fill="currentColor"/></>,
  duotone: <><path d="M136,192c20-3.37,36.61-20,40-40" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" opacity="0.2" fill="currentColor"/><path d="M112,96l26.27-72C159.86,41.92,208,88.15,208,144a80,80,0,0,1-160,0c0-30.57,14.42-58.26,31-80Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FireIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
