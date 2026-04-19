import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,104V64a40,40,0,0,1,80,0v40" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,104V64a40,40,0,0,1,80,0v40" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,104V64a40,40,0,0,1,80,0v40" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,104V64a40,40,0,0,1,80,0v40" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M239.89,198.12l-14.26-120a16,16,0,0,0-16-14.12H176a48,48,0,0,0-96,0H46.33a16,16,0,0,0-16,14.12l-14.26,120A16,16,0,0,0,20,210.6a16.13,16.13,0,0,0,12,5.4H223.92A16.13,16.13,0,0,0,236,210.6,16,16,0,0,0,239.89,198.12ZM96,104a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32-72a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm48,72a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z" fill="currentColor"/></>,
  duotone: <><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" opacity="0.2" fill="currentColor"/><path d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M88,104V64a40,40,0,0,1,80,0v40" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const HandbagIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
