import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><ellipse cx="104" cy="128" rx="56" ry="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,32h48c30.93,0,56,43,56,96s-25.07,96-56,96H104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  light: <><ellipse cx="104" cy="128" rx="56" ry="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,32h48c30.93,0,56,43,56,96s-25.07,96-56,96H104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  regular: <><ellipse cx="104" cy="128" rx="56" ry="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,32h48c30.93,0,56,43,56,96s-25.07,96-56,96H104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  bold: <><ellipse cx="104" cy="128" rx="56" ry="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,32h48c30.93,0,56,43,56,96s-25.07,96-56,96H104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
  fill: <></>,
  duotone: <><ellipse cx="104" cy="128" rx="56" ry="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,32h48c30.93,0,56,43,56,96s-25.07,96-56,96H104" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"1.2s"}}/></>,
};

export const CoinVerticalIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
