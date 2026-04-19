import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  light: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  regular: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
  fill: <></>,
  duotone: <><path d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/></>,
};

export const CodaLogoIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
