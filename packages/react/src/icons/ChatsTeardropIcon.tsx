import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M96,176H32a8,8,0,0,1-8-8V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.1,176A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152a72,72,0,0,0-68.06-71.89" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M96,176H32a8,8,0,0,1-8-8V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.1,176A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152a72,72,0,0,0-68.06-71.89" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M96,176H32a8,8,0,0,1-8-8V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.1,176A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152a72,72,0,0,0-68.06-71.89" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M96,176H32a8,8,0,0,1-8-8V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.1,176A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152a72,72,0,0,0-68.06-71.89" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M169.57,72.59A80,80,0,0,0,16,104v64a16,16,0,0,0,16,16H86.67A80.15,80.15,0,0,0,160,232h64a16,16,0,0,0,16-16V152A80,80,0,0,0,169.57,72.59ZM224,216H160a64.14,64.14,0,0,1-55.68-32.43A79.93,79.93,0,0,0,174.7,89.71,64,64,0,0,1,224,152Z" fill="currentColor"/></>,
  duotone: <><path d="M163.94,80.11h0A71.83,71.83,0,0,1,168,104h0a72,72,0,0,1-72,72H92.1A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152A72,72,0,0,0,163.94,80.11Z" opacity="0.2" fill="currentColor"/><path d="M96,176H32a8,8,0,0,1-8-8V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M92.1,176A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152a72,72,0,0,0-68.06-71.89" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ChatsTeardropIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
