import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59L19.63,134.59a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,120,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59L19.63,134.59a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,120,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59L19.63,134.59a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,120,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59L19.63,134.59a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,120,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M120,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59L19.63,134.59a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,120,71.85Z" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const RewindIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
