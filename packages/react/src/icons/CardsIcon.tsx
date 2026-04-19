import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="32" y="80" width="160" height="128" rx="8" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,48H216a8,8,0,0,1,8,8V176" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="32" y="80" width="160" height="128" rx="8" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,48H216a8,8,0,0,1,8,8V176" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="32" y="80" width="160" height="128" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,48H216a8,8,0,0,1,8,8V176" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="28" y="84" width="160" height="128" rx="8" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,44H220a8,8,0,0,1,8,8V176" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><rect x="24" y="72" width="176" height="144" rx="16" fill="currentColor"/><path d="M216,40H64a8,8,0,0,0,0,16H216V176a8,8,0,0,0,16,0V56A16,16,0,0,0,216,40Z" fill="currentColor"/></>,
  duotone: <><rect x="32" y="80" width="160" height="128" rx="8" opacity="0.2" fill="currentColor"/><rect x="32" y="80" width="160" height="128" rx="8" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M64,48H216a8,8,0,0,1,8,8V176" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const CardsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
