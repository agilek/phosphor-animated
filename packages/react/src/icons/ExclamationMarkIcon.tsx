import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="200" r="12" fill="currentColor"/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><circle cx="128" cy="200" r="14" fill="currentColor"/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><circle cx="128" cy="200" r="16" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><circle cx="128" cy="200" r="20" fill="currentColor"/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM128,160a12,12,0,1,1-12,12A12,12,0,0,1,128,160Zm-8-24V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="24" width="176" height="208" rx="16" opacity="0.2" fill="currentColor"/><circle cx="128" cy="200" r="16" fill="currentColor"/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ExclamationMarkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
