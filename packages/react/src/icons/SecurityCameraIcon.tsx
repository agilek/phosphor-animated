import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H244" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M15,158.93A10,10,0,0,0,22,176H60.69l29.65,29.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const SecurityCameraIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
