import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,208l106.2-30.34A8,8,0,0,0,240,170V86a8,8,0,0,0-5.8-7.69L128,48,22.87,63A8,8,0,0,0,16,70.94V185.06A8,8,0,0,0,22.87,193Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,208l106.2-30.34A8,8,0,0,0,240,170V86a8,8,0,0,0-5.8-7.69L128,48,22.87,63A8,8,0,0,0,16,70.94V185.06A8,8,0,0,0,22.87,193Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,208l106.2-30.34A8,8,0,0,0,240,170V86a8,8,0,0,0-5.8-7.69L128,48,22.87,63A8,8,0,0,0,16,70.94V185.06A8,8,0,0,0,22.87,193Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,208l106.2-30.34A8,8,0,0,0,240,170V86a8,8,0,0,0-5.8-7.69L128,48,22.87,63A8,8,0,0,0,16,70.94V185.06A8,8,0,0,0,22.87,193Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M128,208l106.2-30.34A8,8,0,0,0,240,170V86a8,8,0,0,0-5.8-7.69L128,48,22.87,63A8,8,0,0,0,16,70.94V185.06A8,8,0,0,0,22.87,193Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ShippingContainerIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
