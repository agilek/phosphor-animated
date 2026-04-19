import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,129.61c78.55-59.69,113.45,56.47,192-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M177.4,210.33c-91-38.17-7.82-126.49-98.8-164.66" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M174.6,44.05C187,141.93,69,114.07,81.4,212" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  light: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,129.61c78.55-59.69,113.45,56.47,192-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M177.4,210.33c-91-38.17-7.82-126.49-98.8-164.66" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M174.6,44.05C187,141.93,69,114.07,81.4,212" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  regular: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,129.61c78.55-59.69,113.45,56.47,192-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M177.4,210.33c-91-38.17-7.82-126.49-98.8-164.66" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M174.6,44.05C187,141.93,69,114.07,81.4,212" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  bold: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,129.61c78.55-59.69,113.45,56.47,192-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M177.4,210.33c-91-38.17-7.82-126.49-98.8-164.66" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M174.6,44.05C187,141.93,69,114.07,81.4,212" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
  fill: <></>,
  duotone: <><circle cx="128" cy="128" r="96" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><path d="M32,129.61c78.55-59.69,113.45,56.47,192-3.22" className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/><path d="M177.4,210.33c-91-38.17-7.82-126.49-98.8-164.66" className="draw-line" pathLength={1} style={{animationDelay:"0.6s"}}/><path d="M174.6,44.05C187,141.93,69,114.07,81.4,212" className="draw-line" pathLength={1} style={{animationDelay:"0.9s"}}/></>,
};

export const SpinnerBallIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
