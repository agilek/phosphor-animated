import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M92.63,36.89C96,28.86,108,31.29,108,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M163.37,36.89C160,28.86,148,31.29,148,40V200a8,8,0,0,0,8,8h60a8,8,0,0,0,7.37-11.12Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M120,40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-14.78-22.15l64-159.93.06-.14A16,16,0,0,1,120,40ZM229.33,208.84A16,16,0,0,1,216,216H152a16,16,0,0,1-16-16V40a16,16,0,0,1,30.74-6.23l.06.14,64,159.93A16,16,0,0,1,229.33,208.84ZM216,200l-.06-.15L152,40V200Z" fill="currentColor"/></>,
  duotone: <><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" opacity="0.2" fill="currentColor"/><path d="M96.63,36.89C100,28.86,112,31.29,112,40V200a8,8,0,0,1-8,8H40a8,8,0,0,1-7.37-11.12Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M159.37,36.89C156,28.86,144,31.29,144,40V200a8,8,0,0,0,8,8h64a8,8,0,0,0,7.37-11.12Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FlipHorizontalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
