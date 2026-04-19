import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="16" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="16" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="16" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="20" fill="currentColor"/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM80,96a16,16,0,1,1,16,16A16,16,0,0,1,80,96Z" fill="currentColor"/></>,
  duotone: <><path d="M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h8.69L166.34,106.34a8,8,0,0,1,11.32,0L216,144.69V48A8,8,0,0,0,208,40ZM96,112a16,16,0,1,1,16-16A16,16,0,0,1,96,112Z" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="96" cy="96" r="16" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M56.69,216,166.34,106.34a8,8,0,0,1,11.32,0L216,144.69" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ImageSquareIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
