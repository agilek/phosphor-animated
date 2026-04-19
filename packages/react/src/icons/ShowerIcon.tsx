import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="52" cy="236" r="8" fill="currentColor"/><circle cx="84" cy="204" r="8" fill="currentColor"/><circle cx="20" cy="204" r="8" fill="currentColor"/><circle cx="52" cy="172" r="8" fill="currentColor"/><path d="M248,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><circle cx="52" cy="236" r="10" fill="currentColor"/><circle cx="84" cy="204" r="10" fill="currentColor"/><circle cx="20" cy="204" r="10" fill="currentColor"/><circle cx="52" cy="172" r="10" fill="currentColor"/><path d="M248,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><circle cx="52" cy="236" r="12" fill="currentColor"/><circle cx="84" cy="204" r="12" fill="currentColor"/><circle cx="20" cy="204" r="12" fill="currentColor"/><circle cx="52" cy="172" r="12" fill="currentColor"/><path d="M248,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><circle cx="52" cy="236" r="16" fill="currentColor"/><circle cx="84" cy="204" r="16" fill="currentColor"/><circle cx="20" cy="204" r="16" fill="currentColor"/><circle cx="52" cy="172" r="16" fill="currentColor"/><path d="M244,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M64,236a12,12,0,1,1-12-12A12,12,0,0,1,64,236Zm20-44a12,12,0,1,0,12,12A12,12,0,0,0,84,192Zm-64,0a12,12,0,1,0,12,12A12,12,0,0,0,20,192Zm32-32a12,12,0,1,0,12,12A12,12,0,0,0,52,160ZM248,32H216a8,8,0,0,0-5.66,2.34l-30.2,30.2L53.38,86.19a16,16,0,0,0-8.69,27.1l98,98a16,16,0,0,0,27.09-8.66L191.46,75.86,219.31,48H248a8,8,0,0,0,0-16Z" fill="currentColor"/></>,
  duotone: <><path d="M184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54Z" opacity="0.2" fill="currentColor"/><circle cx="52" cy="236" r="12" fill="currentColor"/><circle cx="84" cy="204" r="12" fill="currentColor"/><circle cx="20" cy="204" r="12" fill="currentColor"/><circle cx="52" cy="172" r="12" fill="currentColor"/><path d="M248,40H216L184,72,161.91,201.31a8,8,0,0,1-13.54,4.34l-98-98a8,8,0,0,1,4.34-13.54L184,72" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const ShowerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
