import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><path d="M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M163.52,24.81a8,8,0,0,0-8.43.88L85.25,80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H85.25l69.84,54.31A7.94,7.94,0,0,0,160,232a8,8,0,0,0,8-8V32A8,8,0,0,0,163.52,24.81Z" fill="currentColor"/></>,
  duotone: <><path d="M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z" opacity="0.2" fill="currentColor"/><path d="M88,168H40a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H88l72-56V224Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const SpeakerSimpleNoneIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
