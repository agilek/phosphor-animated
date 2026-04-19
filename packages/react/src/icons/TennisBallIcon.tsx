import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M127.83,32A96,96,0,0,1,32,127.83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128.17A96,96,0,0,0,128.17,224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M127.83,32A96,96,0,0,1,32,127.83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128.17A96,96,0,0,0,128.17,224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M127.83,32A96,96,0,0,1,32,127.83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128.17A96,96,0,0,0,128.17,224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M127.83,32A96,96,0,0,1,32,127.83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128.17A96,96,0,0,0,128.17,224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M127.83,32A96,96,0,0,1,32,127.83" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,128.17A96,96,0,0,0,128.17,224" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const TennisBallIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
