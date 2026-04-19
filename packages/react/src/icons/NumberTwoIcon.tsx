import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M91.33,72a40,40,0,1,1,68.61,40.07L88,208h80" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const NumberTwoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
