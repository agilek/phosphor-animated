import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18a8,8,0,0,1,5.47,7.59Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18a8,8,0,0,1,5.47,7.59Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18a8,8,0,0,1,5.47,7.59Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18a8,8,0,0,1,5.47,7.59Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M224,152c0,56-96,80-96,80s-96-24-96-80V125.77a8,8,0,0,1,5.47-7.59L128,88l90.53,30.18a8,8,0,0,1,5.47,7.59Z" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M56,112V56a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8v56" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const BoatIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
