import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="168" r="48" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="168" r="48" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="168" r="48" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="168" r="48" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M108,92a20,20,0,1,1,20,20A20,20,0,0,1,108,92Zm20,36a28,28,0,1,0,28,28A28,28,0,0,0,128,128Zm88-88V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40ZM172,156a44,44,0,0,0-20.23-37,36,36,0,1,0-47.54,0A44,44,0,1,0,172,156Z" fill="currentColor"/></>,
  duotone: <><path d="M216,40V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V40A16,16,0,0,1,56,24H200A16,16,0,0,1,216,40Z" opacity="0.2" fill="currentColor"/><circle cx="128" cy="168" r="48" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="128" cy="80" r="40" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const NumberEightIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
