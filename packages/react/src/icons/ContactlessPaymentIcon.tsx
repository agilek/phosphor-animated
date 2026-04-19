import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M90,104a51,51,0,0,1,0,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M146,72a119,119,0,0,1,0,112" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M118,88a85,85,0,0,1,0,80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M90,104a51,51,0,0,1,0,48" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M146,72a119,119,0,0,1,0,112" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M118,88a85,85,0,0,1,0,80" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M90,104a51,51,0,0,1,0,48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M146,72a119,119,0,0,1,0,112" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M118,88a85,85,0,0,1,0,80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M142,72a119,119,0,0,1,0,112" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M106,88a85,85,0,0,1,0,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M90,104a51,51,0,0,1,0,48" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M146,72a119,119,0,0,1,0,112" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M118,88a85,85,0,0,1,0,80" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const ContactlessPaymentIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
