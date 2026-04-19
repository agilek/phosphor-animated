import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="128" cy="128" rx="36" ry="48" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><ellipse cx="128" cy="128" rx="36" ry="48" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><ellipse cx="128" cy="128" rx="36" ry="48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><ellipse cx="128" cy="128" rx="36" ry="48" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M156,128c0,14.86-5.9,40-28,40s-28-25.14-28-40,5.9-40,28-40S156,113.14,156,128Zm68-80V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-52,80c0-14.25-3.56-27.53-10-37.39C154,78.44,142.23,72,128,72s-26,6.44-34,18.61c-6.47,9.86-10,23.14-10,37.39s3.56,27.53,10,37.39c8,12.17,19.74,18.61,34,18.61s26-6.44,34-18.61C168.44,155.53,172,142.25,172,128Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="40" width="176" height="176" rx="8" opacity="0.2" fill="currentColor"/><ellipse cx="128" cy="128" rx="36" ry="48" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const NumberSquareZeroIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
