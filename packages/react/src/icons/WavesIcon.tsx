import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,185.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><path d="M40,185.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><path d="M40,185.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><path d="M40,185.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,185.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,129.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M40,73.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const WavesIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
