import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L183,158.21l45.69,32.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L158.21,183Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  light: <><path d="M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L183,158.21l45.69,32.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L158.21,183Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  regular: <><path d="M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L183,158.21l45.69,32.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L158.21,183Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  bold: <><path d="M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L185,156.21l43.69,34.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L156.21,185Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
  fill: <></>,
  duotone: <><path d="M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L183,158.21l45.69,32.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L158.21,183Z" className="draw-line" pathLength={1} style={{animationDelay:"0s"}}/><line className="draw-line" pathLength={1} style={{animationDelay:"0.3s"}}/></>,
};

export const PingPongIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
