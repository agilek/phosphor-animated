import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,160V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="208" r="12" fill="currentColor"/></>,
  light: <><path d="M128,160V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="208" r="14" fill="currentColor"/></>,
  regular: <><path d="M128,160V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="208" r="16" fill="currentColor"/></>,
  bold: <><path d="M128,156V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="208" r="20" fill="currentColor"/></>,
  fill: <><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM136,143.28V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.23,139.93,136,143.28ZM140,180a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z" fill="currentColor"/></>,
  duotone: <><rect x="40" y="24" width="176" height="208" rx="16" opacity="0.2" fill="currentColor"/><path d="M128,160V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="208" r="16" fill="currentColor"/></>,
};

export const QuestionMarkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
