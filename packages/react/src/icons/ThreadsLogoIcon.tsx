import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M200,77.65C189.86,51.29,168.57,32,128,32c-64,0-80,48-80,96s16,96,80,96c48,0,72-32,72-56,0-64-104-64-104-16,0,40,72,40,72-24,0-56-56-56-72-32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M200,77.65C189.86,51.29,168.57,32,128,32c-64,0-80,48-80,96s16,96,80,96c48,0,72-32,72-56,0-64-104-64-104-16,0,40,72,40,72-24,0-56-56-56-72-32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M200,77.65C189.86,51.29,168.57,32,128,32c-64,0-80,48-80,96s16,96,80,96c48,0,72-32,72-56,0-64-104-64-104-16,0,40,72,40,72-24,0-56-56-56-72-32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M200,77.65C189.86,51.29,168.57,32,128,32c-64,0-80,48-80,96s16,96,80,96c48,0,72-32,72-56,0-64-104-64-104-16,0,40,72,40,72-24,0-56-56-56-72-32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M200,77.65C189.86,51.29,168.57,32,128,32c-64,0-80,48-80,96s16,96,80,96c48,0,72-32,72-56,0-64-104-64-104-16,0,40,72,40,72-24,0-56-56-56-72-32" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const ThreadsLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
