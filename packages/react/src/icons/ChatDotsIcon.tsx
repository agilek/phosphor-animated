import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="8" fill="currentColor"/><circle cx="84" cy="128" r="8" fill="currentColor"/><circle cx="172" cy="128" r="8" fill="currentColor"/><path d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><circle cx="128" cy="128" r="10" fill="currentColor"/><circle cx="84" cy="128" r="10" fill="currentColor"/><circle cx="172" cy="128" r="10" fill="currentColor"/><path d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="84" cy="128" r="12" fill="currentColor"/><circle cx="172" cy="128" r="12" fill="currentColor"/><path d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><circle cx="104" cy="128" r="16" fill="currentColor"/><circle cx="152" cy="128" r="16" fill="currentColor"/><path d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78l.09-.07L83,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="12" fill="currentColor"/><circle cx="84" cy="128" r="12" fill="currentColor"/><circle cx="172" cy="128" r="12" fill="currentColor"/><path d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z" opacity="0.2" fill="currentColor"/><path d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const ChatDotsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
