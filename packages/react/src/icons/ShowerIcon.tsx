import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M248,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M248,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M248,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M244,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M248,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ShowerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
