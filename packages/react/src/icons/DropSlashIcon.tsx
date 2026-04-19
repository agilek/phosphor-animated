import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M205.14,165.28A80.3,80.3,0,0,0,208,144c0-72-80-128-80-128A242.3,242.3,0,0,0,95.54,44.72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M74.9,69.59C60.11,90.4,48,116,48,144a80,80,0,0,0,141.29,51.42" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M205.14,165.28A80.3,80.3,0,0,0,208,144c0-72-80-128-80-128A242.3,242.3,0,0,0,95.54,44.72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M74.9,69.59C60.11,90.4,48,116,48,144a80,80,0,0,0,141.29,51.42" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M205.14,165.28A80.3,80.3,0,0,0,208,144c0-72-80-128-80-128A242.3,242.3,0,0,0,95.54,44.72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M74.9,69.59C60.11,90.4,48,116,48,144a80,80,0,0,0,141.29,51.42" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M74.9,69.59C60.11,90.4,48,116,48,144a80,80,0,0,0,141.29,51.42" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M207.16,155.61A80.84,80.84,0,0,0,208,144c0-72-80-128-80-128a233.87,233.87,0,0,0-26.84,23" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M205.14,165.28A80.3,80.3,0,0,0,208,144c0-72-80-128-80-128A242.3,242.3,0,0,0,95.54,44.72" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M74.9,69.59C60.11,90.4,48,116,48,144a80,80,0,0,0,141.29,51.42" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const DropSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
