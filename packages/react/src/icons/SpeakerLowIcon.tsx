import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,106.85a32,32,0,0,1,0,42.3" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,106.85a32,32,0,0,1,0,42.3" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,106.85a32,32,0,0,1,0,42.3" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,106.87a32,32,0,0,1,0,42.3" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M160,32.25V223.69a8.29,8.29,0,0,1-3.91,7.18,8,8,0,0,1-9-.56l-65.57-51A4,4,0,0,1,80,176.16V79.84a4,4,0,0,1,1.55-3.15l65.57-51a8,8,0,0,1,10,.16A8.27,8.27,0,0,1,160,32.25ZM60,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H60a4,4,0,0,0,4-4V84A4,4,0,0,0,60,80ZM198,101.56a8,8,0,1,0-12,10.58,24,24,0,0,1,0,31.72,8,8,0,1,0,12,10.58,40,40,0,0,0,0-52.88Z" fill="currentColor"/></>,
  duotone: <><path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80Z" opacity="0.2" fill="currentColor"/><path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M192,106.85a32,32,0,0,1,0,42.3" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const SpeakerLowIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
