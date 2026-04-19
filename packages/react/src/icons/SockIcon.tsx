import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,112a48,48,0,0,0-37.71,77.71" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,112a48,48,0,0,0-37.71,77.71" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,112a48,48,0,0,0-37.71,77.71" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,112a48,48,0,0,0-37.71,77.71" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M200,32V145.37a16,16,0,0,1-4.69,11.32l-68.4,68.4a50.92,50.92,0,0,1-72,0h0a50.92,50.92,0,0,1,0-72L96,112V32a8,8,0,0,1,8-8h88A8,8,0,0,1,200,32Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,112a48,48,0,0,0-37.71,77.71" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SockIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
