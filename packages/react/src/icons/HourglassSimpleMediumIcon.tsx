import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const HourglassSimpleMediumIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
