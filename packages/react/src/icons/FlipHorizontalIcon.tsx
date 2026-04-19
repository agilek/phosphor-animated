import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M92.63,36.89C96,28.86,108,31.29,108,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M163.37,36.89C160,28.86,148,31.29,148,40V200a8,8,0,0,0,8,8h60a8,8,0,0,0,7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FlipHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
