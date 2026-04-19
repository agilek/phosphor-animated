import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,32H192a8,8,0,0,1,8,8V192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,32H192a8,8,0,0,1,8,8V192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,32H192a8,8,0,0,1,8,8V192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M164,228l-56-40L52,228V76a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92,28H196a8,8,0,0,1,8,8V188" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M168,224l-56-40L56,224V72a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M88,32H192a8,8,0,0,1,8,8V192" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const BookmarksSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
