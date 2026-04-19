import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M96.25,68A32,32,0,0,1,160,72L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CoatHangerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
