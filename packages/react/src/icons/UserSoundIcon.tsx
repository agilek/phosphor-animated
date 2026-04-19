import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="108" cy="108" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,208c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,68.74a100.33,100.33,0,0,1,0,78.52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M229.36,56a132.39,132.39,0,0,1,0,104" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="108" cy="108" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,208c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,68.74a100.33,100.33,0,0,1,0,78.52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M229.36,56a132.39,132.39,0,0,1,0,104" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="108" cy="108" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,208c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,68.74a100.33,100.33,0,0,1,0,78.52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M229.36,56a132.39,132.39,0,0,1,0,104" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="108" cy="108" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,208c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M229.36,56a132.39,132.39,0,0,1,0,104" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M196,69.57a96.3,96.3,0,0,1,0,76.86" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="108" cy="108" r="60" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M24,208c20.55-24.45,49.56-40,84-40s63.45,15.55,84,40" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M200,68.74a100.33,100.33,0,0,1,0,78.52" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M229.36,56a132.39,132.39,0,0,1,0,104" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const UserSoundIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
