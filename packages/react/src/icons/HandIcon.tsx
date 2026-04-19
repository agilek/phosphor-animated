import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,120V44a20,20,0,0,1,40,0v76" strokeWidth="8" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,120V44a20,20,0,0,1,40,0v76" strokeWidth="12" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,120V44a20,20,0,0,1,40,0v76" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,120V44a20,20,0,0,1,40,0v76" strokeWidth="24" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
  fill: <><path d="M216,64v90.93c0,46.2-36.85,84.55-83,85.06A83.71,83.71,0,0,1,72.6,215.4C50.79,192.33,26.15,136,26.15,136a16,16,0,0,1,6.53-22.23c7.66-4,17.1-.84,21.4,6.62l21,36.44a6.09,6.09,0,0,0,6,3.09l.12,0A8.19,8.19,0,0,0,88,151.74V48a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V112a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V32a16,16,0,0,1,16.77-16c8.61.4,15.23,7.82,15.23,16.43V120a8,8,0,0,0,8.53,8,8.17,8.17,0,0,0,7.47-8.25V64.45c0-8.61,6.62-16,15.23-16.43A16,16,0,0,1,216,64Z" fill="currentColor"/></>,
  duotone: <><path d="M188,56a20,20,0,0,0-20,20V44a20,20,0,0,0-40,0V60a20,20,0,0,0-40,0v92L69.32,122a20,20,0,0,0-34.64,20c32.57,68.72,49.14,90,93.32,90a80,80,0,0,0,80-80V76A20,20,0,0,0,188,56Z" opacity="0.2" fill="currentColor"/><path d="M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/><path d="M128,120V44a20,20,0,0,1,40,0v76" strokeWidth="16" className="draw-line" style={{animationDelay:"0.3s"}}/></>,
};

export const HandIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
