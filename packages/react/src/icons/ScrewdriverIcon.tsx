import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0a42.42,42.42,0,0,1,0,60l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0a42.42,42.42,0,0,1,0,60l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0a42.42,42.42,0,0,1,0,60l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0a42.42,42.42,0,0,1,0,60l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0a42.42,42.42,0,0,1,0,60l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const ScrewdriverIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
