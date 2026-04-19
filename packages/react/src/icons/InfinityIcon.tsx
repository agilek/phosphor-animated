import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M106.63,152.13l-8.69,9.81a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-8.69,9.81" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/></>,
  light: <><path d="M106.63,152.13l-8.69,9.81a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-8.69,9.81" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M106.63,152.13l-8.69,9.81a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-8.69,9.81" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M101.28,158.17l-3.34,3.77a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-3.34,3.77" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM204.28,156.28a40,40,0,0,1-56.4.17L97.29,111.34,97,111A24,24,0,1,0,97,145c.36-.36.71-.73,1-1.1a8,8,0,1,1,12,10.6c-.55.62-1.13,1.23-1.71,1.81a40,40,0,1,1-.17-56.73l50.58,45.11.33.31A24,24,0,1,0,159,111c-.36.36-.7.72-1,1.1a8,8,0,0,1-12-10.59c.54-.62,1.12-1.24,1.71-1.82a40,40,0,0,1,56.57,56.56Z" fill="currentColor"/></>,
  duotone: <><path d="M97.94,161.94a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88Z" opacity="0.2" fill="currentColor"/><path d="M106.63,152.13l-8.69,9.81a48,48,0,1,1,0-67.88l60.12,67.88a48,48,0,1,0,0-67.88l-8.69,9.81" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const InfinityIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
