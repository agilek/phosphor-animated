import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M154.14,156.75a36,36,0,1,1-48.3-53.12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M94,43l2-3h64l16,24h32a16,16,0,0,1,16,16V186" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200.73,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M154.14,156.75a36,36,0,1,1-48.3-53.12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M94,43l2-3h64l16,24h32a16,16,0,0,1,16,16V186" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200.73,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M154.14,156.75a36,36,0,1,1-48.3-53.12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M94,43l2-3h64l16,24h32a16,16,0,0,1,16,16V186" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200.73,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M154.14,156.75a36,36,0,1,1-48.3-53.12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200.73,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M102.06,40H160l16,24h32a16,16,0,0,1,16,16v94.14" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M154.14,156.75a36,36,0,1,1-48.3-53.12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M94,43l2-3h64l16,24h32a16,16,0,0,1,16,16V186" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M200.73,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.82" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const CameraSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
