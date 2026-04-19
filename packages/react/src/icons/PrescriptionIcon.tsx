import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M72,128h52a44,44,0,0,0,0-88H72V192" strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="8" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M72,128h52a44,44,0,0,0,0-88H72V192" strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M72,128h52a44,44,0,0,0,0-88H72V192" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M72,128h52a44,44,0,0,0,0-88H72V192" strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M128,120H96V72h32a24,24,0,0,1,0,48Zm96-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM189.66,186.34,175.31,172l14.35-14.34a8,8,0,0,0-11.32-11.32L164,160.69l-26-26A40,40,0,0,0,128,56H88a8,8,0,0,0-8,8V176a8,8,0,0,0,16,0V136h20.69l36,36-14.35,14.34a8,8,0,0,0,11.32,11.32L164,183.31l14.34,14.35a8,8,0,0,0,11.32-11.32Z" fill="currentColor"/></>,
  duotone: <><path d="M72,128h52a44,44,0,0,0,0-88H72Z" opacity="0.2" fill="currentColor"/><path d="M72,128h52a44,44,0,0,0,0-88H72V192" strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line strokeWidth="16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const PrescriptionIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
