import '../styles.css';
import { Icon, type IconWeights } from '../Icon';
import type { IconProps } from '../types';

const WEIGHTS: IconWeights = {
  thin: <><path d="M16,32H40L76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11" strokeWidth="8" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="88" cy="216" r="12" fill="currentColor"/><circle cx="192" cy="216" r="12" fill="currentColor"/></>,
  light: <><path d="M16,32H40L76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11" strokeWidth="12" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="88" cy="216" r="14" fill="currentColor"/><circle cx="192" cy="216" r="14" fill="currentColor"/></>,
  regular: <><circle cx="88" cy="216" r="16" fill="currentColor"/><circle cx="192" cy="216" r="16" fill="currentColor"/><path d="M16,32H40L76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
  bold: <><path d="M20,32H40L76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11" strokeWidth="24" className="draw-line" style={{animationDelay:"0s"}}/><circle cx="88" cy="220" r="20" fill="currentColor"/><circle cx="192" cy="220" r="20" fill="currentColor"/></>,
  fill: <><path d="M239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM88,200a16,16,0,1,0,16,16A16,16,0,0,0,88,200Zm104,0a16,16,0,1,0,16,16A16,16,0,0,0,192,200Z" fill="currentColor"/></>,
  duotone: <><path d="M76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11Z" opacity="0.2" fill="currentColor"/><circle cx="88" cy="216" r="16" fill="currentColor"/><circle cx="192" cy="216" r="16" fill="currentColor"/><path d="M16,32H40L76.75,164.28A16,16,0,0,0,92.16,176H191a16,16,0,0,0,15.42-11.72L232,72H51.11" strokeWidth="16" className="draw-line" style={{animationDelay:"0s"}}/></>,
};

export const ShoppingCartSimpleIcon = (props: IconProps) => <Icon weights={WEIGHTS} {...props} />;
