import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM152,168a8,8,0,0,1,0,16H104a8,8,0,0,1-6.4-12.8l43.17-57.56a16,16,0,1,0-27.86-15,8,8,0,0,1-15.09-5.34,32,32,0,1,1,55.74,29.93L120,168Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" fill="currentColor"/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M152,176H104l43.17-57.56A24,24,0,1,0,105.37,96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NumberSquareTwoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
