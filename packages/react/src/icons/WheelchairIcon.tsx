import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="104 72 104 136 192 136 224 200 248 192" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="48" r="24" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="104 72 104 136 192 136 224 200 248 192" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="48" r="24" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="104 72 104 136 192 136 224 200 248 192" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="48" r="24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="104 68 104 136 192 136 224 200 244 192" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="46" r="22" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,1,0,57.57,92" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M250.53,199.59l-24,8a8,8,0,0,1-9.69-4L187.05,144H104a8,8,0,0,1-8-8V106.34A56,56,0,0,0,112,216c25.91,0,50.09-18.05,56.25-42a8,8,0,1,1,15.5,4c-8.06,31.3-38.23,54-71.75,54A72,72,0,0,1,96,89.81v-19a28,28,0,1,1,16,0V88h56a8,8,0,0,1,0,16H112v24h80a8,8,0,0,1,7.15,4.42l28.9,57.8,17.42-5.81a8,8,0,0,1,5.06,15.18Z" fill="currentColor"/></>,
  duotone: <><circle cx="104" cy="48" r="24" opacity="0.2" fill="currentColor"/><polyline points="104 72 104 136 192 136 224 200 248 192" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="104" cy="48" r="24" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,96H112a64,64,0,0,0,0,128c29.82,0,56.9-20.4,64-48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const WheelchairIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
