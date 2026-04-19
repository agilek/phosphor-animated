import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184.76,60.75c27.13-7.21,47.41-6.45,53.44,3.94,11,18.93-29.45,62.61-90.32,97.58s-119.1,48-130.08,29c-6.05-10.43,3.51-28.37,23.49-48.23" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><circle cx="128" cy="128" r="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184.76,60.75c27.13-7.21,47.41-6.45,53.44,3.94,11,18.93-29.45,62.61-90.32,97.58s-119.1,48-130.08,29c-6.05-10.43,3.51-28.37,23.49-48.23" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><circle cx="128" cy="128" r="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184.76,60.75c27.13-7.21,47.41-6.45,53.44,3.94,11,18.93-29.45,62.61-90.32,97.58s-119.1,48-130.08,29c-6.05-10.43,3.51-28.37,23.49-48.23" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><circle cx="128" cy="128" r="84" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M180,62.06c29.49-8.58,51.79-8.35,58.16,2.63,11,18.93-29.45,62.61-90.32,97.58s-119.1,48-130.08,29c-6.4-11,4.65-30.44,27-51.64" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="88" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M184.76,60.75c27.13-7.21,47.41-6.45,53.44,3.94,11,18.93-29.45,62.61-90.32,97.58s-119.1,48-130.08,29c-6.05-10.43,3.51-28.37,23.49-48.23" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const PlanetIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
