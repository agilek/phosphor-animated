import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M80,236a20,20,0,0,1,20-20h40a20,20,0,0,0,0-40h-4c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SmileyMeltingIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
