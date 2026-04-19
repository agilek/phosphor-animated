import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M128,160V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M128,160V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M128,160V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M128,156V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M128,160V144c30.93,0,56-21.49,56-48s-25.07-48-56-48S72,69.49,72,96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const QuestionMarkIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
