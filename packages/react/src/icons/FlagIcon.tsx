import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const FlagIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
