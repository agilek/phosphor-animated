import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 48 168 48 120 208" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><polyline points="88 48 168 48 120 208" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><polyline points="88 48 168 48 120 208" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><polyline points="88 48 168 48 120 208" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM167.53,74.69l-40,112a8,8,0,1,1-15.06-5.38L148.65,80H96a8,8,0,0,1,0-16h64a8,8,0,0,1,7.53,10.69Z" fill="currentColor"/></>,
  duotone: <><path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2" fill="currentColor"/><polyline points="88 48 168 48 120 208" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberSevenIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
