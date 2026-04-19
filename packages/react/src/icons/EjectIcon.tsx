import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="110" y="94" width="36" height="176" rx="8" transform="translate(-54 310) rotate(-90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M42.32,110l73.76-76.93a16.53,16.53,0,0,1,23.84,0L213.68,110a8.27,8.27,0,0,1-6,14H48.27A8.27,8.27,0,0,1,42.32,110Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><rect x="108" y="92" width="40" height="176" rx="8" transform="translate(-52 308) rotate(-90)" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const EjectIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
