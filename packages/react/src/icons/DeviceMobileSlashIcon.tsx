import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.7,24H176a16,16,0,0,1,16,16V150.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.7,24H176a16,16,0,0,1,16,16V150.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.7,24H176a16,16,0,0,1,16,16V150.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M87.51,24H176a16,16,0,0,1,16,16v98.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M192,198.4V216a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V57.6" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M76.7,24H176a16,16,0,0,1,16,16V150.83" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const DeviceMobileSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
