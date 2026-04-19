import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const EarIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
