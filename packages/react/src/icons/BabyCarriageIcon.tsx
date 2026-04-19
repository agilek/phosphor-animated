import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M48,112H232a0,0,0,0,1,0,0v0a72,72,0,0,1-72,72H120a72,72,0,0,1-72-72v0A0,0,0,0,1,48,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M16,80a32,32,0,0,1,32,32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M48,112H232a0,0,0,0,1,0,0v0a72,72,0,0,1-72,72H120a72,72,0,0,1-72-72v0A0,0,0,0,1,48,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M16,80a32,32,0,0,1,32,32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M48,112H232a0,0,0,0,1,0,0v0a72,72,0,0,1-72,72H120a72,72,0,0,1-72-72v0A0,0,0,0,1,48,112Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M16,80a32,32,0,0,1,32,32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M48,112H232a0,0,0,0,1,0,0v0a72,72,0,0,1-72,72H120a72,72,0,0,1-72-72v0a0,0,0,0,1,0,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M48,112A28,28,0,0,0,20,84" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M48,112H232a0,0,0,0,1,0,0v0a72,72,0,0,1-72,72H120a72,72,0,0,1-72-72v0a0,0,0,0,1,0,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M16,80a32,32,0,0,1,32,32" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BabyCarriageIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
