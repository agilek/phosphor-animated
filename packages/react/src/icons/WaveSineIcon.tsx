import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M24,128c104-221.7,104,221.7,208,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M24,128c104-221.7,104,221.7,208,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M24,128c104-221.7,104,221.7,208,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M24,128c104-221.7,104,221.7,208,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M24,128c104-221.7,104,221.7,208,0" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const WaveSineIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
