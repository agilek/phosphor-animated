import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="40" r="24" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="40" r="24" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="40" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="40" r="24" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M100,36a28,28,0,1,1,28,28A28,28,0,0,1,100,36ZM227.6,92.57A15.7,15.7,0,0,0,212,80H44a16,16,0,0,0-6.7,30.53l.06,0,53.89,23.73-21.92,83.3a16,16,0,0,0,7.9,20.91A15.83,15.83,0,0,0,84,240a16,16,0,0,0,14.44-9.06L128,180l29.58,51a16,16,0,0,0,29.07-13.35l-21.92-83.3,54-23.76A15.7,15.7,0,0,0,227.6,92.57Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="40" r="24" opacity="0.2" fill="currentColor"/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="40" r="24" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M39,102.9C27.31,97.5,31.15,80,44,80H212c12.87,0,16.71,17.5,5,22.9L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const PersonArmsSpreadIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
