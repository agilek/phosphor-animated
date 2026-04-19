import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M28,92.8S60,48,108,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M32,92.8S64,48,112,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ScribbleLoopIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
