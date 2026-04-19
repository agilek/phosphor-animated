import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const GoogleDriveLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
