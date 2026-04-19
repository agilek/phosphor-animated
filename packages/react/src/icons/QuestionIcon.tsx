import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="180" r="8" fill="currentColor"/><path d="M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="180" r="10" fill="currentColor"/><path d="M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="180" r="12" fill="currentColor"/><path d="M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="180" r="16" fill="currentColor"/><circle cx="128" cy="128" r="96" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,140v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,88.54,96,104v4" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z" fill="currentColor"/></>,
  duotone: <><circle cx="128" cy="128" r="96" opacity="0.2" fill="currentColor"/><circle cx="128" cy="180" r="12" fill="currentColor"/><path d="M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="128" cy="128" r="96" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const QuestionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
