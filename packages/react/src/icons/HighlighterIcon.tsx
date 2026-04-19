import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><polyline points="88 128 24 192 96 216 136 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><polyline points="88 128 24 192 96 216 136 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><polyline points="88 128 24 192 96 216 136 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><polyline points="88 128 24 192 96 216 136 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M244,116l-46.34,46.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L148,20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><polyline points="88 128 24 192 96 216 136 176" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const HighlighterIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
