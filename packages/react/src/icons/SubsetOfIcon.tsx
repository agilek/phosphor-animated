import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,56H104a56,56,0,0,0,0,112h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,56H104a56,56,0,0,0,0,112h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,56H104a56,56,0,0,0,0,112h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,56H104a56,56,0,0,0,0,112h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><line className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M200,56H104a56,56,0,0,0,0,112h96" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const SubsetOfIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
