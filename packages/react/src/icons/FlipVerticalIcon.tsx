import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M59.12,32.64A8,8,0,0,0,48,40v60a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M219.11,163.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v60a8,8,0,0,0,11.12,7.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FlipVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
