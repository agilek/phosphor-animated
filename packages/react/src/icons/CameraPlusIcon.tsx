import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M80,64,93.63,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.65,3.56L176,64h32a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64Z" strokeWidth="8" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  light: <><line strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M80,64,93.63,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.65,3.56L176,64h32a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64Z" strokeWidth="12" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  regular: <><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M80,64,93.63,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.65,3.56L176,64h32a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  bold: <><line strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M80,64,93.63,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.65,3.56L176,64h32a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64Z" strokeWidth="24" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
  fill: <><path d="M208,56H180.28L169,39.12A16,16,0,0,0,155.72,32H100.28A16,16,0,0,0,87,39.12L75.72,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-48,88H136v24a8,8,0,0,1-16,0V144H96a8,8,0,0,1,0-16h24V104a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z" fill="currentColor"/></>,
  duotone: <><path d="M80,64,93.63,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.65,3.56L176,64h32a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64Z" fill="currentColor"/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><line strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/><path d="M80,64,93.63,43.56A8,8,0,0,1,100.28,40h55.44a8,8,0,0,1,6.65,3.56L176,64h32a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64Z" strokeWidth="16" className="draw-line" style={{animationDelay:"0.6s"}}/></>,
};

export const CameraPlusIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
