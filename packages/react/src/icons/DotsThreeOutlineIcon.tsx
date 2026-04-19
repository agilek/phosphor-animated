import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="48" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  light: <><circle cx="128" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="48" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="128" r="24" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  regular: <><circle cx="128" cy="128" r="24" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="48" cy="128" r="24" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="128" r="24" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  bold: <><circle cx="128" cy="128" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="208" cy="128" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="48" cy="128" r="20" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="24" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><circle cx="48" cy="128" r="24" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><circle cx="208" cy="128" r="24" strokeMiterlimit="10" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/></>,
};

export const DotsThreeOutlineIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
