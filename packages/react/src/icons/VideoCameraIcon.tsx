import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="24" y="64" width="176" height="128" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 112 248 80 248 176 200 144" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="24" y="64" width="176" height="128" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 112 248 80 248 176 200 144" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="24" y="64" width="176" height="128" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 112 248 80 248 176 200 144" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="24" y="64" width="176" height="128" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 112 244 80 244 176 200 144" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M192,72V184a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H176A16,16,0,0,1,192,72Zm58,.25a8.23,8.23,0,0,0-6.63,1.22L209.78,95.86A4,4,0,0,0,208,99.19v57.62a4,4,0,0,0,1.78,3.33l33.78,22.52a8,8,0,0,0,8.58.19,8.33,8.33,0,0,0,3.86-7.17V80A8,8,0,0,0,250,72.25Z" fill="currentColor"/></>,
  duotone: <><rect x="24" y="64" width="176" height="128" rx="8" opacity="0.2" fill="currentColor"/><rect x="24" y="64" width="176" height="128" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="200 112 248 80 248 176 200 144" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const VideoCameraIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
