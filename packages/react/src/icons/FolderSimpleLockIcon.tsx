import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="152" y="168" width="72" height="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,168V156a20,20,0,0,1,40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="152" y="168" width="72" height="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,168V156a20,20,0,0,1,40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="152" y="168" width="72" height="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,168V156a20,20,0,0,1,40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M104,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v4" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="152" y="164" width="72" height="44" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,164V148a20,20,0,0,1,40,0v16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><rect x="152" y="168" width="72" height="40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M168,168V156a20,20,0,0,1,40,0v12" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const FolderSimpleLockIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
