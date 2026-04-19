import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 144 104 96 152 72 152 144" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 144 104 96 152 72 152 144" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 144 104 96 152 72 152 144" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 148 104 104 152 80 152 148" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,215.3V156a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v59.3" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM96,210V152h64v58a88.33,88.33,0,0,1-64,0Zm94.22-19.78A88.09,88.09,0,0,1,176,201.77V152a16,16,0,0,0-16-16V72a8,8,0,0,0-11.58-7.16l-48,24A8,8,0,0,0,96,96v40a16,16,0,0,0-16,16v49.77a88,88,0,1,1,110.22-11.55Z" fill="currentColor"/></>,
  duotone: <><path d="M195.88,60.12A96,96,0,1,0,88,215.29V152a8,8,0,0,1,8-8h8V96l48-24v72h8a8,8,0,0,1,8,8v63.29A96,96,0,0,0,195.88,60.12Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><polyline points="104 144 104 96 152 72 152 144" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const HighlighterCircleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
