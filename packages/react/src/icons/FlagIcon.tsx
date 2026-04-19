import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M232,56V176a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C105.87,170,82.79,158.61,56,179.77V224a8,8,0,0,1-16,0V56a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C167,62.46,190.79,74.2,218.76,50A8,8,0,0,1,232,56Z" fill="currentColor"/></>,
  duotone: <><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const FlagIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
