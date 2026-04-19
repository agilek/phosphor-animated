import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line"/><path d="M152,80H112l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" strokeWidth="8" className="draw-line"/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line"/><path d="M152,80H112l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" strokeWidth="12" className="draw-line"/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line"/><path d="M152,80H112l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" strokeWidth="16" className="draw-line"/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line"/><path d="M152,80H112l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" strokeWidth="24" className="draw-line"/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-84,80a36,36,0,0,1,0,72,35.54,35.54,0,0,1-25.71-10.4,8,8,0,1,1,11.42-11.2A19.73,19.73,0,0,0,124,168a20,20,0,0,0,0-40,19.73,19.73,0,0,0-14.29,5.6,8,8,0,0,1-13.6-6.92l8-48A8,8,0,0,1,112,72h40a8,8,0,0,1,0,16H118.78l-4.19,25.14A38.8,38.8,0,0,1,124,112Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line"/><path d="M152,80H112l-8,48a27.57,27.57,0,0,1,20-8,28,28,0,0,1,0,56,27.57,27.57,0,0,1-20-8" strokeWidth="16" className="draw-line"/></>,
};

export const NumberSquareFiveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
