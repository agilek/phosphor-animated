import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52L172,32l60,60-24,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72.82,131.18c9.37-3.65,25.78-6.36,47.18,4.82s37.81,8.47,47.18,4.82" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52L172,32l60,60-24,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72.82,131.18c9.37-3.65,25.78-6.36,47.18,4.82s37.81,8.47,47.18,4.82" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52L172,32l60,60-24,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72.82,131.18c9.37-3.65,25.78-6.36,47.18,4.82s37.81,8.47,47.18,4.82" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52L172,32l60,60-24,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72.82,131.18c9.37-3.65,25.78-6.36,47.18,4.82s37.81,8.47,47.18,4.82" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52L172,32l60,60-24,8Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M72.82,131.18c9.37-3.65,25.78-6.36,47.18,4.82s37.81,8.47,47.18,4.82" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const TestTubeIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
