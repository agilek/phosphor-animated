import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,80a56,56,0,0,1-56-56L35,82.41a8,8,0,0,0-.63,11.87L148.06,208H224a8,8,0,0,0,8-8V180.94a8,8,0,0,0-4.42-7.15L199,159.48a56,56,0,0,1-31-50.09Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M97.31,112,53.6,68.28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><path d="M168,80a56,56,0,0,1-56-56L35,82.41a8,8,0,0,0-.63,11.87L148.06,208H224a8,8,0,0,0,8-8V180.94a8,8,0,0,0-4.42-7.15L199,159.48a56,56,0,0,1-31-50.09Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M97.31,112,53.6,68.28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><path d="M168,80a56,56,0,0,1-56-56L35,82.41a8,8,0,0,0-.63,11.87L148.06,208H224a8,8,0,0,0,8-8V180.94a8,8,0,0,0-4.42-7.15L199,159.48a56,56,0,0,1-31-50.09Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M97.31,112,53.6,68.28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><path d="M168,80a56,56,0,0,1-56-56L35,82.41a8,8,0,0,0-.63,11.87L148.06,208H224a8,8,0,0,0,8-8V180.94a8,8,0,0,0-4.42-7.15L199,159.48a56,56,0,0,1-31-50.09Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><path d="M168,80a56,56,0,0,1-56-56L35,82.41a8,8,0,0,0-.63,11.87L148.06,208H224a8,8,0,0,0,8-8V180.94a8,8,0,0,0-4.42-7.15L199,159.48a56,56,0,0,1-31-50.09Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M97.31,112,53.6,68.28" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const SneakerMoveIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
