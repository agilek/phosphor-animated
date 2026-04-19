import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M186.18,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M92.48,41.36A72,72,0,0,1,200,104c0,29.1,5.48,53.56,11.07,67.8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M186.18,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M92.48,41.36A72,72,0,0,1,200,104c0,29.1,5.48,53.56,11.07,67.8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M186.18,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M92.48,41.36A72,72,0,0,1,200,104c0,29.1,5.48,53.56,11.07,67.8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M99.94,37.67A72,72,0,0,1,200,104c0,23.24,3.49,40.15,7.75,52.26" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M178.91,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M186.18,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M92.48,41.36A72,72,0,0,1,200,104c0,29.1,5.48,53.56,11.07,67.8" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BellSimpleSlashIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
