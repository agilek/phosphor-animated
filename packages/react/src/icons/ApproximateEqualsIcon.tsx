import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M40,161.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,97.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M40,161.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,97.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M40,161.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,97.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M40,161.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,97.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M40,161.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M40,97.61c72-59.69,104,56.47,176-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const ApproximateEqualsIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
