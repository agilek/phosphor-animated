import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="152" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,105.6s32-25.67,80,7c50.47,34.3,80,20.85,80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M110.64,161.16C128.47,165,176,180,176,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M134.44,111.51C128.37,135.24,98.81,206.68,32,200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="152" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,105.6s32-25.67,80,7c50.47,34.3,80,20.85,80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M110.64,161.16C128.47,165,176,180,176,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M134.44,111.51C128.37,135.24,98.81,206.68,32,200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="152" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,105.6s32-25.67,80,7c50.47,34.3,80,20.85,80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M110.64,161.16C128.47,165,176,180,176,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M134.44,111.51C128.37,135.24,98.81,206.68,32,200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="152" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,109.6s32-25.67,80,7c50.47,34.3,80,20.85,80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M110.64,161.16C128.47,165,176,180,176,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M133.51,114.9C125.7,141.36,95.88,206.39,32,200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="152" cy="56" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M56,105.6s32-25.67,80,7c50.47,34.3,80,20.85,80,20.85" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M110.64,161.16C128.47,165,176,180,176,232" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M134.44,111.51C128.37,135.24,98.81,206.68,32,200" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const PersonSimpleRunIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
