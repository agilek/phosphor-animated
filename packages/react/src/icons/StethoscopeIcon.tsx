import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="208" cy="160" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="208" cy="160" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="208" cy="160" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="208" cy="160" r="28" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40v-4" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="208" cy="160" r="32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M104,144v48a40,40,0,0,0,40,40h24a40,40,0,0,0,40-40h0" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M136,40h24V87.17c0,30.77-24.48,56.43-55.26,56.83A56,56,0,0,1,48,88V40H72" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const StethoscopeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
