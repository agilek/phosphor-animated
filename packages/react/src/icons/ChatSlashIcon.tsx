import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M105.79,56H216a8,8,0,0,1,8,8V186" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M105.79,56H216a8,8,0,0,1,8,8V186" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M105.79,56H216a8,8,0,0,1,8,8V186" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M116.6,56H216a8,8,0,0,1,8,8V174.14" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M213.92,210.61a8,8,0,1,1-11.84,10.76L189.92,208H83l-32.6,28.16-.08.07A15.94,15.94,0,0,1,40,240a16.13,16.13,0,0,1-6.8-1.52A15.85,15.85,0,0,1,24,224V64A16,16,0,0,1,40,48h4.46l-2.38-2.62A8,8,0,1,1,53.92,34.62ZM216,48H96.75a4,4,0,0,0-3,6.69L225,199.06a4,4,0,0,0,7-2.69V64A16,16,0,0,0,216,48Z" fill="currentColor"/></>,
  duotone: <><path d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z" opacity="0.2" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M193.45,200H80L45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H62.55" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M105.79,56H216a8,8,0,0,1,8,8V186" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const ChatSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
