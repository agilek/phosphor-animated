import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M96.25,68A32,32,0,0,1,160,72L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M241.57,171.2,141.33,96l23.46-17.6A8,8,0,0,0,168,72a40,40,0,1,0-80,0,8,8,0,0,0,16,0,24,24,0,0,1,47.69-3.78L14.43,171.2A16,16,0,0,0,24,200H232a16,16,0,0,0,9.6-28.8ZM32.73,184C53.6,170.59,89.49,152,128,152s74.4,18.59,95.27,32Z" fill="currentColor"/></>,
  duotone: <><path d="M19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96Z" opacity="0.2" fill="currentColor"/><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const CoatHangerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
