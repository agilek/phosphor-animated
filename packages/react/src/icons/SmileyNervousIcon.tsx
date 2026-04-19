import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M86.72,165.81C92.65,161.43,94.79,152,104,152c12,0,12,16,24,16s12-16,24-16c9.21,0,11.35,9.43,17.28,13.81" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,168c12,0,12-16,24-16s12,16,24,16,12-16,24-16,12,16,24,16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SmileyNervousIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
