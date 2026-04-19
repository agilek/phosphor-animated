import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="64" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,139.07c37.58,6,64,20.29,64,36.93,0,22.09-46.56,40-104,40S24,198.09,24,176c0-16.64,26.42-30.91,64-36.93" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="64" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,139.07c37.58,6,64,20.29,64,36.93,0,22.09-46.56,40-104,40S24,198.09,24,176c0-16.64,26.42-30.91,64-36.93" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="64" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,139.07c37.58,6,64,20.29,64,36.93,0,22.09-46.56,40-104,40S24,198.09,24,176c0-16.64,26.42-30.91,64-36.93" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="64" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M172,139.75c35.44,6.37,60,20.21,60,36.25,0,22.09-46.56,40-104,40S24,198.09,24,176c0-16,24.56-29.88,60-36.25" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="64" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,139.07c37.58,6,64,20.29,64,36.93,0,22.09-46.56,40-104,40S24,198.09,24,176c0-16.64,26.42-30.91,64-36.93" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const MapPinSimpleAreaIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
